# Installation instructions (please use a terminal for this) 
1. Download Node.js. This comes with the package `npm` which can help you download dependencies. You can consult this page for installation instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Node version 20+ is ideal for compatability (though Node 18, 19 might potentially work)

2. Once done, in the root directory of this repo, do either `npm install` or `yarn install` to download dependencies

3. To test if app runs, in the root directory, run `npm run dev`. Upon success, you should be able to see a graph displayed when you enter the path http://localhost:3000 on any broswer window. 

# Code structure 

The structure of files in this projects mimics a class-based approach.

The `/components` folder contains files that define core graph components (eg: Edges, nodes, buttons, equations)

The `/pages` folder define pages that are actually rendered on.

`/pages/SampleGraph.tsx` defines the main computation graph displayed. 

`pages/index` is the home page where I call SampleGraph.tsx to display. I also render some MathJax expressions
        
The `/public` folder contains static files that can be rendered. Right now, it contains another folder called `/initial_latex_icons`. This folder contains raw latex text as pictures, I use these to insert into each node of the graph to render as a picture upload. This is a very brute-force approach since at this time right now I have yet to find a way to dynamially render this text, nor do I think it is a primary objective at this stage of this project. 

# Resources used 

1. Latex to SVG: https://viereck.ch/latex-to-svg/
