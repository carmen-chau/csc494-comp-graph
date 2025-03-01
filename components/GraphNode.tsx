// Define an interface for the graph nodes
interface GraphNodeInterface {
  id: string;
  label?: string, // Not needed for now, passed in a dummy default string to prevent warnings
  imagePath: string; // Dynamic Image Path
  position: { x: number; y: number };
  classes?: string; // an argument for the node to take on more specific classes for styling
  style?: object; //Argument to allow node styling
}

// Defining an object to store default node style
const defaultNodeStyle = {
  "background-width": "60%",
  "background-height": "60%",
  "background-color": "grey",
  "background-image-opacity": 1,
  width: 60,
  height: 60,
  borderColor: "#000000",
  borderWidth: 2,
  "events": "no", // Blocks interactions
};

const CustomNode = ({ id, label = "", imagePath, position, style = {}}: GraphNodeInterface) => {
  return {
    data: {id, label},
    position,
    style: {
      "background-image": `url('${imagePath}')`,
      ...defaultNodeStyle,
      ...style,
    },
  };
};

export default CustomNode;


// // // Define an interface for the graph nodes
// // interface GraphNodeInterface {
// //   id: string;
// //   position: { x: number; y: number };
// //   latex: string
// //   classes?: string; // an argument for the node to take on more specific classes for styling
// //   style?: object; //Argument to allow node styling
// // }

// // // Defining an object to store default node style
// // const defaultNodeStyle = {
// //   "background-width": "60%",
// //   "background-height": "60%",
// //   "background-image-opacity": 1,
// //   width: 60,
// //   height: 60,
// //   borderColor: "#000000",
// //   borderWidth: 2,
// //   "events": "no", // Blocks interactions
// // };

// // const CustomNode = ({ id, position, latex, classes = "math-node", style = {}}: GraphNodeInterface) => {
  
// //   // Defining intial state to set Latex text to embedded HTML 
// //   const [latexAsHTML, setLatexAsHTML] = useState(""); // Defining the latexAsHTML as empty initially

// //   const latexRef = useRef<HTMLSpanElement | null>(null); // Create a ref

// //   // Calling the useEffect whenever the variable <latex> changes
// //   // Recall that [latex] at the end of this method means that the useEffect would only get called when <latex> value changes
// //   useEffect(() => {
// //     if (latex){
// //       setLatexAsHTML(katex.renderToString(latex, { throwOnError: false }));
// //     }
// //   }, [latex])
  
// //   return {
// //     data: { id, latex},
// //     position,
// //     style: {
// //       ...defaultNodeStyle,
// //       ...style,
// //     },
// //   };

// // }

// // import React, { useEffect, useState } from "react";
// // import katex from "katex";
// // import "katex/dist/katex.min.css";

// // // Define GraphNode Props
// // interface GraphNodeProps {
// //   id: string;
// //   position: { x: number; y: number };
// //   imagePath?: string;
// //   latex?: string;
// // }

// // // 🎯 Function that returns a Cytoscape node object
// // const GraphNode = ({ id, position, imagePath, latex }: GraphNodeProps) => {
// //   const [latexHtml, setLatexHtml] = useState("");

// //   // ✅ Convert LaTeX to HTML
// //   useEffect(() => {
// //     if (latex) {
// //       setLatexHtml(katex.renderToString(latex, { throwOnError: false }));
// //     }
// //   }, [latex]);

// //   return {
// //     data: {
// //       id,
// //       label: latexHtml || id, // Render KaTeX inside the node
// //       image: imagePath ? `url('${imagePath}')` : undefined, // Use image if provided
// //     },
// //     position,
// //     classes: latex ? "latex-node" : "math-node", // Add class if LaTeX is used
// //   };
// // };

// // export default GraphNode;


// // import katex from "katex";
// // import "katex/dist/katex.min.css";

// // Define GraphNode Props
// interface GraphNodeProps {
//   id: string;
//   position: { x: number; y: number };
//   latex?: string;
// }

// // 🎯 Function that returns a Cytoscape-compatible node object
// const GraphNode = ({ id, position, latex }: GraphNodeProps) => {
//   // ✅ Convert LaTeX to HTML before returning the object
//   const latexHtml = latex ? katex.renderToString(latex, { throwOnError: false }) : "";

//   return {
//     data: {
//       id,
//       latexHtml, // ✅ Stores the converted KaTeX
//     },
//     position,
//     classes: "latex-node", // ✅ Class to style the node
//   };
// };

// export default GraphNode;