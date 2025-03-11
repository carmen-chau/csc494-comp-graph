// List of imports
import React, { useState, useRef} from "react";
import dynamic from "next/dynamic";
import GraphNode from "../components/GraphNode";
import GraphEdge from "../components/GraphEdge";
import defaultGraphStyles from "../styles/GraphDefaultStyle";
import GraphStepButton from "../components/GraphStepButton";

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
const SampleGraph = ({ cyRef }: { cyRef: React.RefObject<any> }) => {

  const [isLocked, setIsLocked] = useState(false); // Store state (and unused state management method) for fixing graph location
  const [isStep1Highlighted, setIsStep1Highlighted] = useState(false);
  //const cyRef = useRef<cytoscape.Core | null>(null); // Creating and storing a default Cytoscape instance. We will need to modify and update this as individual node styling change

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
          stylesheet={defaultGraphStyles} // Applying the default graph styling
        />
        {/* <div className="grid grid-cols-4 gap-x-4 gap-y-6 mt-4">
          <GraphStepButton
            label="Step 1"
            nodeIds={["x1", "x2", "b1_1", "w11_1", "w12_1", "z1"]}
            edgeIds={["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1"]}
            highlightColour="#58cf35"
            isHighlighted={isStep1Highlighted}
            setHighlighted={setIsStep1Highlighted}
            equationName="z1"
            equationStyle="bg-[#58cf35] px-0.5 py-0.5 rounded-full inline-block"
            cyRef={cyRef}
          />
          <GraphStepButton
            label="Step 2"
            nodeIds={["x1", "x2", "b2_1", "w21_1", "w22_1", "z2"]}
            edgeIds={["x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]}
            highlightColour="#ffdbbb"
            isHighlighted={isStep1Highlighted}
            setHighlighted={setIsStep1Highlighted}
            equationName="z2"
            equationStyle="bg-[#ffdbbb] px-0.5 py-0.5 rounded-full inline-block"
            cyRef={cyRef}
          />
        </div> */}
      </div>
    </div>
  );
};
export default SampleGraph;