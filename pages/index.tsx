/*
  Home page
*/

import { useRef, useState } from "react";
import { MathJaxContext } from 'better-react-mathjax';
import MathEquation from "../components/MathEquation";
import SampleGraph from '../components/CompGraph';
import { GraphHighlightButton } from "../components/GraphHighlightButton";
import { nodeObjList, edgeObjList } from "../data/CompGraph1Data"

export default function Home() {
  const cyRef = useRef<any>(null); // Defining a null instance of cyRef. Think of it as a blank slate prior to the graph even being created
  const [isGraphHighlighted, setGraphHighlight] = useState(false);  // Global state to check whether graph is highlighted, somewhere
  const [activeButton, setActiveButton] = useState("");  // Global state to check whether there is a highlight button on the graph that is currently selected or not. 

  return (
    <div className="min-h-screen flex justify-center items-center bg-white">  {/* Making the background white temporarily */}
      <SampleGraph cyRef={cyRef} nodes={nodeObjList} edges={edgeObjList} />  {/* Making a Comp Graph Object */}
      <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
        <MathJaxContext>
          <div className="grid grid-cols-[auto,auto] gap-x-1 space-y-4 pr-4">
            <p className="col-span-2">Computation Graph Equations:</p>

            {/* Equation 1: z1 */}
            <MathEquation equationName="z1" content={"\\(z_1 = w_{11}^{(1)} x_1 + w_{12}^{(1)} x_2 + b_1^{(1)}\\)"} className=''></MathEquation>
            <GraphHighlightButton
              label="Equation z1"
              nodeIds={["x1", "x2", "b1_1", "w11_1", "w12_1", "z1"]}
              edgeIds={["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1"]}
              highlightColour="#58cf35"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="z1"
              equationStyle="bg-[#58cf35] px-0.5 py-0.5 h-fit rounded-full"
              cyRef={cyRef}>
            </GraphHighlightButton>

            {/* Equation 2: z2 */}
            <MathEquation equationName="z2" content={"\\(z_2 = w_{21}^{(1)} x_1 + w_{22}^{(1)} x_2 + b_2^{(1)}\\)"} className=''></MathEquation>
            <GraphHighlightButton
              label="Equation z2"
              nodeIds={["x1", "x2", "b2_1", "w21_1", "w22_1", "z2"]}
              edgeIds={["x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]}
              highlightColour="#ffdbbb"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="z2"
              equationStyle="bg-[#ffdbbb] px-0.5 py-0.5 h-fit rounded-full"
              cyRef={cyRef}>
            </GraphHighlightButton>

            {/* Equation 3: h1 */}
            <MathEquation equationName="h1" content={"\\(h_1 = \\sigma(z_1)\\)"} className=''></MathEquation>
            <GraphHighlightButton
              label="Equation h1"
              nodeIds={["z1", "h1"]}
              edgeIds={["z1-h1"]}
              highlightColour="#89CFF0"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="h1"
              equationStyle="bg-[#89CFF0] px-0.5 py-0.5 h-fit rounded-full"
              cyRef={cyRef}>
            </GraphHighlightButton>

            {/* Equation 4: h2 */}
            <MathEquation equationName="h2" content={"\\(h_2 = \\sigma(z_2)\\)"} className=''></MathEquation>
            <GraphHighlightButton
              label="Equation h2"
              nodeIds={["z2", "h2"]}
              edgeIds={["z2-h2"]}
              highlightColour="#Ef97b0"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="h2"
              equationStyle="bg-[#Ef97b0] px-0.5 py-0.5 h-fit rounded-full"
              cyRef={cyRef}>
            </GraphHighlightButton>

            {/* Equation 5: y1 */}
            <MathEquation equationName="y1" content={"\\(y_1 = w_{11}^{(2)} h_1 + w_{12}^{(2)} h_2 + b_1^{(2)}\\)"} className=''></MathEquation>
            <GraphHighlightButton
              label="Equation y1"
              nodeIds={["y1", "h1", "h2", "w11_2", "w12_2", "b1_2"]}
              edgeIds={["h1-y1", "h2-y1", "b1_2-y1", "w11_2-y1", "w12_2-y1"]}
              highlightColour="#C3aaf9"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="y1"
              equationStyle="bg-[#C3aaf9] px-0.5 py-0.5 h-fit rounded-full"
              cyRef={cyRef}>
            </GraphHighlightButton>

            {/* Equation 6: y2 */}
            <MathEquation equationName= "y2" content = {"\\(y_2 = w_{21}^{(2)} h_1 + w_{22}^{(2)} h_2 + b_2^{(2)}\\)"}className=''></MathEquation>
            <GraphHighlightButton
              label="Equation y2"
              nodeIds={["y2", "h1", "h2", "w21_2", "w22_2", "b2_2"]}
              edgeIds={["h1-y2", "h2-y2", "b2_2-y2", "w21_2-y2", "w12_2-y2"]}
              highlightColour="#Ff7f7f"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="y2"
              equationStyle="bg-[#Ff7f7f] px-0.5 py-0.5 h-fit rounded-full"
              cyRef={cyRef}>
            </GraphHighlightButton>

            {/* Equation 7: L */}
            <MathEquation equationName= "L" content = {"\\( \\mathcal{L} = \\frac{1}{2} \\left( (y_1 - t_1)^2 + (y_2 - t_2)^2 \\right) \\)"}className=''></MathEquation> 
            <GraphHighlightButton
              label="Equation L"
              nodeIds={["t1", "t2", "L"]}
              edgeIds={["t1-L", "t2-L"]}
              highlightColour="#E7ff7f"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="L"
              equationStyle="bg-[#E7ff7f] px-0.5 py-0.5 h-fit rounded-full"
              cyRef={cyRef}>
            </GraphHighlightButton>

          </div>
        </MathJaxContext>
      </div>
    </div>
  );
}

// Equations that still need to be added back...eventually
{/* <MathEquation equationName = "z1" content = {"\\(z_1 = w_{11}^{(1)} x_1 + w_{12}^{(1)} x_2 + b_1^{(1)}\\)"} className=''></MathEquation>
            <MathEquation equationName= "z2" content = {"\\(z_2 = w_{21}^{(1)} x_1 + w_{22}^{(1)} x_2 + b_2^{(1)}\\)"}className=''></MathEquation>
            <MathEquation equationName= "h1" content = {"\\(h_1 = \\sigma(z_1)\\)"}className=''></MathEquation>
            <MathEquation equationName= "h2" content = {"\\(h_2 = \\sigma(z_2)\\)"}className=''></MathEquation>
            <MathEquation equationName= "y1" content = {"\\(y_1 = w_{11}^{(2)} h_1 + w_{12}^{(2)} h_2 + b_1^{(2)}\\)"}className=''></MathEquation>
            <MathEquation equationName= "y2" content = {"\\(y_2 = w_{21}^{(2)} h_1 + w_{22}^{(2)} h_2 + b_2^{(2)}\\)"}className=''></MathEquation>
            <MathEquation equationName= "y2" content = {"\\( \\mathcal{L} = \\frac{1}{2} \\left( (y_1 - t_1)^2 + (y_2 - t_2)^2 \\right) \\)"}className=''></MathEquation> */}