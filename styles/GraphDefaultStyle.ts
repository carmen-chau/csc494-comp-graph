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
        'width': 2,
        'line-color': '#000000',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#000000',
        'curve-style': 'straight',
      },
    },    

    // Style object for the y1 backward edge (backward pass, a bit curved)
    {
      selector: 'edge.y1_backward',
      style: {
        'curve-style': 'unbundled-bezier',
        'control-point-distances': [30],
        'control-point-weights': [0.50],
    
        'line-style': 'dashed',
        'line-color': '#0077ff',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#0077ff',
    
        'label': 'data(label)',
        'font-size': 18,
        'text-background-color': '#fff',
        // 'text-background-opacity': 1,
        // // 'text-background-shape': 'roundrectangle',
        // 'text-background-padding': 3,
        'text-rotation': 'autorotate',
        'text-margin-y': -10,
        // 'edge-text-offset': 100,
      }
    },

    {
      selector: 'edge.y2_backward',
      style: {
        'curve-style': 'unbundled-bezier',
        'control-point-distances': [30],
        'control-point-weights': [0.50],
    
        'line-style': 'dashed',
        'line-color': '#0077ff',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#0077ff',
    
        'label': 'data(label)',
        'font-size': 18,
        'text-background-color': '#fff',
        // 'text-background-opacity': 1,
        // // 'text-background-shape': 'roundrectangle',
        // 'text-background-padding': 3,
        'text-rotation': 'autorotate',
        'text-margin-y': -10,
        // 'edge-text-offset': 100,
      }
    }
    
    
]

export default defaultGraphStyles;

