// pages/index.tsx
import SampleGraph from './SampleGraph';
import { MathJax, MathJaxContext } from 'better-react-mathjax';

export default function Home() {
  //Making the background white temporairly 
  return (
    <div className="min-h-screen flex justify-center items-center bg-white">
      <SampleGraph />
      <div className="w-full text-center mt-8 text-2xl" style={{ color: "black" }}>
        <MathJaxContext>
          <div className="space-y-4">
            <p>Computation Graph Equations:</p>
            <MathJax>{"\\(z_1 = w_{11}^{(1)} x_1 + w_{12}^{(1)} x_2 + b_1^{(1)}\\)"}</MathJax>
            <MathJax>{"\\(z_2 = w_{21}^{(1)} x_1 + w_{22}^{(1)} x_2 + b_2^{(1)}\\)"}</MathJax>
            <MathJax>{"\\(h_1 = \\sigma(z_1)\\)"}</MathJax>
            <MathJax>{"\\(h_2 = \\sigma(z_2)\\)"}</MathJax>
            <MathJax>{"\\(y_1 = w_{11}^{(2)} h_1 + w_{12}^{(2)} h_2 + b_1^{(2)}\\)"}</MathJax>
            <MathJax>{"\\(y_2 = w_{21}^{(2)} h_1 + w_{22}^{(2)} h_2 + b_2^{(2)}\\)"}</MathJax>
            <MathJax>{"\\( \\mathcal{L} = \\frac{1}{2} \\left( (y_1 - t_1)^2 + (y_2 - t_2)^2 \\right) \\)"}</MathJax>
          </div>

        </MathJaxContext>
      </div>
    </div>
  );
}