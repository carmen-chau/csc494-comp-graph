/*
  Re-usable button component to toggle the steps for the computational graph construction
*/

// Imports
import React from "react";
import { customNodeStyle } from "../styles/GraphCustomStyle";

interface GraphStepButtonProp {
  label: string; // Text for the button
  nodeIds: string[]; // String ids of nodes to highlight in the graph
  edgeIds: string[]; // String ids of edges to highlight in the graph
  highlightColour: string; // Highlight color for BOTH the graph nodes and edges. TODO: MAKE THIS AS 2 SEPERATE ATTRIBUTES IF NEED BE
  isHighlighted: boolean; // Button state variable to track highlight status
  setHighlighted: React.Dispatch<React.SetStateAction<boolean>>; // Button state setter function
  equationName: string; // Equation to highlight
  equationStyle: string; // Additional styling to add to the equation
  cyRef: React.RefObject<any>; // Cytoscape reference
  children?: React.ReactNode;
}

//TEMPORARY VARIABLES, RESOLVE LATER
const allNodeIds = ["x1", "x2", "b1_1", "w11_1", "w12_1", "z1", "b2_1", "w21_1", "w22_1", "z2"]
const allEdgeIds = ["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1",
  "x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]

const GraphStepButton: React.FC<GraphStepButtonProp> = ({
  label,
  nodeIds,
  edgeIds,
  highlightColour,
  isHighlighted,
  setHighlighted,
  equationName,
  equationStyle,
  cyRef,
  children,
}) => {
  const handleClick = () => {
    if (!cyRef.current) {
      return; // Prevent working with an undefined Cytoscape instance
    }

    cyRef.current.batch(() => {

      // Before we check state of button, we always reset the graph back to default styling first

      // Reset node styles each time a button is pressed
      const resetStyles = customNodeStyle(allNodeIds, "grey", allEdgeIds, "grey");
      resetStyles.forEach(({ selector }) => {
        cyRef.current!.$(selector).style({
          "background-color": "grey",
          "underlay-opacity": 0,
          "underlay-padding": 0,
        });
      });

      // Remove styling from all math equations
      document.querySelectorAll("[data-equation]").forEach((equation) => {
        equation.className = ""; 
      });

      if (!isHighlighted) {
        // Apply styles to the graph
        const specificStyles = customNodeStyle(nodeIds, highlightColour, edgeIds, highlightColour);
        specificStyles.forEach(({ selector, style }) => {
          cyRef.current!.$(selector).style(style);
        });

        // Apply styling to the specific equation
        const equationToTarget = document.querySelector(`[data-equation="${equationName}"]`);
        if (equationToTarget) {
          equationStyle.split(" ").forEach((individualStyleClass) => {
            equationToTarget.classList.add(individualStyleClass);
          });
        }

        console.log(`${label} Highlight applied`);
      }
    });
    cyRef.current.style().update();
    setHighlighted(!isHighlighted);
  };

  return (
    <button
      className={`mb-4 px-6 py-2 bg-blue text-black font-semibold rounded-lg shadow-md hover:opacity-80 transition`} // Old "button" look
      // className={`mb-4 px-6 py-2 bg-blue text-black font-semibold hover:opacity-80 transition`}
      onClick={handleClick}
    >
      {children ?? label}
    </button>
  );
};

export default GraphStepButton;
