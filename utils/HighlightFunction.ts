/*
  Custom node + equation highlight function for the backpropagation graph
  
  Same basic underlying logic as GraphHighlightButton, except the following changes:

    -  Does not include button component creation.

  This file exists because for the backpropagation graph, we wanted to make nodes clickable instead.
*/

// Imports
import React from "react";
import { customNodeStyle } from "../styles/GraphCustomStyle";
import { getNodeIds, getEdgeIds, getEdgeObject, getEdgeDataInstance } from "./GraphHelpers";
import { nodeObjList as forwardNodeObjList, edgeObjList as forwardEdgeObjList, nodeDataList as forwardNodeDataList, edgeDataList as forwardEdgeDataList } from "../data/ForwardpropGraphData";
import { nodeObjList as backwardNodeObjList, edgeObjList as backwardEdgeObjList, nodeDataList as backwardNodeDataList, edgeDataList as backwardEdgeDataList } from "../data/BackpropGraphData";

export function nodeClickFunction(context: any) {
    
    const {
        label,
        nodeIds = [],
        edgeIds = [],
        highlightColour = "#000",
        isGraphHighlighted = false,
        setGraphHighlighted,
        activeButton = "",
        setActiveButton,
        equationName = "",
        equationStyle = "",
        backPropEquationNames = [],
        cyRef,
        cyRefType = ""
      } = context ?? {}; // ← fallback for the whole context being undefined      

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

        if (activeButton !== "" || isGraphHighlighted || label === "reset") {
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
                    if (edgeObj.classes?.includes("backward")) {
                        edgeObj.data.visible = false;
                    }
                });
                backwardEdgeDataList.map((edgeData) => {
                    if (edgeData.classes?.includes("backward")) {
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
                equationStyle.split(" ").forEach((individualStyleClass: any) => {
                    equationToTarget.classList.add(individualStyleClass);
                });
            }

            // NEW! If we are working with a backprop graph, we enable the specific backprop arrow
            if (cyRefType === "backward-prop"){
                backPropEquationNames.forEach((equationName: string)=> {
                    let backedgeObject = getEdgeObject(backwardEdgeObjList, equationName);
                    if (backedgeObject !== undefined) {
                        backedgeObject.data.visible = true;
                    }
                    let backedgeData = getEdgeDataInstance(backwardEdgeDataList, equationName);
                    if (backedgeData !== undefined) {
                        backedgeData.visible = true;
                    }
                })
            }

            setGraphHighlighted(true); // Mark graph as highlighted
            setActiveButton(label); // Set the button to be active
        }
    });

    cyRef.current.style().update(); // Updating style changes propagated to cyref instance


}
