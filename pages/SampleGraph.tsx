// Dev resource reference: 
// Latex to SVG: https://viereck.ch/latex-to-svg/

// JESS :D
// for highlighting the graph, I'm thinking maybe you can do something like this:

// have a variable to keep track of which step you're on
// step = 1

// everytime you press the button, step++ or step-- (and you block once you're at the first/last step)

// have an array with the ids of each node for each step
// const step1_node_ids = ["x1", "x2"]

// everytime you update step, you check which node ids correspond to that step,
// and then just update the imagePath to a highlighted version


// List of imports
import React, { useState, useRef} from "react";
import dynamic from "next/dynamic";
import GraphNode from "../components/GraphNode";
import GraphEdge from "../components/GraphEdge";
import defaultGraphStyles from "../styles/GraphDefaultStyle";
import {customNodeStyle} from "../styles/GraphCustomStyle";

// Dynamically import CytoscapeComponent to avoid SSR issues in Next.js
const CytoscapeComponent = dynamic(() => import("react-cytoscapejs"), { ssr: false });


// List of graph nodes
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

// List of graph edges
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


// Graph component
const SampleGraph: React.FC = () => {

  const [isLocked, setIsLocked] = useState(false); // Store state (and unused state management method) for fixing graph location
  const [isStep1Highlighted, setIsStep1Highlighted] = useState(false);
  const cyRef = useRef<cytoscape.Core | null>(null); // Creating and storing a default Cytoscape instance. We will need to modify and update this as individual node styling change

  const specificStyles = customNodeStyle(["x1"], "#58cf35");
  console.log(specificStyles);


  // [DEMO] Custom Styles for the z1 equation
  // const specificStyles = [
  //   {
  //     selector: "node#x1",
  //     style: {
  //       "background-color": "#58cf35",
  //     },
  //   },
  //   {
  //     selector: "node#x2",
  //     style: {
  //       "background-color": "#58cf35",
  //     },
  //   },
  //   {
  //     selector: "node#b1_1",
  //     style: {
  //       "background-color": "#58cf35",
  //     },
  //   },
  //   {
  //     selector: "node#w11_1",
  //     style: {
  //       "background-color": "#58cf35",
  //     },
  //   },
  //   {
  //     selector: "node#w12_1",
  //     style: {
  //       "background-color": "#58cf35",
  //     },
  //   },
  //   {
  //     selector: "node#z1",
  //     style: {
  //       "background-color": "#58cf35",
  //     },
  //   },
  //   {
  //     selector: "edge#x1-z1",
  //     style: {
  //       "underlay-color": "#58cf35",
  //       "underlay-opacity": 0.5,
  //       "underlay-padding": 5,
  //     },
  //   },
  //   {
  //     selector: "edge#x2-z1",
  //     style: {
  //       "underlay-color": "#58cf35",
  //       "underlay-opacity": 0.5,
  //       "underlay-padding": 5,
  //     },
  //   },
  //   {
  //     selector: "edge#b1_1-z1",
  //     style: {
  //       "underlay-color": "#58cf35",
  //       "underlay-opacity": 0.5,
  //       "underlay-padding": 5,
  //     },
  //   },
  //   {
  //     selector: "edge#w11_1-z1",
  //     style: {
  //       "underlay-color": "#58cf35",
  //       "underlay-opacity": 0.5,
  //       "underlay-padding": 5,
  //     },
  //   },
  //   {
  //     selector: "edge#w12_1-z1",
  //     style: {
  //       "underlay-color": "#58cf35",
  //       "underlay-opacity": 0.5,
  //       "underlay-padding": 5,
  //     },
  //   },
  // ]           

  // Function to apply the parent styles
  const applyStylesIndividually = (cyInstance: cytoscape.Core) => {
    // Apply default styles to all nodes and edges
    defaultGraphStyles.forEach((styleObj) => {
      cyInstance.elements(styleObj.selector).forEach((element) => {
        element.style(styleObj.style);
      });
    });
  };


  const initialCyRendering = (inputCyInstance: cytoscape.Core) => {
    cyRef.current = inputCyInstance; // Store Cytoscape instance
    
    // Preserve existing behavior (ie: Fixing graph location, disabling user interaction)
    cyRef.current.autolock(isLocked);
    cyRef.current.panningEnabled(!isLocked);
    cyRef.current.zoomingEnabled(!isLocked);
    cyRef.current.boxSelectionEnabled(false);
    cyRef.current.userPanningEnabled(false);
    cyRef.current.userZoomingEnabled(false);
    cyRef.current.fit();

    // Apply default node and edge styling by calling applyStylesIndividually
    applyStylesIndividually(inputCyInstance);
  };

  const handleStep1Click = () => {
    if (!(cyRef.current)){
      return; // preventing us from working with an undefined Cytoscape instance
    }
    cyRef.current.batch(() => {
      if (!isStep1Highlighted) {
        // Apply specific styles
        specificStyles.forEach(({ selector, style }) => {
          cyRef.current!.$(selector).style(style);
        });
        console.log("Highlight applied");
      } else {
        // Reset only the specific fields (instead of removing all styles)
        specificStyles.forEach(({ selector }) => {
          cyRef.current!.$(selector).style({
            "background-color": "grey", // Clears the colour filled in by ndes
            "underlay-opacity": 0, // Clear arrow highlighting colour
            "underlay-padding": 0, // Resets padding
          });
        });
  
        console.log("Highlight removed");
      }
    });
  
    cyRef.current.style().update(); // Ensure styles are refreshed
  
    // Update the button toggle state
    setIsStep1Highlighted(isStep1Highlighted ? false : true);
  };


  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", paddingLeft: "40px"}}>

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
          cy={initialCyRendering}
        />
        
      
      {/* Step 1 Button */}
      <button 
      className="mb-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
      onClick = {handleStep1Click}>
        Step 1
      </button>
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