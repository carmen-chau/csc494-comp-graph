# Neural Network Visualization (Forward pass and Backpropagation)

## About 
This project is an interactive web visualization designed to help users understand how computation graphs can be used to model a neural network and visualize the computation of outputs and gradients.

## Target audience and pre-requisite knowledge
This project is aimed to be used by prospective CSC311 students. It assumes that students have a basic understanding of what components make up a neural network at a high level and how this translates into a computation graph. Furthermore, students should be comfortable with calculations relating to derivatives and the multivariate chain rule (from 2nd-year calculus). 

It is recommended that students have some prior understanding of what forward pass and backpropagation do, but it is not required. 

## Learning objectives


## Installation instructions 
1. Download Node.js. This comes with the package `npm` which can help you download dependencies. You can consult [this page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.) for installation instructions. Node version 20+ is ideal for compatibility.
         - Note: If you already have a different version of Node.js installed, you may need to install NVM (a node version manager) 

2. Once done, using your terminal, in the root directory of this repo, do either `npm install` or `yarn install` to download dependencies

3. To test if app runs, in the root directory, run `npm run dev`. Upon success, you should be able to see a graph displayed when you enter the path http://localhost:3000 on any browser window. 





 Using this tool, users can explore how:

- Forward pass, a process where the computation graph is evaluated systematically, calculates the neural network predictions
- Backpropagation, a process where loss gradients are propagated backward through the computation graph, calculates how weights and biases should be adjusted to reduce model error. 
