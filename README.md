# Neural Network Visualization (Forward pass and Backpropagation)

## About 
This project is an interactive web visualization designed to help users understand how computation graphs can be used to model a neural network and visualize the computation of outputs and gradients.

### Target audience and pre-requisite knowledge
This project is aimed to be used by prospective CSC311 students. It assumes that students have a basic understanding of what components make up a neural network at a high level and how this translates into a computation graph. Furthermore, students should be comfortable with calculations relating to derivatives and the multivariate chain rule (from 2nd-year calculus). 

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

## Resources used
1. [Cytoscape.js documentation](https://js.cytoscape.org/)
2. [Latex to SVG generator](https://viereck.ch/latex-to-svg/)
3. [Colour picker](https://htmlcolorcodes.com/color-picker/)
4. [README.md template](https://www.makeareadme.com/)
