/*
    A miscellaneous collection of helper methods for a Computation Graph Instance

    TODO: Find a way to resolve the "any" type problem
*/

// Given a list of node data objects, return a list of the node data object ids
export function getNodeIds(listOfNodesData: any[]){
    const nodeIdList = listOfNodesData.map((node: any) => node.id);
    return nodeIdList;
}

// Given a list of edge data objects, return a list of the edge data object ids
export function getEdgeIds(listOfEdgesData: any[]){
    const edgeIdList = listOfEdgesData.map((edge: any) => edge.id);
    return edgeIdList;
}

// Given a list of edge objects and an id, return the matching data instance.
export function getEdgeObject(listOfEdgeObjects: any[], inputId: string){
    const edgeObjInstance = listOfEdgeObjects.find((edge: any) => edge.data.id === inputId);
    return edgeObjInstance
}

// Given a list of edge data objects and an id, return the matching data instance.
export function getEdgeDataInstance(listOfEdgesData: any[], inputId: string){
    const edgeDataInstance = listOfEdgesData.find((edge: any) => edge.id === inputId); // Note: The find method will return undefined if no match found
    return edgeDataInstance
}