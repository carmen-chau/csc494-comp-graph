import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

interface CanvasProps {
  width: number;
  height: number;
  children: React.ReactNode; // This allows passing children (like nodes) to the canvas
}

const Canvas: React.FC<CanvasProps> = ({ width, height, children }) => {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    // Set up the SVG canvas using D3
    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height)
      .style('background-color', 'white'); // Set background color to white
  }, [width, height]);

  return (
    <svg ref={svgRef}>
      {children}
    </svg>
  );
};

export default Canvas;
