# Installation instructions
1. Download Node.js. This comes with the package `npm` which can help you download dependencies. You can consult this page for installation instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Node version 20+ is ideal for compatability (though Node 18, 19 might potentially work)

2. Once done, using your terminal, in the root directory of this repo, do either `npm install` or `yarn install` to download dependencies

4. To test if app runs, in the root directory, run `npm run dev`. Upon success, you should be able to see a graph displayed when you enter the path http://localhost:3000 on any browser window. 

# Code structure 

The structure of files in this projects mimics a class-based approach.

The `/components` folder contains files that define core graph components. Currently it contains files for a generalized graph, edge, node, graph highlight button and equation

The `/data` folder contains node and edge instances for specific computational graph examples

The `/pages` folder define pages that are actually rendered on. Specifically, `pages/index` is the home page that is displayed. It includes the computation graph instance as well as the equations. All other files are boilerplate for now
        
The `/public` folder contains static files that can be rendered. Right now, it contains another folder called `/initial_latex_icons`. This folder contains raw latex text as pictures, I use these to insert into each node of the graph to render as a picture upload. This is a very brute-force approach since at this time right now I have yet to find a way to dynamially render this text, nor do I think it is a primary objective at this stage of this project. 

The `/style` folder contains 2 files: `/style/GraphDefaultStyle.ts` and `/style/GraphCustomStyle.ts`, each containing objects with styling attributes for a default graph and extensions for a highlighted graph, respectively. 

The `/utils` folder contains files that include helper functions for retrieving or manipulating data from a graph instance 

# Resources used 

1. https://js.cytoscape.org/
2. Latex to SVG: https://viereck.ch/latex-to-svg/
3. Colour picker: https://htmlcolorcodes.com/color-picker/
