/*
  Re-usable button component to toggle the steps for the computational graph construction
*/

// Imports
import React from "react";
import { customNodeStyle } from "../styles/GraphCustomStyle";
import {getNodeIds, getEdgeIds} from "../utils/GraphHelpers";
import {nodeDataList, edgeDataList} from "../data/CompGraph1Data";

interface GraphHighlightButtonProp {
  label: string; // String to denote which equation this button corresponds to
  nodeIds: string[]; // String ids of nodes to highlight in the graph
  edgeIds: string[]; // String ids of edges to highlight in the graph
  highlightColour: string; // Highlight color for BOTH the graph nodes and edges. TODO: MAKE THIS AS 2 SEPERATE ATTRIBUTES IF NEED BE
  isGraphHighlighted: boolean; // State variable to track highlight status of the entire graph
  setGraphHighlighted: React.Dispatch<React.SetStateAction<boolean>>; // Setter function for isGraphHighlighted
  activeButton: string; // State variable to track which button is currently "selected"
  setActiveButton: React.Dispatch<React.SetStateAction<string>>; // Setter function for activeButton
  equationName: string; // Equation to highlight
  equationStyle: string; // Additional styling to add to the equation
  cyRef: React.RefObject<any>; // Cytoscape obj reference we need to manipulate
  //children?: React.ReactNode; // Needed IF we want to wrap the button with the text. Not used right now
}

//TEMPORARY HARDCODED VARIABLES, RESOLVE LATER
// const allNodeIds = ["x1", "x2", "b1_1", "w11_1", "w12_1", "z1", "b2_1", "w21_1", "w22_1", "z2"]
// const allEdgeIds = ["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1",
//   "x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]

// TODO: Need to make this generalizable
// Getting a list of all node and edge ids
const allNodeIds = getNodeIds(nodeDataList);
const allEdgeIds = getEdgeIds(edgeDataList);


export const GraphHighlightButton: React.FC<GraphHighlightButtonProp> = ({
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
        setActiveButton(""); // No active button, so reset variable   activeButton
      }

      if (!(isGraphHighlighted) || activeButton !== label) {
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

        // console.log(`${label} Highlight applied`);

        setGraphHighlighted(true); // Mark graph as highlighted
        setActiveButton(label); // Set the button to be active
      }
    });

    cyRef.current.style().update(); // Updating style changes propagated to cyref instance

  };

  return (
    <button
      className={`w-40 px-6 py-2 bg-gray-200 border border-black text-black rounded-lg shadow-md hover:opacity-80 transition`} // Old "button" look
      // style={{ backgroundColor: highlightColour }} // Enable if you want the buttons to take on the same colour as the highlights
      onClick={handleClick}
    >
      {activeButton !== label ? "Select" : "Unselect"}
    </button>
  );
};
