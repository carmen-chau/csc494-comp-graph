// pages/index.tsx
import { useRef, useState } from "react";
import { nodeObjList, edgeObjList } from "../data/CompGraph1Data"
import SampleGraph from '../components/CompGraph';
import { MathJaxContext } from 'better-react-mathjax';
import MathEquation from "../components/MathEquation";
import GraphStepButton from "../components/GraphStepButton";

export default function Home() {
  const cyRef = useRef<any>(null); // ✅ Define Cytoscape ref in index.tsx
  // Global state to check whether graph is highlighted, somewhere
  const [isGraphHighlighted, setGraphHighlight] = useState(false);
  const [activeButton, setActiveButton] = useState("");

  //Making the background white temporairly 
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <SampleGraph cyRef={cyRef} nodes={nodeObjList} edges={edgeObjList} />
      <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
        <MathJaxContext>
        <div className="grid grid-cols-[auto,auto] gap-x-1 space-y-4 pr-4">
        <p className="col-span-2">Computation Graph Equations:</p>

            {/* Equation 1: z1 */}
            
            <MathEquation equationName="z1" content={"\\(z_1 = w_{11}^{(1)} x_1 + w_{12}^{(1)} x_2 + b_1^{(1)}\\)"} className=''></MathEquation>
            <GraphStepButton
              label="Step 1"
              nodeIds={["x1", "x2", "b1_1", "w11_1", "w12_1", "z1"]}
              edgeIds={["x1-z1", "x2-z1", "b1_1-z1", "w11_1-z1", "w12_1-z1"]}
              highlightColour="#58cf35"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="z1"
              equationStyle="bg-[#58cf35] px-0.5 py-0.5 rounded-full inline-block"
              cyRef={cyRef}>
            </GraphStepButton>
            
            {/* Equation 2: z2 */}
            <MathEquation equationName="z2" content={"\\(z_2 = w_{21}^{(1)} x_1 + w_{22}^{(1)} x_2 + b_2^{(1)}\\)"} className=''></MathEquation>
            <GraphStepButton
              label="Step 2"
              nodeIds={["x1", "x2", "b2_1", "w21_1", "w22_1", "z2"]}
              edgeIds={["x1-z2", "x2-z2", "b2_1-z2", "w21_1-z2", "w22_1-z2"]}
              highlightColour="#ffdbbb"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="z2"
              equationStyle="bg-[#ffdbbb] px-0.5 py-0.5 rounded-full inline-block"
              cyRef={cyRef}>
            </GraphStepButton>

            {/* Equation 3: h1 */}
            <MathEquation equationName= "h1" content = {"\\(h_1 = \\sigma(z_1)\\)"}className=''></MathEquation>
            <GraphStepButton
              label="Step 3"
              nodeIds={["z1", "h1"]}
              edgeIds={["z1-h1"]}
              highlightColour="#89CFF0"
              isGraphHighlighted={isGraphHighlighted}
              setGraphHighlighted={setGraphHighlight}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
              equationName="h1"
              equationStyle="bg-[#89CFF0] px-0.5 py-0.5 rounded-full inline-block"
              cyRef={cyRef}>
            </GraphStepButton>

          </div>
        </MathJaxContext>
      </div>
    </div>
  );
}

{/* <MathEquation equationName = "z1" content = {"\\(z_1 = w_{11}^{(1)} x_1 + w_{12}^{(1)} x_2 + b_1^{(1)}\\)"} className=''></MathEquation>
            <MathEquation equationName= "z2" content = {"\\(z_2 = w_{21}^{(1)} x_1 + w_{22}^{(1)} x_2 + b_2^{(1)}\\)"}className=''></MathEquation>
            <MathEquation equationName= "h1" content = {"\\(h_1 = \\sigma(z_1)\\)"}className=''></MathEquation>
            <MathEquation equationName= "h2" content = {"\\(h_2 = \\sigma(z_2)\\)"}className=''></MathEquation>
            <MathEquation equationName= "y1" content = {"\\(y_1 = w_{11}^{(2)} h_1 + w_{12}^{(2)} h_2 + b_1^{(2)}\\)"}className=''></MathEquation>
            <MathEquation equationName= "y2" content = {"\\(y_2 = w_{21}^{(2)} h_1 + w_{22}^{(2)} h_2 + b_2^{(2)}\\)"}className=''></MathEquation>
            <MathEquation equationName= "y2" content = {"\\( \\mathcal{L} = \\frac{1}{2} \\left( (y_1 - t_1)^2 + (y_2 - t_2)^2 \\right) \\)"}className=''></MathEquation> */}