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
        "background-image": "data(image)", // dynamically rendering image
        "background-width": "60%",
        "background-height": "60%",
        "background-color": "grey",
        "background-image-opacity": 1,
        width: 60,
        height: 60,
        borderColor: "#000000",
        borderWidth: 2,
      },
    },

    // Style object for edges (forward pass, straight ones)
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

    // Style object for edges (backward pass, a bit curved)
    {
      selector: 'edge.backward',
      style: {
        'line-style': 'dashed',
        'line-color': '#0077ff',
        'target-arrow-color': '#0077ff',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
        'control-point-step-size': 40,
        'label': 'data(label)',
        'font-size': 10,
      }
    }
    
]

export default defaultGraphStyles;

