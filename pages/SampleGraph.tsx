// Dev resource reference: 
// Latex to SVG: https://viereck.ch/latex-to-svg/

import React, { useState } from "react";
import dynamic from "next/dynamic";
import GraphNode from "../components/GraphNode";
import GraphEdge from "../components/GraphEdge";

// Dynamically import CytoscapeComponent to avoid SSR issues in Next.js
const CytoscapeComponent = dynamic(() => import("react-cytoscapejs"), { ssr: false });

const nodes = [
  GraphNode({ id: "x1", position: { x: 100, y: 200}, imagePath: "/initial_latex_icons/x1_black.svg" }),
  GraphNode({ id: "x2", position: { x: 100 , y: 300}, imagePath: "initial_latex_icons/x2_black.svg" }),
 
  GraphNode({ id: "z1", position: { x: 300, y: 200}, imagePath: "/initial_latex_icons/z1_black.svg" }),
  GraphNode({ id: "w12_1", position: { x:250 , y: 60}, imagePath: "/initial_latex_icons/w12_black.svg" }),
  GraphNode({ id: "w11_1", position: { x: 150, y: 40}, imagePath: "/initial_latex_icons/w11_black.svg" }),
  GraphNode({ id: "b1_1", position: { x: 100, y: 100}, imagePath: "/initial_latex_icons/b1_black.svg" }),
  
  GraphNode({ id: "z2", position: { x: 300, y: 300}, imagePath: "/initial_latex_icons/z2_black.svg" }),
  GraphNode({ id: "w21_1", position: { x:150 , y: 460}, imagePath: "/initial_latex_icons/w21_black.svg" }),
  GraphNode({ id: "w22_1", position: { x: 250, y: 480}, imagePath: "/initial_latex_icons/w22_black.svg" }),
  GraphNode({ id: "b2_1", position: { x: 100, y: 400}, imagePath: "/initial_latex_icons/b2_black.svg" }),
  GraphNode({ id: "h1", position: { x: 500, y: 200}, imagePath: "/initial_latex_icons/h1_black.svg" }),
  GraphNode({ id: "h2", position: { x: 500, y: 300}, imagePath: "/initial_latex_icons/h2_black.svg" }),
  
  GraphNode({ id: "y1", position: { x: 700, y: 200}, imagePath: "/initial_latex_icons/y1_black.svg" }),
  GraphNode({ id: "w12_2", position: { x: 650, y: 60}, imagePath: "/initial_latex_icons/w12_2ndv_black.svg" }),
  GraphNode({ id: "w11_2", position: { x: 550, y: 40}, imagePath: "/initial_latex_icons/w11_2ndv_black.svg" }),
  GraphNode({ id: "b1_2", position: { x: 500, y: 100}, imagePath: "/initial_latex_icons/b1_2ndv_black.svg" }),
  
  
  GraphNode({ id: "y2", position: { x: 700, y: 300}, imagePath: "/initial_latex_icons/y2_black.svg" }),
  GraphNode({ id: "w22_2", position: { x: 650, y: 480}, imagePath: "/initial_latex_icons/w22_2ndv_black.svg" }),
  GraphNode({ id: "w21_2", position: { x: 550, y: 460}, imagePath: "/initial_latex_icons/w21_2ndv_black.svg" }),
  GraphNode({ id: "b2_2", position: { x: 500, y: 400}, imagePath: "/initial_latex_icons/b2_2ndv_black.svg" }),

  GraphNode({ id: "t1", position: { x: 800, y: 100}, imagePath: "/initial_latex_icons/t1_black.svg" }),
  GraphNode({ id: "t2", position: { x: 800, y: 400}, imagePath: "/initial_latex_icons/t2_black.svg" }),

  GraphNode({ id: "L", position: { x: 900, y: 250}, imagePath: "/initial_latex_icons/l_black.svg" }),
];

const edges = [
  GraphEdge({ id: "x1-z1", source: "x1", target: "z1" }),
  GraphEdge({ id: "x2-z1", source: "x2", target: "z1" }),
  GraphEdge({ id: "b1_1-z1", source: "b1_1", target: "z1" }),
  GraphEdge({ id: "w11_1-z1", source: "w11_1", target: "z1" }),
  GraphEdge({ id: "w12_1-z1", source: "w12_1", target: "z1" }),
  GraphEdge({ id: "x1-z2", source: "x1", target: "z2" }),
  GraphEdge({ id: "x2-z2", source: "x2", target: "z2" }),
  GraphEdge({ id: "w21_1-z2", source: "w21_1", target: "z2" }),
  GraphEdge({ id: "w22_1-z2", source: "w22_1", target: "z2" }),
  GraphEdge({ id: "b2_1-z2", source: "b2_1", target: "z2" }),
  GraphEdge({ id: "z1-h1", source: "z1", target: "h1" }),
  GraphEdge({ id: "z2-h2", source: "z2", target: "h2" }),
  GraphEdge({ id: "h1-y1", source: "h1", target: "y1" }),
  GraphEdge({ id: "h1-y2", source: "h1", target: "y2" }),
  GraphEdge({ id: "h2-y1", source: "h2", target: "y1" }),
  GraphEdge({ id: "h2-y2", source: "h2", target: "y2" }),

  GraphEdge({ id: "w12_2-y1", source: "w12_2", target: "y1" }),
  GraphEdge({ id: "w11_2-y1", source: "w11_2", target: "y1" }),
  GraphEdge({ id: "b1_2-y1", source: "b1_2", target: "y1" }),

  GraphEdge({ id: "w22_2-y2", source: "w22_2", target: "y2" }),
  GraphEdge({ id: "w21_2-y2", source: "w21_2", target: "y2" }),
  GraphEdge({ id: "b2_2-y2", source: "b2_2", target: "y2" }),

  GraphEdge({ id: "y1_L", source: "y1", target: "L" }),
  GraphEdge({ id: "y2-L", source: "y2", target: "L" }),

  GraphEdge({ id: "t1-L", source: "t1", target: "L" }),
  GraphEdge({ id: "t2-L", source: "t2", target: "L" }),

];

const SampleGraph: React.FC = () => {
  const [isLocked, setIsLocked] = useState(false);

  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center"}}>

      {/* Cytoscape Graph */}
      <div style={{ 
        
        //flex: 1, width: "100%" 
        width: "80vw",
        height: "80vh",
        maxWidth: "900px",
        maxHeight: "600px",
        border: "1px solid black",
        
        }}>
        <CytoscapeComponent
          elements={[...nodes, ...edges]} // Combine nodes and edges
          style={{ width: "100%", height: "100%" }}
          layout={{ name: "preset", fit: false}} // Keeps nodes in place
          cy={(cy) => {
            cy.autolock(isLocked); // Toggle lock based on state
            cy.panningEnabled(!isLocked); // Disable panning when locked
            cy.zoomingEnabled(!isLocked); // Disable zooming when locked
            cy.boxSelectionEnabled(false); // Disable box selection of nodes
            cy.userPanningEnabled(false); // Disable user-initiated panning
            cy.userZoomingEnabled(false); // Disable user-initiated zooming
            cy.fit(); // Ensures graph is fully visible
          }}
          stylesheet={[
            {
              selector: "node",
              style: {
                "background-image": "data(image)", // Use dynamic image path
                "background-width": "80%",
                "background-height": "80%",
                "background-image-opacity": 1,
                width: 60,
                height: 60,
                borderColor: "#000000",
                borderWidth: 2,
              },
            },
            {
              selector: "edge",
              style: {
                width: 2,
                lineColor: "#000000",
                targetArrowShape: "triangle",
                targetArrowColor: "#000000",
                curveStyle: "straight",
              },
            },
          ]}
        />
      </div>
    </div>
  );
};
export default SampleGraph;











/*
      <button onClick={() => setIsLocked(!isLocked)}
      //style={{
        // marginBottom: "10px",
        // padding: "8px 12px",
        // fontSize: "16px",
        // cursor: "pointer",
        // backgroundColor: "lightcyan", // Background color (fill)
        // color: "black", // Text color
        // border: "2px solid black", // Optional: Add a border
        // borderRadius: "5px", // Optional: Rounded corners
        // fontWeight: "bold", // Optional: Make text bold
        // }}
        // >
      // {isLocked ? "Unlock Graph" : "Lock Graph"}
      // </button>
*/