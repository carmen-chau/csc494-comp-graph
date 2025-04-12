/*
  Home page
*/

import { useRef, useState } from "react";
import { MathJaxContext } from 'better-react-mathjax';
import MathEquation from "../components/MathEquation";
import SampleGraph from '../components/CompGraph';
import { GraphHighlightButton } from "../components/GraphHighlightButton";
import { nodeObjList as forwardPropNodeList, edgeObjList as forwardPropEdgeList } from "../data/ForwardpropGraphData"
import { nodeObjList as backwardPropNodeList , edgeObjList as backwardPropEdgeList } from "../data/BackpropGraphData"
import { nodeClickFunction } from "../utils/HighlightFunction";

export default function Home() {

  // Graph instance + variables for forward pass 
  const cyRef = useRef<any>(null); // Defining a null instance of cyRef. Think of it as a blank slate prior to the graph even being created
  const [isForwardGraphHighlighted, setForwardGraphHighlight] = useState(false);  // Global state to check whether graph is highlighted, somewhere
  const [forwardActiveButton, setForwardActiveButton] = useState("");  // Global state to check whether there is a highlight button on the graph that is currently selected or not. 

  // Graph instance + variables for backprop
  const cyRef2 = useRef<any>(null);
  const [isBackwardGraphHighlighted, setBackwardGraphHighlight] = useState(false);  // Global state to check whether graph is highlighted, somewhere
  const [backwardActiveButton, setBackwardActiveButton] = useState("");  // Global state to check whether there is a highlight button on the graph that is currently selected or not. 

  // Defining state variable to store active equation name
  const [backpropActiveEquation, setBackpropActiveEquation] = useState("")
  
  // Defining a temporary node click function (for testing purposes)
  // function nodeClickFunction(event){
  //     const node = event.target;
  //     console.log("Clicked node ID:", node.id());
  // }

  function clickNodeForHighlight(event: any){
    const node = event.target;

    if (node.id() == "L") {
      const dataContent = {
        label: "Equation L_bar",
        nodeIds: ["L"],
        edgeIds: [],
        highlightColour: "#E7ff7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeButton: backwardActiveButton,
        setActiveButton: setBackwardActiveButton,
        equationName: "L_bar",
        setActiveEquation: setBackpropActiveEquation,
        equationStyle: "bg-[#E7ff7f] px-0.5 py-0.5 rounded-full",
        backPropEquationNames: ["L_backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      };
      nodeClickFunction(dataContent);
    }

    else if (node.id() == "y1"){
      const dataContent = {
        label: "Equation y1_bar",
        nodeIds: ["y1", "L"],
        edgeIds: [],
        highlightColour: "#Ff7f7f",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeButton: backwardActiveButton,
        setActiveButton: setBackwardActiveButton,
        equationName: "y1_bar",
        setActiveEquation: setBackpropActiveEquation,
        equationStyle: "bg-[#Ff7f7f] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }

      nodeClickFunction(dataContent);
    }

    else if (node.id() == "y2"){
      const dataContent = {
        label: "Equation y2_bar",
        nodeIds: ["y2", "L"],
        edgeIds: [],
        highlightColour: "#C3aaf9",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeButton: backwardActiveButton,
        setActiveButton: setBackwardActiveButton,
        equationName: "y2_bar",
        setActiveEquation: setBackpropActiveEquation,
        equationStyle: "bg-[#C3aaf9] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["L-y2-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }

      nodeClickFunction(dataContent);
    }

    else if (node.id() == "w12_2"){
      const dataContent = {
        label: "Equation w12_2_bar",
        nodeIds: ["w12_2", "y1", "L"],
        edgeIds: [],
        highlightColour: "#Ef97b0",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeButton: backwardActiveButton,
        setActiveButton: setBackwardActiveButton,
        equationName: "w12_2_bar",
        setActiveEquation: setBackpropActiveEquation,
        equationStyle: "bg-[#Ef97b0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["y1-w12_2-backprop", "L-y1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }

      nodeClickFunction(dataContent);
    }

    else if (node.id() == "w11_2"){
      const dataContent = {
        label: "Equation w11_2_bar",
        nodeIds: ["w11_2", "y1", "L"],
        edgeIds: [],
        highlightColour: "#89CFF0",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeButton: backwardActiveButton,
        setActiveButton: setBackwardActiveButton,
        equationName: "w11_2_bar",
        setActiveEquation: setBackpropActiveEquation,
        equationStyle: "bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full",
        backPropEquationNames: ["y1-w11_2-backprop", "L-y1-backprop"],
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }

      nodeClickFunction(dataContent);
    }

    else{
      const dataContent = {
        label: "reset",
        isGraphHighlighted: isBackwardGraphHighlighted,
        setGraphHighlighted: setBackwardGraphHighlight,
        activeButton: backwardActiveButton,
        setActiveButton: setBackwardActiveButton,
        setActiveEquation: setBackpropActiveEquation,
        cyRef: cyRef2,
        cyRefType: "backward-prop"
      }
      nodeClickFunction(dataContent);
    }


  }

  return (
    <div>
      <p className="pl-4 mb-8">Forward propagation demonstration:</p>
      <div className="flex">  {/* Making the background white temporarily. Old string: "min-h-screen flex justify-center items-center bg-white" */}
        <SampleGraph cyRef={cyRef} nodes={forwardPropNodeList} edges={forwardPropEdgeList}/>  {/* Making a Comp Graph Object */}
        <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
          <MathJaxContext>
            <div className="grid grid-cols-[auto,auto] gap-x-1 space-y-4 pr-4">
              <p className="font-serif col-span-2">Forward pass equations:</p>

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
                cyRefType = "forward-prop">
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
                cyRefType = "forward-prop">
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
                cyRefType = "forward-prop">
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
                cyRefType = "forward-prop">
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
                cyRefType = "forward-prop">
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
                cyRefType = "forward-prop">
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
                cyRefType = "forward-prop">
              </GraphHighlightButton>
            </div>
          </MathJaxContext>
        </div>
      </div>
      <p className="pl-4 mt-10 mb-8">Backward propagation demonstration:</p>
      <div className="flex">  {/* Making the background white temporarily. Old string: "min-h-screen flex justify-center items-center bg-white" */}
        <SampleGraph
          cyRef={cyRef2}
          nodes={backwardPropNodeList}
          edges={backwardPropEdgeList}
          nodeClickFunction={clickNodeForHighlight}
        />

        <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
          <MathJaxContext>
            <div className="grid grid-cols-[auto] gap-x-1 space-y-4 pr-4">
              <p className="font-serif col-span-1">Backward pass equations:</p>

              {/* Equation 1: L_bar */}
              {backpropActiveEquation === "L_bar" && (
                <MathEquation equationName="L_bar" content={"\\(\\overline{\\mathcal{L}}= 1\\)"} className='' />
              )}
          
              {/* Equation 2: y1_bar */}
              {backpropActiveEquation === "y1_bar" && (
                <MathEquation equationName="y1_bar" content={"\\(\\overline{y}_1 = \\overline{\\mathcal{L}} \\cdot \\frac{\\partial \\mathcal{L}}{\\partial y_1} = \\overline{\\mathcal{L}} (y_1 - t_1)\\)"} className=''></MathEquation>
              )}

              {/* Equation 3: y2_bar */}
              {backpropActiveEquation === "y2_bar" && (
                <MathEquation equationName="y2_bar" content={"\\(\\overline{y}_2 = \\overline{\\mathcal{L}} \\cdot \\frac{\\partial \\mathcal{L}}{\\partial y_2} = \\overline{\\mathcal{L}} (y_2 - t_2)\\)"} className=''></MathEquation>
              )}

              {/* Equation 4: w12_2_bar */}
              {backpropActiveEquation === "w12_2_bar" && (
                <MathEquation equationName="w12_2_bar" content={"\\( \\overline{w}^{(2)}_{12} = \\overline{y}_1 \\cdot \\frac{\\partial y_1}{\\partial w^{(2)}_{12}} = \\overline{y}_1 h_2 \\)"} className=''></MathEquation>
              )}

              {/* Equation 4: w11_2_bar */}
              {backpropActiveEquation === "w11_2_bar" && (
                <MathEquation equationName="w11_2_bar" content={"\\( \\overline{w}^{(2)}_{11} = \\overline{y}_1 \\cdot \\frac{\\partial y_1}{\\partial w^{(2)}_{11}} = \\overline{y}_1 h_1 \\)"} className=''></MathEquation>
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