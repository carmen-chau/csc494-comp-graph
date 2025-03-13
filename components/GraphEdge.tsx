/*
  Interface and class for a Graph Edge
*/

interface GraphEdgeInterface {
  id: string;
  source: string;
  target: string;
  // classes?: string; // Optional class for styling
}

const GraphEdge = ({ id, source, target}: GraphEdgeInterface) => {
  return {
    data: { id, source, target },
    // classes, // Assign a class for styling if needed
  };
};

export default GraphEdge;