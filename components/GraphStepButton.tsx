/*
  Re-usable button component to toggle the steps for the computational graph construction
*/

// Imports
import React from "react";
import { customNodeStyle } from "../styles/GraphCustomStyle";
import {getNodeIds, getEdgeIds} from "../utils/GraphHelpers";
import {nodeDataList, edgeDataList} from "../data/CompGraph1Data";

interface GraphStepButtonProp {
  label: string; // Text for the button
  nodeIds: string[]; // String ids of nodes to highlight in the graph
  edgeIds: string[]; // String ids of edges to highlight in the graph
  highlightColour: string; // Highlight color for BOTH the graph nodes and edges. TODO: MAKE THIS AS 2 SEPERATE ATTRIBUTES IF NEED BE
  isGraphHighlighted: boolean; // Button state variable to track highlight status
  setGraphHighlighted: React.Dispatch<React.SetStateAction<boolean>>; // Button state setter function
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
  equationName: string; // Equation to highlight
  equationStyle: string; // Additional styling to add to the equation
  cyRef: React.RefObject<any>; // Cytoscape reference
  //children?: React.ReactNode;
}

//TEMPORARY HARDCODED VARIABLES, RESOLVE LATER
// const allNodeIds = ["x1", "x2", "b1_1", "w11_1", "w12_1", "z1", "b2_1", "w21_1", "w22_1", "z2"]
// const allEdgeIds = ["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1",
//   "x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]

const allNodeIds = getNodeIds(nodeDataList);
const allEdgeIds = getEdgeIds(edgeDataList);


const GraphStepButton: React.FC<GraphStepButtonProp> = ({
  label,
  nodeIds,
  edgeIds,
  highlightColour,
  isGraphHighlighted,
  setGraphHighlighted,
  activeButton,
  setActiveButton,
  equationName,
  equationStyle,
  cyRef,
  //children,
}) => {

  const handleClick = () => {
    if (!cyRef.current) {
      return; // Prevent working with an undefined Cytoscape instance
    }

    cyRef.current.batch(() => {

      if (activeButton !== "" || isGraphHighlighted) {
        // Step 1: Reset all styling before applying new button styling
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
          equation.className = ""; // Reset all styles
        });

        setGraphHighlighted(false); // Reset graph state
        setActiveButton("");
      }

      if (!(isGraphHighlighted) || activeButton !== equationName) {
        // Step 2: Apply new button styling
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

        setGraphHighlighted(true); // Mark graph as highlighted
        setActiveButton(equationName);
      }
    });

    cyRef.current.style().update();

  };

  return (
    <button
      className={`mb-4 px-6 py-2 bg-blue text-black font-semibold rounded-lg shadow-md hover:opacity-80 transition`} // Old "button" look
      // className={`mb-4 px-6 py-2 bg-blue text-black font-semibold hover:opacity-80 transition`}
      //`mb-4 px-6 py-2 bg-blue text-black font-semibold rounded-lg shadow-md hover:opacity-80 transition`
      onClick={handleClick}
    >
    </button>
  );
};

export default GraphStepButton;
