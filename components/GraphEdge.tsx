/*
  Interface and class for a Graph Edge
*/

interface GraphEdgeInterface {
  id: string;
  source: string;
  target: string;
  label?: string;
  classes?: string; // Class for styling
}

const GraphEdge = ({ id, source, target, label, classes}: GraphEdgeInterface) => {
  return {
    data: { id, source, target, label},
    classes, // Assign a class for styling (used to apply a different styling class for forward edges vs backward edges)
  };
};

export default GraphEdge;