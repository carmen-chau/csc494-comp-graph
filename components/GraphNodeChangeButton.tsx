/*
  Re-usable button component to change the value of a Computation Graph Node based on input
*/

// Imports
import React from "react";
import { customNodeStyle } from "../styles/GraphCustomStyle";
import { getNodeIds, getEdgeIds } from "../utils/GraphHelpers";
import { nodeDataList, edgeDataList } from "../data/CompGraph1Data";

interface GraphHighlightButtonProp {
    nodeId: string; // String to denote which node (identified by ID) we want to modify the value of
    newValue: string; // New value of the node. Note: Using a string type instead of number to allow for more flexible input
    cyRef: React.RefObject<any>; // Cytoscape obj reference we need to manipulate
}

// TODO: Need to make this generalizable
// Getting a list of all node and edge ids
const allNodeIds = getNodeIds(nodeDataList);
const allEdgeIds = getEdgeIds(edgeDataList);


export const GraphNodeChangeButton: React.FC<GraphHighlightButtonProp> = ({
    nodeId,
    newValue,
    cyRef
}) => {

    const handleClick = () => {

        if (!cyRef.current) {
            return; // Prevent working with an undefined Cytoscape instance
        }

        const node = cyRef.current.elements(`node[id = "${nodeId}"]`); // Fetching the node with the corresponding if

        console.log("Node.data before transformation:", node.data());

        node.data({
            ...node.data(),
            label: newValue,  // Convert number to string
        });

        // Strategy: Instead of clearing the node's data object's image attribute, we just set the background-image style to none
        // This means that the image will no longer display
        // We also add the label attribute to display the number on top. 
        node.style({
            "label": newValue,
            "background-image": "none",  // Forces image removal
        });

        console.log("Node.data after transformation:", node.data());

        cyRef.current.style().update();

        // alert(`Hello ${newValue}`); //For testing purposes
        // console.log(node.data()) // Testing purposes
        // console.log("All Nodes in Cytoscape:", cyRef.current!.nodes().map(n => n.id())); // For testing purposes
    };

    return (
        <button
            className={`w-40 px-6 py-2 bg-gray-200 border border-black text-black rounded-lg shadow-md hover:opacity-80 transition`} // Old "button" look
            // style={{ backgroundColor: highlightColour }} // Enable if you want the buttons to take on the same colour as the highlights
            onClick={handleClick}
        >
            Submit
        </button>
    );
};
