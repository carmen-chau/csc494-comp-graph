/*
  TODO: NEED TO UPDATE THIS FILE BASED ON NEW CHANGES MADE TO HighlightFunction.ts
*/

/*
  Re-usable button component to toggle the steps for the computational graph construction
*/

// Imports
import React from "react";
import { customNodeStyle } from "../styles/GraphCustomStyle";
import { getNodeIds, getEdgeIds, getEdgeObject, getEdgeDataInstance } from "../utils/GraphHelpers";
import { nodeObjList as forwardNodeObjList, edgeObjList as forwardEdgeObjList, nodeDataList as forwardNodeDataList, edgeDataList as forwardEdgeDataList } from "../data/ForwardpropGraphData";
import { nodeObjList as backwardNodeObjList, edgeObjList as backwardEdgeObjList, nodeDataList as backwardNodeDataList, edgeDataList as backwardEdgeDataList } from "../data/BackpropGraphData";

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
  backPropEquationName?: string; // If provided, give the name of the backprop equation to render the backward edge

  cyRef: React.RefObject<any>; // Cytoscape obj reference we need to manipulate
  cyRefType: string; // Denotes what type of computuation graph we are rendering
  //children?: React.ReactNode; // Needed IF we want to wrap the button with the text. Not used right now
}

//TEMPORARY HARDCODED VARIABLES, RESOLVE LATER
// const allNodeIds = ["x1", "x2", "b1_1", "w11_1", "w12_1", "z1", "b2_1", "w21_1", "w22_1", "z2"]
// const allEdgeIds = ["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1",
//   "x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]


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
  backPropEquationName = "",
  cyRef,
  cyRefType
  //children,
}) => {

  const handleClick = () => {
    if (!cyRef.current) {
      return; // Prevent working with an undefined Cytoscape instance
    }

    let allNodeIds = [];
    let allEdgeIds = [];

    if (cyRefType === "forward-prop") {
      allNodeIds = getNodeIds(forwardNodeDataList);
      allEdgeIds = getEdgeIds(forwardEdgeDataList);
    }
    else if (cyRefType === "backward-prop") {
      allNodeIds = getNodeIds(backwardNodeDataList);
      allEdgeIds = getEdgeIds(backwardEdgeDataList);
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

        // NEW! If we are working with a backprop graph, we must reset all possible backprop arrows to have attribute visible: false
        if (cyRefType === "backward-prop") {
          backwardEdgeObjList.map((edgeObj) => {
            if (edgeObj.classes === "backward") {
              edgeObj.data.visible = false;
            }
          });
          backwardEdgeDataList.map((edgeData) => {
            if (edgeData.classes === "backward"){
              edgeData.visible = false;
            }
          });
        }

        setGraphHighlighted(false); // Reset graph state
        setActiveButton(""); // No active button, so reset variable activeButton
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

        // NEW! If we are working with a backprop graph, we enable the specific backprop arrow
        if (cyRefType === "backward-prop") {
          let backedgeObject = getEdgeObject(backwardEdgeObjList, backPropEquationName);
          if (backedgeObject !== undefined){
            backedgeObject.data.visible = true;
          }
          console.log(backedgeObject);
          let backedgeData = getEdgeDataInstance(backwardEdgeDataList, backPropEquationName);
          if (backedgeData !== undefined){
            backedgeData.visible = true;
          }
          console.log(backedgeData);
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
      className={`w-40 px-6 py-2 bg-gray-200 border border-black text-black font-serif rounded-lg shadow-md hover:opacity-80 transition`} // Old "button" look
      // style={{ backgroundColor: highlightColour }} // Enable if you want the buttons to take on the same colour as the highlights
      onClick={handleClick}
    >
      {activeButton !== label ? "Select" : "Unselect"}
    </button>
  );
};
