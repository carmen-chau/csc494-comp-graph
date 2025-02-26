import React from "react";

interface GraphEdgeInterface {
  id: string;
  source: string;
  target: string;
  classes?: string; // Optional class for styling
}

const GraphEdge = ({ id, source, target, classes = "" }: GraphEdgeInterface) => {
  return {
    data: { id, source, target },
    classes, // Assign a class for styling if needed
  };
};

export default GraphEdge;




// import React from "react";

// interface EdgeInterface {
//   sourceX: number;
//   sourceY: number;
//   targetX: number;
//   targetY: number;
// }

// const GraphEdge: React.FC<EdgeInterface> = ({ sourceX, sourceY, targetX, targetY }) => {
//   return (
//     <svg className="absolute">
//       <defs>
//         <marker
//           id="arrow"
//           markerWidth="2"
//           markerHeight=""
//           refX="9" // Position the arrowhead tip directly at the line end
//           refY="3"
//           orient="auto"
//           markerUnits="strokeWidth"
//         >
//           <path d="M0,0 L0,7 L9,3 z" fill="black" />
//         </marker>
//       </defs>
//       <line
//         x1={sourceX}
//         y1={sourceY}
//         x2={targetX}
//         y2={targetY}
//         stroke="black"
//         strokeWidth={2}
//         markerEnd="url(#arrow)"
//       />
//     </svg>
//   );
// };

// export default GraphEdge;
