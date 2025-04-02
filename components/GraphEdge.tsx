/*
  Interface and class for a Graph Edge
*/

interface GraphEdgeInterface {
  id: string;
  source: string;
  target: string;
  label?: string; // Optional parameter denoting the label added on top of the edge. Set to "" by default
  visible?: boolean; //Denotes whether the edge should be currently visible upon rendering the graph or not. Set to true by default
  classes?: string; // Class for styling
}

const GraphEdge = ({ id, source, target, label = "", visible = true, classes}: GraphEdgeInterface) => {
  return {
    data: { id, source, target, label, visible},
    classes, // Assign a class for styling (used to apply a different styling class for forward edges vs backward edges)
  };
};

export default GraphEdge;