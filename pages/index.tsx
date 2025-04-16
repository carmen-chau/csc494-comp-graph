/*
  Home page
*/

import { useRef, useState, useEffect } from "react";
import { MathJax } from 'better-react-mathjax';
import { MathJaxContext } from 'better-react-mathjax';
import { CollapsibleSection } from "../components/CollapsibleSection";
import MathEquation from "../components/MathEquation";
import SampleGraph from '../components/CompGraph';
import { GraphHighlightButton } from "../components/GraphHighlightButton";
import { nodeObjList as forwardPropNodeList, edgeObjList as forwardPropEdgeList } from "../data/ForwardpropGraphData"
import { nodeObjList as backwardPropNodeList, edgeObjList as backwardPropEdgeList } from "../data/BackpropGraphData"
import { nodeClickFunction } from "../utils/HighlightFunction";

export default function Home() {

  // Graph instance + variables for forward pass 
  const cyRef = useRef<any>(null); // Defining a null instance of cyRef. Think of it as a blank slate prior to the graph even being created
  const [isForwardGraphHighlighted, setForwardGraphHighlight] = useState(false);  // Global state to check whether graph is highlighted, somewhere
  const [forwardActiveButton, setForwardActiveButton] = useState("");  // Global state to check whether there is a highlight button on the graph that is currently selected or not. 

  // Graph instance + variables for backprop
  const cyRef2 = useRef<any>(null);
  const [isBackwardGraphHighlighted, setBackwardGraphHighlight] = useState(false);  // Global state to check whether graph is highlighted, somewhere
  const [backwardActiveNode, setBackwardActiveNode] = useState("");  // Global state to check whether there is a node on the graph that is currently selected to highlight backprop

  // Defining state variable to store and set active equation name
  const [backpropActiveEquations, setBackpropActiveEquations] = useState<string[]>([]);

  //Defining state variables to store and set style string for backprop equation.
  const [backpropEquationStyle, setBackpropEquationStyle] = useState("");

  //NEW: Only for the backprop graph. Define a useEffect hook to dynamically highlight equation when it is active AND when a valid styling string is passed
  useEffect(() => {
    const allEquations = document.querySelectorAll("[data-equation]");
    const finalEquationToHighlight = backpropActiveEquations[backpropActiveEquations.length - 1];
    allEquations.forEach((equation) => (equation.className = "")); // Clear existing highlights

    if (finalEquationToHighlight && backpropEquationStyle) {
      const selectedEquation = document.querySelector(`[data-equation="${finalEquationToHighlight}"]`);
      if (selectedEquation) {
        backpropEquationStyle.split(" ").forEach((cls) => {
          selectedEquation.classList.add(cls);
        });
      }
    }
  }, [backpropActiveEquations, backpropEquationStyle]); // useEffect hook would run only when these variables change in value

  function clickNodeForHighlight(event: any) {
    const node = event.target;

    if (node.id() == "L") {
      const dataContent = {
        label: "Equation L_bar",
        nodeIds: ["L"],
        edgeIds: [],
        highlightColour: "#E7ff7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#E7ff7f] px-0.5 py-0.5 rounded-full",
        backPropEquationNames: ["L_backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      };
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#E7ff7f] px-0.5 py-0.5 rounded-full");
    }

    else if (node.id() == "t1") {

      const dataContent = {
        label: "Equation t1",
        nodeIds: ["t1"],
        edgeIds: [],
        highlightColour: "#E7ff7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["t1"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#E7ff7f] px-0.5 py-0.5 rounded-full",
        backPropEquationNames: [],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      };
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#0000] px-0.5 py-0.5 rounded-full");
    }

    else if (node.id() == "t2") {

      const dataContent = {
        label: "Equation t2",
        nodeIds: ["t2"],
        edgeIds: [],
        highlightColour: "#E7ff7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["t2"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#E7ff7f] px-0.5 py-0.5 rounded-full",
        backPropEquationNames: [],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      };
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#0000] px-0.5 py-0.5 rounded-full");
    }

    else if (node.id() == "y1") {
      const dataContent = {
        label: "Equation y1_bar",
        nodeIds: ["y1", "L"],
        edgeIds: [],
        highlightColour: "#Ff7f7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#Ff7f7f] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }

      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#Ff7f7f] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "y2") {
      const dataContent = {
        label: "Equation y2_bar",
        nodeIds: ["y2", "L"],
        edgeIds: [],
        highlightColour: "#C3aaf9",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y2_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#C3aaf9] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y2-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#C3aaf9] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "w12_2") {
      const dataContent = {
        label: "Equation w12_2_bar",
        nodeIds: ["w12_2", "y1", "L"],
        edgeIds: [],
        highlightColour: "#Ef97b0",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "w12_2_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#Ef97b0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["y1-w12_2-backprop", "L-y1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#Ef97b0] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "w11_2") {
      const dataContent = {
        label: "Equation w11_2_bar",
        nodeIds: ["w11_2", "y1", "L"],
        edgeIds: [],
        highlightColour: "#89CFF0",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "w11_2_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["y1-w11_2-backprop", "L-y1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "b1_2") {
      const dataContent = {
        label: "Equation b1_2_bar",
        nodeIds: ["b1_2", "y1", "L"],
        edgeIds: [],
        highlightColour: "#ffdbbb",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "b1_2_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["y1-b1_2-backprop", "L-y1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#ffdbbb] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "h1") {
      const dataContent = {
        label: "Equation h1_bar",
        nodeIds: ["h1", "y1", "y2", "L"],
        edgeIds: [],
        highlightColour: "#58cf35",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "y2_bar", "h1_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y1-backprop", "L-y2-backprop", "y1-h1-backprop", "y2-h1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#58cf35] px-0.5 py-0.5 h-fit rounded-full");
    }
    else if (node.id() == "h2") {
      const dataContent = {
        label: "Equation h2_bar",
        nodeIds: ["h2", "y1", "y2", "L"],
        edgeIds: [],
        highlightColour: "#E7ff7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "y2_bar", "h2_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y1-backprop", "L-y2-backprop", "y1-h2-backprop", "y2-h2-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#E7ff7f] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "z1") {
      const dataContent = {
        label: "Equation z1_bar",
        nodeIds: ["z1", "h1", "y1", "y2", "L"],
        edgeIds: [],
        highlightColour: "#Ff7f7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "y2_bar", "h1_bar", "z1_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y1-backprop", "L-y2-backprop", "y1-h1-backprop", "y2-h1-backprop", "h1-z1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#Ff7f7f] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "z2") {
      const dataContent = {
        label: "Equation z2_bar",
        nodeIds: ["z2", "h2", "y1", "y2", "L"],
        edgeIds: [],
        highlightColour: "#C3aaf9",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "y2_bar", "h2_bar", "z2_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y1-backprop", "L-y2-backprop", "y1-h2-backprop", "y2-h2-backprop", "h2-z2-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#C3aaf9] px-0.5 py-0.5 h-fit rounded-full");
    }

    else if (node.id() == "w12_1") {
      const dataContent = {
        label: "Equation w12_1_bar",
        nodeIds: ["w12_1", "z1", "h1", "y1", "y2", "L"],
        edgeIds: [],
        highlightColour: "#Ef97b0",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        equationNames: ["L_bar", "y1_bar", "y2_bar", "h2_bar", "z2_bar", "w12_1_bar"],
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        // equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y1-backprop", "L-y2-backprop", "y1-h1-backprop", "y2-h1-backprop", "h1-z1-backprop", "z1-w12_1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
      setBackpropEquationStyle("bg-[#Ef97b0] px-0.5 py-0.5 h-fit rounded-full");
    }

    else {
      const dataContent = {
        label: "reset",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeNode: backwardActiveNode,
        setActiveNode: setBackwardActiveNode,
        activeEquations: backpropActiveEquations,
        setActiveEquation: setBackpropActiveEquations,
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
    }


  }

  return (
    <div>
      <p className="pl-4 mt-10 mb-8 text-2xl font-bold underline text-gray-800">Forward pass:</p>
      <div className="mx-4 mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded shadow-sm">
        <p className="text-gray-800 text-lg font-bold">Definition</p>
        <p className="text-gray-700 mt-1">
          <MathJaxContext>
            <MathJax>
              {"Forward pass is the process in which we pass inputs (eg: \\( x_1 \\), \\( x_2 \\)) through a neural network to computing prediction values (eg: \\( y_1 \\), \\( y_2 \\)). We can these compare these prediction values with the true values (eg: \\( t_1 \\), \\( t_2 \\)) to compute the loss \\( \\mathcal{L} \\). "}
            </MathJax>
          </MathJaxContext>
        </p>
        <p className="text-gray-700 mt-1">
          <MathJaxContext>
            <MathJax>
              {"To generate these predictions, the network computes intermediate terms applying linear transformations (using weights and biases) followed by non-linear activation functions. Check out the "}
              <strong>Terminology</strong>
              {" section to learn more about each intermediate term for this specific visualization example."}
            </MathJax>
          </MathJaxContext>
        </p>
        <div>
          <CollapsibleSection title="Terminology">
            <MathJaxContext>
              <MathJax>
                <ul className="list-disc list-inside text-base text-left space-y-2">

                  {/* Inputs */}
                  <p className="font-bold mt-2">Inputs</p>
                  <li className="pl-4">{"\\( x_1, x_2 \\): Input features to the network."}</li>

                  {/* First Layer: Input → Pre-Activation */}
                  <p className="font-bold mt-4">First Layer (Input → Hidden)</p>
                  <li className="pl-4">{"\\( w_{11}^{(1)}, w_{12}^{(1)} \\): Weights denoting how much \\( x_1 \\) and \\( x_2 \\) respectively contribute to the pre-activation \\( z_1 \\)."}</li>
                  <li className="pl-4">{"\\( b_1^{(1)} \\): Bias term added to \\( z_1 \\)."}</li>
                  <li className="pl-4">{"\\( w_{21}^{(1)}, w_{22}^{(1)} \\): Weights denoting how much \\( x_1 \\) and \\( x_2 \\) respectively contribute to the pre-activation \\( z_2 \\)."}</li>
                  <li className="pl-4">{"\\( b_2^{(1)} \\): Bias term added to \\( z_2 \\)."}</li>
                  <li className="pl-4">{"\\( z_1, z_2 \\): Input terms to the activation function."}</li>
                  <li className="pl-4">{"\\( h_1 = \\sigma(z_1), \\; h_2 = \\sigma(z_2) \\): Activation functions."}</li>

                  {/* Second Layer: Pre-Activation → Output */}
                  <p className="font-bold mt-4">Second Layer (Hidden → Output)</p>
                  <li className="pl-4">{"\\( w_{11}^{(2)}, w_{12}^{(2)} \\): Weights denoting how much \\( h_1 \\) and \\( h_2 \\) respectively contribute to the predicted value \\( y_1 \\)."}</li>
                  <li className="pl-4">{"\\( b_1^{(2)} \\): Bias term added to \\( y_1 \\)."}</li>
                  <li className="pl-4">{"\\( w_{21}^{(2)}, w_{22}^{(2)} \\): Weights denoting how much \\( h_1 \\) and \\( h_2 \\) respectively contribute to the predicted value \\( y_2 \\)."}</li>
                  <li className="pl-4">{"\\( y_1, y_2 \\): Final outputs (predictions) of the network."}</li>

                  {/* Loss computation */}
                  <p className="font-bold mt-4">Loss computation</p>
                  <li className="pl-4">{"\\( t_1, t_2 \\): Target values for network output \\( y_1, y_2 \\) respectively"}</li>
                  <li className="pl-4">{"\\( \\mathcal{L} \\): Loss function. Its output is the squared error between each prediction \\( y_1, y_2 \\) and target \\( t_1, t_2 \\)."}</li>
                </ul>
              </MathJax>
            </MathJaxContext>
          </CollapsibleSection>
        </div>
      </div>

      <div className="mx-4 mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded shadow-sm">
        <p className="text-gray-800 text-lg font-bold">Diagram components</p>
        <p className="text-gray-700">The computation graph <b>nodes</b> represent all the input and computed quantities.</p>
        <p className="text-gray-700">The computation graph <b>edges</b> represent which nodes are computed directly from which other nodes. This relationship is also known as a <b>direct dependency.</b></p>

        <p className="text-gray-800 text-lg font-bold mt-5">How to use diagram:</p>
        <p className="text-gray-700">
          Now, let's explore how the computation graph is built step by step in forward pass.
          Use the <b>"Select"</b> buttons beside each equation in section <b>"Forward Pass Equations" </b>to highlight the specific nodes and edges that are involved in computing that expression.
        </p>
      </div>

      <div className="flex">  {/* Making the background white temporarily. Old string: "min-h-screen flex justify-center items-center bg-white" */}
        <SampleGraph cyRef={cyRef} nodes={forwardPropNodeList} edges={forwardPropEdgeList} />  {/* Making a Comp Graph Object */}
        <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
          <MathJaxContext>
            <div className="grid grid-cols-[auto,auto] gap-x-1 space-y-4 pr-4">
              <p className="font-serif col-span-2 font-bold">Forward pass Equations:</p>

              {/* Equation 1: z1 */}
              <MathEquation equationName="z1" content={"\\(z_1 = w_{11}^{(1)} x_1 + w_{12}^{(1)} x_2 + b_1^{(1)}\\)"} className=''></MathEquation>
              <GraphHighlightButton
                label="Equation z1"
                nodeIds={["x1", "x2", "b1_1", "w11_1", "w12_1", "z1"]}
                edgeIds={["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1"]}
                highlightColour="#58cf35"
                isGraphHighlighted={isForwardGraphHighlighted}
                setGraphHighlighted={setForwardGraphHighlight}
                activeButton={forwardActiveButton}
                setActiveButton={setForwardActiveButton}
                equationName="z1"
                equationStyle="bg-[#58cf35] px-0.5 py-0.5 h-fit rounded-full"
                cyRef={cyRef}
                cyRefType="forward-prop">
              </GraphHighlightButton>

              {/* Equation 2: z2 */}
              <MathEquation equationName="z2" content={"\\(z_2 = w_{21}^{(1)} x_1 + w_{22}^{(1)} x_2 + b_2^{(1)}\\)"} className=''></MathEquation>
              <GraphHighlightButton
                label="Equation z2"
                nodeIds={["x1", "x2", "b2_1", "w21_1", "w22_1", "z2"]}
                edgeIds={["x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]}
                highlightColour="#ffdbbb"
                isGraphHighlighted={isForwardGraphHighlighted}
                setGraphHighlighted={setForwardGraphHighlight}
                activeButton={forwardActiveButton}
                setActiveButton={setForwardActiveButton}
                equationName="z2"
                equationStyle="bg-[#ffdbbb] px-0.5 py-0.5 h-fit rounded-full"
                cyRef={cyRef}
                cyRefType="forward-prop">
              </GraphHighlightButton>

              {/* Equation 3: h1 */}
              <MathEquation equationName="h1" content={"\\(h_1 = \\sigma(z_1)\\)"} className=''></MathEquation>
              <GraphHighlightButton
                label="Equation h1"
                nodeIds={["z1", "h1"]}
                edgeIds={["z1-h1"]}
                highlightColour="#89CFF0"
                isGraphHighlighted={isForwardGraphHighlighted}
                setGraphHighlighted={setForwardGraphHighlight}
                activeButton={forwardActiveButton}
                setActiveButton={setForwardActiveButton}
                equationName="h1"
                equationStyle="bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full"
                cyRef={cyRef}
                cyRefType="forward-prop">
              </GraphHighlightButton>

              {/* Equation 4: h2 */}
              <MathEquation equationName="h2" content={"\\(h_2 = \\sigma(z_2)\\)"} className=''></MathEquation>
              <GraphHighlightButton
                label="Equation h2"
                nodeIds={["z2", "h2"]}
                edgeIds={["z2-h2"]}
                highlightColour="#Ef97b0"
                isGraphHighlighted={isForwardGraphHighlighted}
                setGraphHighlighted={setForwardGraphHighlight}
                activeButton={forwardActiveButton}
                setActiveButton={setForwardActiveButton}
                equationName="h2"
                equationStyle="bg-[#Ef97b0] px-0.5 py-0.5 h-fit rounded-full"
                cyRef={cyRef}
                cyRefType="forward-prop">
              </GraphHighlightButton>

              {/* Equation 5: y1 */}
              <MathEquation equationName="y1" content={"\\(y_1 = w_{11}^{(2)} h_1 + w_{12}^{(2)} h_2 + b_1^{(2)}\\)"} className=''></MathEquation>
              <GraphHighlightButton
                label="Equation y1"
                nodeIds={["y1", "h1", "h2", "w11_2", "w12_2", "b1_2"]}
                edgeIds={["h1-y1", "h2-y1", "b1_2-y1", "w11_2-y1", "w12_2-y1"]}
                highlightColour="#C3aaf9"
                isGraphHighlighted={isForwardGraphHighlighted}
                setGraphHighlighted={setForwardGraphHighlight}
                activeButton={forwardActiveButton}
                setActiveButton={setForwardActiveButton}
                equationName="y1"
                equationStyle="bg-[#C3aaf9] px-0.5 py-0.5 h-fit rounded-full"
                cyRef={cyRef}
                cyRefType="forward-prop">
              </GraphHighlightButton>

              {/* Equation 6: y2 */}
              <MathEquation equationName="y2" content={"\\(y_2 = w_{21}^{(2)} h_1 + w_{22}^{(2)} h_2 + b_2^{(2)}\\)"} className=''></MathEquation>
              <GraphHighlightButton
                label="Equation y2"
                nodeIds={["y2", "h1", "h2", "w21_2", "w22_2", "b2_2"]}
                edgeIds={["h1-y2", "h2-y2", "b2_2-y2", "w21_2-y2", "w12_2-y2"]}
                highlightColour="#Ff7f7f"
                isGraphHighlighted={isForwardGraphHighlighted}
                setGraphHighlighted={setForwardGraphHighlight}
                activeButton={forwardActiveButton}
                setActiveButton={setForwardActiveButton}
                equationName="y2"
                equationStyle="bg-[#Ff7f7f] px-0.5 py-0.5 h-fit rounded-full"
                cyRef={cyRef}
                cyRefType="forward-prop">
              </GraphHighlightButton>

              {/* Equation 7: L */}
              <MathEquation equationName="L" content={"\\( \\mathcal{L} = \\frac{1}{2} \\left( (y_1 - t_1)^2 + (y_2 - t_2)^2 \\right) \\)"} className=''></MathEquation>
              <GraphHighlightButton
                label="Equation L"
                nodeIds={["t1", "t2", "L"]}
                edgeIds={["t1-L", "t2-L"]}
                highlightColour="#E7ff7f"
                isGraphHighlighted={isForwardGraphHighlighted}
                setGraphHighlighted={setForwardGraphHighlight}
                activeButton={forwardActiveButton}
                setActiveButton={setForwardActiveButton}
                equationName="L"
                equationStyle="bg-[#E7ff7f] px-0.5 py-0.5 h-fit rounded-full"
                cyRef={cyRef}
                cyRefType="forward-prop">
              </GraphHighlightButton>
            </div>
          </MathJaxContext>
        </div>
      </div>
      <p className="pl-4 mt-10 mb-8 text-2xl font-bold underline text-gray-800">Backpropagation:</p>
      <div className="mx-4 mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded shadow-sm">
        <p className="text-gray-800 text-lg font-bold">Definition</p>
        <p className="text-gray-700 mt-1">
          <MathJaxContext>
            <MathJax>
              {"Backpropagation is the process in which we compute the gradient of the loss function with respect to the model parameters (ie: Its weight and bias terms). "}
            </MathJax>
          </MathJaxContext>
        </p>
        <p className="text-gray-700 mt-1">
          <MathJaxContext>
            <MathJax>
              {"Unlike forward pass, which flows from input to output, backpropagation starts at the model’s output (i.e., the loss value) and works backward through the network, calculating how sensitive the loss is to each parameter."}
            </MathJax>
          </MathJaxContext>
        </p>
        <p className="text-gray-700 mt-1">
          <MathJaxContext>
            <MathJax>
              {"We can use these results to iteratively update the parameters to minimize model loss. "}
              {"You can explore the "}
              <strong>{"Terminology"}</strong>
              {" section to learn more about the notation used in this process."}
            </MathJax>
          </MathJaxContext>
        </p>
        <CollapsibleSection title="Terminology">
          <MathJaxContext>
            <MathJax>
              <div className="list-disc list-inside text-base text-left space-y-2">

                {/* Error signal */}
                <p className="font-bold mt-2">Error signal</p>
                <p className="pl-4">{"Let the term \\( \\bar{y} \\) denote the derivative \\( \\frac{\\partial \\mathcal{L}}{\\partial y} \\), which represents how much a node \\( y \\) influences the final loss \\( \\mathcal{L} \\)."}</p>
                <p className="pl-4">{"Error signals are just values our program is computing (rather than a mathematical operation)."}</p>
              </div>
            </MathJax>
          </MathJaxContext>
        </CollapsibleSection>
      </div>
      <div className="mx-4 mb-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded shadow-sm">
      <p className="text-gray-800 text-lg font-bold">Diagram components</p>
        <p className="text-gray-700">The computation graph <b>nodes</b> represent all the input and computed quantities.</p>
        <p className="text-gray-700">The computation graph <b>edges</b> represent which nodes are computed directly from which other nodes. This relationship is also known as a <b>direct dependency.</b></p>
        <p className="text-gray-700">The <b>dotted blue arrows</b> that would appear when a node is pressed represents the gradient flow. The <b>error signals</b> of each node denotes the underlying numerical value computed from these flows.</p>
        <p className="text-gray-800 text-lg font-bold mt-5">How to use diagram:</p>
        <p className="text-gray-700">
          The diagram below illustrates how gradients are computed and propagated backward through the network to compute error signals.
        </p>
        <p className="text-gray-700">
        Click on any node in the computation graph to visualize its error signal.
        The intermediate error signals and equations would appear in section <b>Backpropagation Equations</b>.
        The final error signal equation for the node being clicked would be highlighted.
        </p>
        <p className="text-gray-700">
         When applicable, there would also be an <b>Explanation</b> text box that would appears to give more context about the error signal result.
        </p>
      </div>
      <div className="flex">  {/* Making the background white temporarily. Old string: "min-h-screen flex justify-center items-center bg-white" */}
        <SampleGraph
          cyRef={cyRef2}
          nodes={backwardPropNodeList}
          edges={backwardPropEdgeList}
          nodeClickFunction={clickNodeForHighlight}
        />

        <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
          <MathJaxContext>
            <div className="grid grid-cols-[auto] gap-x-1 space-y-6 pr-4">
              <p className="font-serif col-span-1 font-bold">Backpropagation Equations:</p>

              {/* Equation 1: L_bar */}
              {backpropActiveEquations.includes("L_bar") && (
                <MathEquation equationName="L_bar" content={"\\(\\overline{\\mathcal{L}}= 1\\)"} className='' />
              )}

              {/* Equation 2: t1 */}
              {backpropActiveEquations.includes("t1") && (
                <>
                  <MathJax>{"None"}</MathJax>
                  <div className="mt-6 mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md shadow-sm">
                    <MathJaxContext>
                      <MathJax>
                        <p className="font-semibold text-yellow-800">Explanation:</p>
                        <p className='text-lg'>{"\\(t_1\\) represents the expected value for \\(y_1\\). It is a constant, not something that is computed by the network. Thus, there is no error signal for \\(t_1\\)."}</p>
                      </MathJax>
                    </MathJaxContext>
                  </div>
                </>
              )}

              {/* Equation 3: t2 */}
              {backpropActiveEquations.includes("t2") && (
                <>
                  <MathJax>{"None"}</MathJax>
                  <div className="mt-6 mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md shadow-sm">
                    <MathJaxContext>
                      <MathJax>
                        <p className="font-semibold text-yellow-800">Explanation:</p>
                        <p className="text-lg">{"\\(t_2\\) represents the expected value for \\(y_2\\). It is a constant, not something that is computed by the network. Thus, there is no error signal for \\(t_2\\)."}</p>
                      </MathJax>
                    </MathJaxContext>
                  </div>
                </>
              )}

              {/* Equation 4: y1_bar */}
              {backpropActiveEquations.includes("y1_bar") && (
                <MathEquation equationName="y1_bar" content={"\\(\\overline{y}_1 = \\overline{\\mathcal{L}} \\cdot \\frac{\\partial \\mathcal{L}}{\\partial y_1} = \\overline{\\mathcal{L}} (y_1 - t_1)\\)"} className=''></MathEquation>
              )}

              {/* Equation 5: y2_bar */}
              {backpropActiveEquations.includes("y2_bar") && (
                <MathEquation equationName="y2_bar" content={"\\(\\overline{y}_2 = \\overline{\\mathcal{L}} \\cdot \\frac{\\partial \\mathcal{L}}{\\partial y_2} = \\overline{\\mathcal{L}} (y_2 - t_2)\\)"} className=''></MathEquation>
              )}

              {/* Equation 6: w12_2_bar */}
              {backpropActiveEquations.includes("w12_2_bar") && (
                <MathEquation equationName="w12_2_bar" content={"\\( \\overline{w}^{(2)}_{12} = \\overline{y}_1 \\cdot \\frac{\\partial y_1}{\\partial w^{(2)}_{12}} = \\overline{y}_1 h_2 \\)"} className=''></MathEquation>
              )}

              {/* Equation 7: w11_2_bar */}
              {backpropActiveEquations.includes("w11_2_bar") && (
                <MathEquation equationName="w11_2_bar" content={"\\( \\overline{w}^{(2)}_{11} = \\overline{y}_1 \\cdot \\frac{\\partial y_1}{\\partial w^{(2)}_{11}} = \\overline{y}_1 h_1 \\)"} className=''></MathEquation>
              )}

              {/* Equation 8: b1_2_bar */}
              {backpropActiveEquations.includes("b1_2_bar") && (
                <MathEquation equationName="b1_2_bar" content={"\\( \\overline{b}^{(2)}_1 = \\overline{y}_1 \\cdot \\frac{\\partial y_1}{\\partial b^{(2)}_1} = \\overline{y}_1 \\)"} className=''></MathEquation>
              )}

              {/* Equation 9: h1_bar */}
              {backpropActiveEquations.includes("h1_bar") && (
                <>
                  <MathEquation
                    equationName="h1_bar"
                    content={"\\(\\overline{h}_1 = \\sum_{i=1}^{2} \\overline{y}_i \\cdot \\frac{\\partial y_i}{\\partial h_1} = \\sum_{i=1}^{2} \\overline{y}_i w_{i1}^{(2)} = \\overline{y}_1 w_{11}^{(2)} + \\overline{y}_2 w_{21}^{(2)}\\)"}
                    className=''
                  />
                  {/* Learning Alert Box */}
                  {!["z1_bar"].some((key) => backpropActiveEquations.includes(key)) && (
                  <div className="mt-6 mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md shadow-sm">
                    <p className="font-bold text-yellow-800">Explanation:</p>
                    <MathJaxContext>
                      <MathJax>
                        <p className="mt-2 text-lg text-gray-800">
                          We need to use the <b>multivariate chain rule</b> here because <MathJax inline>{"\\(h_1\\)"}</MathJax> affects the loss value through multiple <MathJax inline>{"\\(y_k\\)"}</MathJax> terms.
                        </p>
                        <p className="mt-1 text-lg text-gray-800">
                          In the diagram, this is shown by <MathJax inline>{"\\( h_1 \\)"}</MathJax> having two distinct paths: One through <MathJax inline>{"\\( y_1 \\)"}</MathJax> and another through <MathJax inline>{"\\( y_2 \\)"}</MathJax>.
                        </p>
                        <p className="mt-2 text-lg text-gray-800">
                          The multivariate chain rule allows us to account for all paths through which <MathJax inline>{"\\(h_1\\)"}</MathJax> flows into the loss.
                        </p>
                      </MathJax>
                    </MathJaxContext>
                  </div>
                  )}
                </>
              )}

              {/* Equation 10: h2_bar */}
              {backpropActiveEquations.includes("h2_bar") && (
                <>
                  <MathEquation
                    equationName="h2_bar"
                    content={"\\(\\overline{h}_2 = \\sum_{i=1}^{2} \\overline{y}_i \\cdot \\frac{\\partial y_i}{\\partial h_1} = \\sum_{i=1}^{2} \\overline{y}_i w_{i2}^{(2)} = \\overline{y}_1 w_{21}^{(2)} + \\overline{y}_2 w_{22}^{(2)}\\)"}
                    className=''
                  />
                  {/* Learning Alert Box */}
                  {!["z2_bar"].some((key) => backpropActiveEquations.includes(key)) && (
                  <div className="mt-6 mb-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-md shadow-sm">
                    <p className="font-bold text-yellow-800">Explanation:</p>
                    <MathJaxContext>
                      <MathJax>
                        <p className="mt-2 text-lg text-gray-800">
                          We need to use the <b>multivariate chain rule</b> here because <MathJax inline>{"\\(h_2\\)"}</MathJax> affects the loss value through multiple <MathJax inline>{"\\(y_k\\)"}</MathJax> terms.
                        </p>
                        <p className="mt-1 text-lg text-gray-800">
                          In the diagram, this is shown by <MathJax inline>{"\\( h_2 \\)"}</MathJax> having two distinct paths: One through <MathJax inline>{"\\( y_1 \\)"}</MathJax> and another through <MathJax inline>{"\\( y_2 \\)"}</MathJax>.
                        </p>
                        <p className="mt-2 text-lg text-gray-800">
                          The multivariate chain rule allows us to account for all paths through which <MathJax inline>{"\\(h_2\\)"}</MathJax> flows into the loss.
                        </p>
                      </MathJax>
                    </MathJaxContext>
                  </div>
                  )}
                </>
              )}
              {/* Equation 11: z1_bar */}
              {backpropActiveEquations.includes("z1_bar") && (
                <MathEquation equationName="z1_bar" content={"\\( \\overline{z}_1 = \\overline{h}_1 \\cdot \\frac{\\partial h_1}{\\partial z_1} = \\overline{h}_1 \\cdot \\sigma'(z_1) = \\overline{h}_1 \\cdot \\sigma(z_1)(1 - \\sigma(z_1)) \\)"} className=''></MathEquation>
              )}
              {/* Equation 12: z2_bar */}
              {backpropActiveEquations.includes("z2_bar") && (
                <MathEquation equationName="z2_bar" content={"\\( \\overline{z}_2 = \\overline{h}_2 \\cdot \\frac{\\partial h_2}{\\partial z_2} = \\overline{h}_2 \\cdot \\sigma'(z_2) = \\overline{h}_2 \\cdot \\sigma(z_2)(1 - \\sigma(z_2)) \\)"} className=''></MathEquation>
              )}
              {/* Equation 13: w12_1_bar */}
              {backpropActiveEquations.includes("w12_1_bar") && (
                <MathEquation equationName="w12_1_bar" content={"\\( \\overline{w}^{(1)}_{12} = \\overline{z}_1 \\cdot \\frac{\\partial z_1}{\\partial w^{(1)}_{12}} = \\overline{z}_1 x_2 \\ \\)"} className=''></MathEquation>
              )}
            </div>
          </MathJaxContext>
        </div>
      </div>
    </div>
  );
}

/*
  Note: Old code where each equation was rendered regardless of whether node is pressed or not. Similar format to forward propagation.


        //   <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
        //   <MathJaxContext>
        //     <div className="grid grid-cols-[auto] gap-x-1 space-y-4 pr-4">
        //       <p className="font-serif col-span-1">Backward pass equations:</p>

        //       {/* Equation 1: L_bar *///}
        //       <MathEquation equationName="L_bar" content={"\\(\\overline{\\mathcal{L}}= 1\\)"} className=''></MathEquation>
          
        //       {/* Equation 2: y1_bar */}
        //       <MathEquation equationName="y1_bar" content={"\\(\\overline{y}_1 = \\overline{\\mathcal{L}} \\cdot \\frac{\\partial \\mathcal{L}}{\\partial y_1} = \\overline{\\mathcal{L}} (y_1 - t_1)\\)"} className=''></MathEquation>

        //       {/* Equation 3: y2_bar */}
        //       <MathEquation equationName="y2_bar" content={"\\(\\overline{y}_2 = \\overline{\\mathcal{L}} \\cdot \\frac{\\partial \\mathcal{L}}{\\partial y_2} = \\overline{\\mathcal{L}} (y_2 - t_2)\\)"} className=''></MathEquation>

        //       {/* Equation 4: w12_2_bar */}
        //       <MathEquation equationName="w12_2_bar" content={"\\( \\overline{w}^{(2)}_{12} = \\overline{y}_1 \\cdot \\frac{\\partial y_1}{\\partial w^{(2)}_{12}} = \\overline{y}_1 h_2 \\)"} className=''></MathEquation>

        //       {/* Equation 4: w11_2_bar */}
        //       <MathEquation equationName="w11_2_bar" content={"\\( \\overline{w}^{(2)}_{11} = \\overline{y}_1 \\cdot \\frac{\\partial y_1}{\\partial w^{(2)}_{11}} = \\overline{y}_1 h_1 \\)"} className=''></MathEquation>

        //     </div>
        //   </MathJaxContext>
        // </div>

//*/