

/*
    Contains raw node and edge data for Computation Graph 1
*/
import GraphNode from "../components/GraphNode"
import GraphEdge from "../components/GraphEdge"

// List of graph nodes
export const nodeObjList = [

    // These were all copied from the forward pass graph
    GraphNode({ id: "x1", position: { x: 100, y: 200 }, imagePath: "/initial_latex_icons/x1_black.svg" }),
    GraphNode({ id: "x2", position: { x: 100, y: 300 }, imagePath: "initial_latex_icons/x2_black.svg" }),

    GraphNode({ id: "z1", position: { x: 300, y: 200 }, imagePath: "/initial_latex_icons/z1_black.svg" }),
    GraphNode({ id: "w12_1", position: { x: 250, y: 60 }, imagePath: "/initial_latex_icons/w12_black.svg" }),
    GraphNode({ id: "w11_1", position: { x: 150, y: 40 }, imagePath: "/initial_latex_icons/w11_black.svg" }),
    GraphNode({ id: "b1_1", position: { x: 100, y: 100 }, imagePath: "/initial_latex_icons/b1_black.svg" }),

    GraphNode({ id: "z2", position: { x: 300, y: 300 }, imagePath: "/initial_latex_icons/z2_black.svg" }),
    GraphNode({ id: "w21_1", position: { x: 150, y: 460 }, imagePath: "/initial_latex_icons/w21_black.svg" }),
    GraphNode({ id: "w22_1", position: { x: 250, y: 480 }, imagePath: "/initial_latex_icons/w22_black.svg" }),
    GraphNode({ id: "b2_1", position: { x: 100, y: 400 }, imagePath: "/initial_latex_icons/b2_black.svg" }),
    GraphNode({ id: "h1", position: { x: 500, y: 200 }, imagePath: "/initial_latex_icons/h1_black.svg" }),
    GraphNode({ id: "h2", position: { x: 500, y: 300 }, imagePath: "/initial_latex_icons/h2_black.svg" }),

    GraphNode({ id: "y1", position: { x: 700, y: 200 }, imagePath: "/initial_latex_icons/y1_black.svg" }),
    GraphNode({ id: "w12_2", position: { x: 650, y: 60 }, imagePath: "/initial_latex_icons/w12_2ndv_black.svg" }),
    GraphNode({ id: "w11_2", position: { x: 550, y: 40 }, imagePath: "/initial_latex_icons/w11_2ndv_black.svg" }),
    GraphNode({ id: "b1_2", position: { x: 500, y: 100 }, imagePath: "/initial_latex_icons/b1_2ndv_black.svg" }),


    GraphNode({ id: "y2", position: { x: 700, y: 300 }, imagePath: "/initial_latex_icons/y2_black.svg" }),
    GraphNode({ id: "w22_2", position: { x: 650, y: 480 }, imagePath: "/initial_latex_icons/w22_2ndv_black.svg" }),
    GraphNode({ id: "w21_2", position: { x: 550, y: 460 }, imagePath: "/initial_latex_icons/w21_2ndv_black.svg" }),
    GraphNode({ id: "b2_2", position: { x: 500, y: 400 }, imagePath: "/initial_latex_icons/b2_2ndv_black.svg" }),

    GraphNode({ id: "t1", position: { x: 800, y: 100 }, imagePath: "/initial_latex_icons/t1_black.svg" }),
    GraphNode({ id: "t2", position: { x: 800, y: 400 }, imagePath: "/initial_latex_icons/t2_black.svg" }),

    GraphNode({ id: "L", position: { x: 900, y: 250 }, imagePath: "/initial_latex_icons/l_black.svg" }),
];

// Define GraphNode data as objects (no JSX)
export const nodeDataList = [

    // These were all copied from the forward pass graph
    { id: "x1", position: { x: 100, y: 200 }, imagePath: "/initial_latex_icons/x1_black.svg" },
    { id: "x2", position: { x: 100, y: 300 }, imagePath: "/initial_latex_icons/x2_black.svg" },
    { id: "z1", position: { x: 300, y: 200 }, imagePath: "/initial_latex_icons/z1_black.svg" },
    { id: "w12_1", position: { x: 250, y: 60 }, imagePath: "/initial_latex_icons/w12_black.svg" },
    { id: "w11_1", position: { x: 150, y: 40 }, imagePath: "/initial_latex_icons/w11_black.svg" },
    { id: "b1_1", position: { x: 100, y: 100 }, imagePath: "/initial_latex_icons/b1_black.svg" },
    { id: "z2", position: { x: 300, y: 300 }, imagePath: "/initial_latex_icons/z2_black.svg" },
    { id: "w21_1", position: { x: 150, y: 460 }, imagePath: "/initial_latex_icons/w21_black.svg" },
    { id: "w22_1", position: { x: 250, y: 480 }, imagePath: "/initial_latex_icons/w22_black.svg" },
    { id: "b2_1", position: { x: 100, y: 400 }, imagePath: "/initial_latex_icons/b2_black.svg" },
    { id: "h1", position: { x: 500, y: 200 }, imagePath: "/initial_latex_icons/h1_black.svg" },
    { id: "h2", position: { x: 500, y: 300 }, imagePath: "/initial_latex_icons/h2_black.svg" },
    { id: "y1", position: { x: 700, y: 200 }, imagePath: "/initial_latex_icons/y1_black.svg" },
    { id: "w12_2", position: { x: 650, y: 60 }, imagePath: "/initial_latex_icons/w12_2ndv_black.svg" },
    { id: "w11_2", position: { x: 550, y: 40 }, imagePath: "/initial_latex_icons/w11_2ndv_black.svg" },
    { id: "b1_2", position: { x: 500, y: 100 }, imagePath: "/initial_latex_icons/b1_2ndv_black.svg" },
    { id: "y2", position: { x: 700, y: 300 }, imagePath: "/initial_latex_icons/y2_black.svg" },
    { id: "w22_2", position: { x: 650, y: 480 }, imagePath: "/initial_latex_icons/w22_2ndv_black.svg" },
    { id: "w21_2", position: { x: 550, y: 460 }, imagePath: "/initial_latex_icons/w21_2ndv_black.svg" },
    { id: "b2_2", position: { x: 500, y: 400 }, imagePath: "/initial_latex_icons/b2_2ndv_black.svg" },
    { id: "t1", position: { x: 800, y: 100 }, imagePath: "/initial_latex_icons/t1_black.svg" },
    { id: "t2", position: { x: 800, y: 400 }, imagePath: "/initial_latex_icons/t2_black.svg" },
    { id: "L", position: { x: 900, y: 250 }, imagePath: "/initial_latex_icons/l_black.svg" },
];


// List of graph edges
// TODO: Should I make the default (ie: non backprop) GraphEdge instances and data consistent in terms of attributes compared with its backprop counterparts?
export const edgeObjList = [

    // These were all copied from the forward pass graph
    GraphEdge({ id: "x1-z1", source: "x1", target: "z1" }),
    GraphEdge({ id: "x2-z1", source: "x2", target: "z1" }),
    GraphEdge({ id: "b1_1-z1", source: "b1_1", target: "z1" }),
    GraphEdge({ id: "w11_1-z1", source: "w11_1", target: "z1" }),
    GraphEdge({ id: "w12_1-z1", source: "w12_1", target: "z1" }),
    GraphEdge({ id: "x1-z2", source: "x1", target: "z2" }),
    GraphEdge({ id: "x2-z2", source: "x2", target: "z2" }),
    GraphEdge({ id: "w21_1-z2", source: "w21_1", target: "z2" }),
    GraphEdge({ id: "w22_1-z2", source: "w22_1", target: "z2" }),
    GraphEdge({ id: "b2_1-z2", source: "b2_1", target: "z2" }),
    GraphEdge({ id: "z1-h1", source: "z1", target: "h1" }),
    GraphEdge({ id: "z2-h2", source: "z2", target: "h2" }),
    GraphEdge({ id: "h1-y1", source: "h1", target: "y1" }),
    GraphEdge({ id: "h1-y2", source: "h1", target: "y2" }),
    GraphEdge({ id: "h2-y1", source: "h2", target: "y1" }),
    GraphEdge({ id: "h2-y2", source: "h2", target: "y2" }),

    GraphEdge({ id: "w12_2-y1", source: "w12_2", target: "y1" }),
    GraphEdge({ id: "w11_2-y1", source: "w11_2", target: "y1" }),
    GraphEdge({ id: "b1_2-y1", source: "b1_2", target: "y1" }),

    GraphEdge({ id: "w22_2-y2", source: "w22_2", target: "y2" }),
    GraphEdge({ id: "w21_2-y2", source: "w21_2", target: "y2" }),
    GraphEdge({ id: "b2_2-y2", source: "b2_2", target: "y2" }),

    GraphEdge({ id: "y1-L", source: "y1", target: "L" }),
    GraphEdge({ id: "y2-L", source: "y2", target: "L" }),

    GraphEdge({ id: "t1-L", source: "t1", target: "L" }),
    GraphEdge({ id: "t2-L", source: "t2", target: "L" }),

    //NEW!!! (For backpropagation)
    // Note: All graph labels are native strings using unicode symbols (due to issues with supporting native MathJax rendering)
    GraphEdge({
        id: 'L-y1-backprop',
        source: 'L',
        target: 'y1',
        label: 'L̅ · ∂L/∂y₁',
        visible: false,
        classes: 'backward y1_backward',
    }),

    GraphEdge({
        id: 'L-y2-backprop',
        source: 'L',
        target: 'y2',
        label: 'L̅ · ∂L/∂y₂',
        visible: false,
        classes: 'backward y2_backward',
    }),

    GraphEdge({
        id: 'y1-w12_2-backprop',
        source: 'y1',
        target: 'w12_2',
        label: 'ȳ₁ · ∂y₁/∂w₁₂⁽²⁾',
        visible: false,
        classes: 'backward y1-w12_2-backprop',
    }),

    GraphEdge({
        id: 'y1-w11_2-backprop',
        source: 'y1',
        target: 'w11_2',
        label: 'ȳ₁ · ∂y₁/∂w₁₁⁽²⁾',
        visible: false,
        classes: 'backward y1-w11_2-backprop',
    }),

    GraphEdge({
        id: 'y1-b1_2-backprop',
        source: 'y1',
        target: 'b1_2',
        label: 'ȳ₁ · ∂y₁/∂b₁⁽²⁾',
        visible: false,
        classes: 'backward y1-b1_2-backprop',
    }),

    GraphEdge({
        id: 'y1-h1-backprop',
        source: 'y1',
        target: 'h1',
        label: 'ȳ₁ · ∂y₁/∂h₁',
        visible: false,
        classes: 'backward y1-h1-backprop',
    }),

    GraphEdge({
        id: 'y2-h1-backprop',
        source: 'y2',
        target: 'h1',
        label: 'ȳ₂ · ∂y₂/∂h₁',
        visible: false,
        classes: 'backward y2-h1-backprop',
    })

];

// Define GraphEdge data as objects (no JSX)
export const edgeDataList = [

    { id: "x1-z1", source: "x1", target: "z1" },
    { id: "x2-z1", source: "x2", target: "z1" },
    { id: "b1_1-z1", source: "b1_1", target: "z1" },
    { id: "w11_1-z1", source: "w11_1", target: "z1" },
    { id: "w12_1-z1", source: "w12_1", target: "z1" },
    { id: "x1-z2", source: "x1", target: "z2" },
    { id: "x2-z2", source: "x2", target: "z2" },
    { id: "w21_1-z2", source: "w21_1", target: "z2" },
    { id: "w22_1-z2", source: "w22_1", target: "z2" },
    { id: "b2_1-z2", source: "b2_1", target: "z2" },
    { id: "z1-h1", source: "z1", target: "h1" },
    { id: "z2-h2", source: "z2", target: "h2" },
    { id: "h1-y1", source: "h1", target: "y1" },
    { id: "h1-y2", source: "h1", target: "y2" },
    { id: "h2-y1", source: "h2", target: "y1" },
    { id: "h2-y2", source: "h2", target: "y2" },
    { id: "w12_2-y1", source: "w12_2", target: "y1" },
    { id: "w11_2-y1", source: "w11_2", target: "y1" },
    { id: "b1_2-y1", source: "b1_2", target: "y1" },
    { id: "w22_2-y2", source: "w22_2", target: "y2" },
    { id: "w21_2-y2", source: "w21_2", target: "y2" },
    { id: "b2_2-y2", source: "b2_2", target: "y2" },
    { id: "y1-L", source: "y1", target: "L" },
    { id: "y2-L", source: "y2", target: "L" },
    { id: "t1-L", source: "t1", target: "L" },
    { id: "t2-L", source: "t2", target: "L" },

    // NEW!!! (For backpropagation)
    // Note: All graph labels are native strings using unicode symbols (due to issues with supporting native MathJax rendering)
    {
        id: 'L-y1-backprop',
        source: 'L',
        target: 'y1',
        label: 'L̅ · ∂L/∂y₁',
        classes: 'backward y1_backward',
        visible: false
    },

    {
        id: 'L-y2-backprop',
        source: 'L',
        target: 'y2',
        label: 'L̅ · ∂L/∂y₂',
        classes: 'backward y2_backward',
        visible: false,
    },

    {
        id: 'y1-w12_2-backprop',
        source: 'y1',
        target: 'w12_2',
        label: 'ȳ₁ · ∂y₁/∂w₁₂⁽²⁾',
        visible: false,
        classes: 'backward y1-w12_2-backprop',
    },

    {
        id: 'y1-w11_2-backprop',
        source: 'y1',
        target: 'w11_2',
        label: 'ȳ₁ · ∂y₁/∂w₁₁⁽²⁾',
        visible: false,
        classes: 'backward y1-w11_2-backprop',
    },

    {
        id: 'y1-b1_2-backprop',
        source: 'y1',
        target: 'b1_2',
        label: 'ȳ₁ · ∂y₁/∂b₁⁽²⁾',
        visible: false,
        classes: 'backward y1-b1_2-backprop',
    },

    {
        id: 'y1-h1-backprop',
        source: 'y1',
        target: 'h1',
        label: 'ȳ₁ · ∂y₁/∂h₁',
        visible: false,
        classes: 'backward y1-h1-backprop',
    },

    {
        id: 'y2-h1-backprop',
        source: 'y2',
        target: 'h1',
        label: 'ȳ₂ · ∂y₂/∂h₁',
        visible: false,
        classes: 'backward y2-h1-backprop',
    }

];

