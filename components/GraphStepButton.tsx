/*
  Re-usable button component to toggle the steps for the computational graph construction
*/

// Imports
import React from "react";
import {customNodeStyle} from "../styles/GraphCustomStyle";

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
      } else {
        // Reset styles in the graph
        const specificStyles = customNodeStyle(nodeIds, "grey", edgeIds, "grey");
        specificStyles.forEach(({ selector }) => {
          cyRef.current!.$(selector).style({
            "background-color": "grey",
            "underlay-opacity": 0,
            "underlay-padding": 0,
          });
        });

        // Remove styling from the equation
        const equationToTarget = document.querySelector(`[data-equation="${equationName}"]`);
        if (equationToTarget) {
          equationStyle.split(" ").forEach((individualStyleClass) => {
            equationToTarget.classList.remove(individualStyleClass);
          })
        }

        console.log(`${label} Highlight removed`);
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
