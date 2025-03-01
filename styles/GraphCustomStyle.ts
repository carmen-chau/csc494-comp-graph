/*
    A function that styling objects that is applied ON TOP OF EXISTING DEFAULT STYLING for graphs

    Purpose: To allow for highlighting or emphasis on certain parts of the graph

    Current list of styling objects:

    1. For nodes
    2. For edges 
*/

export function customNodeStyle (nodesIds: string[], nodeColour: string, edgeIds: string[], edgeColour: string) {
    const nodeStyleObjects = nodesIds.map((nodeId) => (
        {
            selector: `node#${nodeId}`,
            style:{
                "background-color": nodeColour,
            }

        }

    ));

    const edgeStyleObjects = edgeIds.map((edgeId) => (
        {
            selector: `edge#${edgeId}`,
            style:{
                "underlay-color": edgeColour,
                "underlay-opacity": 0.7,
                "underlay-padding": 5,

            }
        }

    ));

    const finalStyleList = nodeStyleObjects.concat(edgeStyleObjects);

    return finalStyleList;
}

// export const customNodeStyle = (nodeIds: string[], nodeColor: string) => {
//     return nodeIds.map((nodeId) => ({
//       selector: `node#${nodeId}`, // Ensures proper Cytoscape.js node selection
//       style: {
//         "background-color": nodeColor, // Correct property spelling
//       },
//     }));
//   };