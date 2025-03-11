/*
    Custom Math Equation styling component. Basically takes MathJax components + adds additional styling
*/

// Import statements 
import { MathJax} from 'better-react-mathjax';

interface MathEquationProp{
    equationName: string; // String label to represent the equation (think of it as a "string id")
    content: string; // Actual content to wrap inside MathJax components
    className?: string; // TailwindCSS class name for styling purposes
}

const MathEquation = ({equationName, content, className}:  MathEquationProp) => {
    return (
        <div className = {className} data-equation={equationName}>
            <MathJax>{content}</MathJax>
        </div>
    )
}

export default MathEquation