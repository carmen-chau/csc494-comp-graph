/*
    A miscellaneous collection of helper methods for a Computation Graph Instance

    TODO: Find a way to resolve the "any" type problem
*/

export function getNodeIds(listOfNodes: any){
    const nodeIdList = listOfNodes.map((node: any) => node.id)
    return nodeIdList;
}

export function getEdgeIds(listOfEdges: any){
    const edgeIdList = listOfEdges.map((edge: any) => edge.id)
    return edgeIdList;
}