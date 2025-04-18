# Neural Network Visualization (Forward pass and Backward pass)

## About 
This project is an interactive web visualization designed to help users understand how computation graphs can be used to model a neural network and visualize the process of both forward + backward pass. 

### Target audience
This visualization is aimed towards users who are just starting to learn about neural networks and the process of forward + backward pass. 
For Univesity of Toronto students taking CSC311 (Introduction to Machine Learning), this visualization is be complementary to the material taught in Lecture 6 (Neural Networks). 

### Pre-requisite knowledge 
This visualization assumes that students have a basic understanding of what components make up a neural network at a high level and how this translates into a computation graph. 
Furthermore, students should be comfortable with conducting and understanding calculations pertianing to both univariate and multivariate differentiation. 
It is recommended that students have some basic prior understanding of what forward pass and backpropagation are, but it is not required. 

### Learning objectives
1. Students should understand what the components of a computation graph are. They should be able to explain the process of constructing a graph from input to output (visually and mathematically).
2. Students should understand what the multivariate chain rule is. They should be able to understand and visualize how this rule is applied to a computational graph to get the loss gradients in a step-by-step manner. 

### Installation instructions 
1. Download Node.js. This comes with the package `npm` which can help you download dependencies. You can consult [this page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.) for installation instructions. Node version 20+ is ideal for compatibility.
         - Note: If you already have a different version of Node.js installed, you may need to install NVM (a node version manager) 

2. Once done, using your terminal, in the root directory of this repo, do either `npm install` or `yarn install` to download dependencies

3. To test if app runs, in the root directory, run `npm run dev`. Upon success, you should be able to see a graph displayed when you enter the path http://localhost:3000 on any browser window.

## Visualization walkthrough 
Note: Pictures and descriptions are subject to change as the repository is still a work in progress. 

### Reference material 
The webpage uses a computation graph instances taken from the CSC311 Week 6 slides. Here is a blank slide for reference (CSC311 Summer 2024):

<img width="552" alt="Screenshot 2025-04-03 at 1 07 41 AM" src="https://github.com/user-attachments/assets/fa01649c-abb6-45fd-a7c0-976ce9db3f7c" />

### Visualization components 
The webpage has 2 main computation graph instances (1 each for forward pass and backpropagation respectively). For each, the computation graph is located on the left, and the corresponding mathematical equations are on the right. 

Students can click on any of the ```Select``` buttons beside the equation to see how the computation graph is highlighted and annotated. 

For forward pass, when any ```Select``` button is pressed, the nodes and edges that make up that specific equation would be highlighted. 

<img width="1508" alt="Screenshot 2025-04-03 at 1 15 53 AM" src="https://github.com/user-attachments/assets/28645950-d247-4f5b-b586-90881cd0f60b" />

For backpropagation, in addition to the highlighting done in the forward pass process, there would be additional backward arrows denoting the direction of the loss gradients 

<img width="1511" alt="Screenshot 2025-04-03 at 1 24 30 AM" src="https://github.com/user-attachments/assets/e3bce8e2-0a59-4f83-9e8e-8eea5cd1db51" />

### Usage notes and limitations

- Although the computation graph instance for both forward pass and backpropagation look the same, behind the hood, they are treated as different objects. 
- Currently, for a particular computation graph instance, you can only have at most 1 ```Select``` button toggled at a time. Button toggling in the forward pass graph should not affect the backpropagation graph

## Technical specifications 

### Tech stack
- **Primary frontend frameworks:** React, TypeScript. 
- **Computation graph creation:** Cytoscape.js, react-cytoscapejs wrapper (wrapper was used to allow React.js components to integrate smoothly with computation graph instances) 
- **Math equations rendering:** better-react-mathjax (Mathjax library but modified to be more modular according to React rules)
- **Styling:** TailwindCSS

### Code structure

The `/components` folder contains files that define core graph components. Currently it contains files for a generalized graph, edge, node, graph highlight button and equation

The `/data` folder contains Typescript files containing the data for the hardcoded computation graph instances. There are 2 files, 1 for forward pass and 1 for backpropagation.

The `/pages` folder define pages that are actually rendered on. Specifically, `pages/index` is the home page that is displayed. It includes the computation graph instance as well as the equations. All other files are boilerplate for now
        
The `/public` folder contains static files that can be rendered. Right now, it contains another folder called `/initial_latex_icons`. This folder contains raw latex text as pictures, I use these to insert into each node of the graph to render as a picture upload. This is a very brute-force approach since at this time right now I have yet to find a way to dynamially render this text, nor do I think it is a primary objective at this stage of this project. 

The `/style` folder contains 2 files: `/style/GraphDefaultStyle.ts` and `/style/GraphCustomStyle.ts`, each containing objects with styling attributes for a default graph and extensions for a highlighted graph, respectively. 

The `/utils` folder contains files that include helper functions for retrieving or manipulating data from a graph instance 

### Miscellaneous
- Please consult the code comments made in each file should you need more fine level details about implementation.

## Design decision
> Why did you pick this specific computation graph example?

I picked this specific example from lecture (rather than making my own) because utilizing a familar example from lecture for visualization would mean students can spend less overhead time familiarizing themselves with the graph and equation setup. This hopefully allows students to spend more time understanding how forward pass and backpropagation are visualizations, which is the main goal of this project. 

> Why did you write out each bias and weight term seperately instead of writing them in the vectorized form

Although writing the bias and weight terms in vectorized form could have made the equations more compact, I wanted to make the visualization of computation structure more explicit. Specifically, since this visualization is suppose to be complementary to Lecture 6, most students would be still trying to get familar with how computation graphs are structured. 

So, I believe having students being able to see how each individual bias and weight terms are being used in forward pass would help them piece together how each individual term contributes to the neural network prediction (the output). 

Similarly, by illustrating how these individual terms are being used to calculate loss gradients, the visualization can help students understand how derivatives and chain rule apply to individual terms during backpropagation. This can help them realize that at the end of backpropagation, we would need to update each individual weight and bias terms seperately. 

> For the backpropagation graph, why did you include the backpropagation arrow?

The backpropgation arrow was included in hopes to help students differentate between the forward pass phase (solid arrows) vs backpropagation phase (dotted arrows). Also, these backpropagation arrows are a physical visualization of the error signals (loss gradients), which is essentially the amount of loss relative to the term we are looking at, that is flowing backwards in the graph. 

## Resources used
1. [Cytoscape.js documentation](https://js.cytoscape.org/)
2. [Latex to SVG generator](https://viereck.ch/latex-to-svg/)
3. [Colour picker](https://htmlcolorcodes.com/color-picker/)
4. [README.md template](https://www.makeareadme.com/)
