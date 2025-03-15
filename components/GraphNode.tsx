/*
  Interface and class for a Graph Node
*/

interface GraphNodeInterface {
  id: string;
  label?: string, // Not needed for now, passed in a dummy default string to prevent warnings
  imagePath: string; // Dynamic Image Path
  position: { x: number; y: number };
  classes?: string; // an argument for the node to take on more specific classes for styling
  style?: object; //Argument to allow node styling
}

const CustomNode = ({ id, imagePath, position, label = ""}: GraphNodeInterface) => {
  return {
    data: {id, label, image: imagePath}, // id and label are default needed by Cytoscape rendering instance. imagePath argument is for dynamic picture rendering
    position, //position is needed for the Cytoscape instance to know where to place nodes
    locked: true, // locking the nodes in position
    // style: {
    //   "background-image": `url('${imagePath}')`,
    // },
  };
};

export default CustomNode;
