/*
  A general computation graph instance file
*/

// List of imports
import React, { useState, useRef} from "react";
import dynamic from "next/dynamic";
import defaultGraphStyles from "../styles/GraphDefaultStyle";

// Dynamically import CytoscapeComponent to avoid SSR issues in Next.js
const CytoscapeComponent = dynamic(() => import("react-cytoscapejs"), { ssr: false });

// Graph component
const SampleGraph = ({ cyRef, nodes, edges, nodeClickFunction}: { cyRef: React.RefObject<any>, nodes: any, edges: any, nodeClickFunction?:any}) => {

  const [isLocked, setIsLocked] = useState(false); // Store state (and unused state management method) for fixing graph location

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
    if (nodeClickFunction){
      cyRef.current.on("tap", "node", nodeClickFunction);
    }

    // console.log(nodeClickFunction); // For testing purposes

    // Hard coded node click reference
    // cyRef.current.on('tap', 'node', (event) => {
    //   const node = event.target;
    //   console.log("Clicked node ID:", node.id());
    // });
  };

  return (
    <div style={{ width: "100vw", 
    // height: "90vh", 
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    paddingLeft: "40px"}}>

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
          elements={[...nodes, ...edges.filter((edge: any) => edge.data.visible === true)]} // Combine nodes and edges. Note: For edges, used the filter() function to only show edges where the visible attribute is set to true
          style={{ width: "100%", height: "100%" }}
          layout={{ name: "preset", fit: false}} // Keeps nodes in place
          cy={initialCyRendering}
          stylesheet={defaultGraphStyles} // Applying the default graph styling
        />
      </div>
    </div>
  );
};
export default SampleGraph;