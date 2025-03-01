/*
    Defines a set of styling objects that is default applied to all graphs

    Current list of styling objects:

    1. For nodes
    2. For edges 
*/

const defaultGraphStyles = [
    // Style object for nodes
    {
      selector: "node",
      style: {
        "background-image": "data(image)", // Use dynamic image path
        "background-width": "80%",
        "background-height": "80%",
        "background-image-opacity": 1,
        width: 60,
        height: 60,
        borderColor: "#000000",
        borderWidth: 2,
      },
    },

    // Style object for edges
    {
      selector: "edge",
      style: {
        width: 2,
        lineColor: "#000000",
        targetArrowShape: "triangle",
        targetArrowColor: "#000000",
        curveStyle: "straight",
      },
    },
]

export default defaultGraphStyles;

