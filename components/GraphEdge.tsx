/*
  Interface and class for a Graph Edge
*/

interface GraphEdgeInterface {
  id: string;
  source: string;
  target: string;
  label?: string;
  classes?: string; // Optional class for styling
}

const GraphEdge = ({ id, source, target, label, classes}: GraphEdgeInterface) => {
  return {
    data: { id, source, target, label},
    // classes, // Assign a class for styling if needed
  };
};

export default GraphEdge;