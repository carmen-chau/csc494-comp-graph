# Forward and Backward pass visualization (for neural networks) 

## About 
This project is an interactive web visualization designed to help users understand how computation graphs can be used to model a neural network and visualize the process of both forward + backward pass. 

### Target audience
This visualization is aimed towards users who are just starting to learn about neural networks and the process of forward + backward pass. 
For Univesity of Toronto students taking CSC311 (Introduction to Machine Learning), this visualization is be complementary to the material taught in Lecture 6 (Neural Networks). 

### Pre-requisite knowledge 
This visualization assumes that students have a basic understanding of what components make up a neural network at a high level and how this translates into a computation graph. 
Furthermore, students should be comfortable with conducting and understanding calculations for both the univariate and multivariate chain rules.
It is recommended that students have some basic prior understanding of what forward pass and backpropagation are, but it is not required. 

### Learning objectives
*Forward Pass:*
1. Students should understand how to construct a computation graph when given the forward pass equations (from a visual and mathematical perspective).
2. They should also be able to explain the process of the forward pass by walking through each equation and illustrating how each comptued term depends on prior values based on direct dependencies. 

*Backward Pass:*
1. Students should understand what error signals are and how they are computed per node in the backward pass.
2. Students should also be able to explain and justify cases where a node doesn't have an error signal. They should also understand the differences (visually and mathematically) between applying the univariate vs the multivariate chain rule when deriving error signals. 

### Installation instructions 
1. Download Node.js. This comes with the package `npm` which can help you download dependencies. You can consult [this page](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm.) for installation instructions. Node version 20+ is ideal for compatibility.
         - Note: If you already have a different version of Node.js installed, you may need to install NVM (a node version manager) 

2. Once done, using your terminal, in the root directory of this repo, do either `npm install` or `yarn install` to download dependencies

3. To test if app runs, in the root directory, run `npm run dev`. Upon success, you should be able to see a graph displayed when you enter the path http://localhost:3000 on any browser window.

## Visualization walkthrough 

### Reference material 
The computation graph example used in this visualization was taken from the CSC311 Summer 2024 slide. You can find a picture of it here:

<img width="552" alt="Screenshot 2025-04-03 at 1 07 41 AM" src="https://github.com/user-attachments/assets/fa01649c-abb6-45fd-a7c0-976ce9db3f7c" />

### Visualization components 
The webpage has 2 computation graph instances (1 each for forward pass and backward pass).
Both graphs are bundled with several info cards:

- **Example Setup:** Defining the specific mathematical notation or terminology used to demonstrate forward and backward pass for this specific example.
- **Diagram Components:** Defining how each graph component (eg: nodes, edges) is used to represent the specific example
- **How to use Diagram:** Instructions on how to interact with the visual

Here is an example of what these info cards look like (picture taken for the *Forward Pass* section): 

<img width="1458" alt="Screenshot 2025-04-18 at 12 54 15 AM" src="https://github.com/user-attachments/assets/afd66b7c-4b68-4263-a7f5-44b3bbc0877b" />

*Forward Pass:*

Students can click on any of the ```Select``` buttons beside the equation to see how the computation graph is highlighted and annotated. 

For forward pass, when any ```Select``` button is pressed, the nodes and edges that make up that specific equation would be highlighted. 

<img width="1473" alt="Screenshot 2025-04-18 at 12 39 20 AM" src="https://github.com/user-attachments/assets/1a757863-9c90-446b-9c00-0d185039681e" />

*Backward Pass:*

Students can click on any node in the rendered graph to see the corresponding error signal equations (denoted with a highlight), the intermediate gradient calculations, as well as additional explanation info cards explaining the calculation process. 

Here's an example of what the visualization would look like should the user press the node h1:

<img width="1473" alt="Screenshot 2025-04-18 at 1 05 14 AM" src="https://github.com/user-attachments/assets/a366f853-1e2d-4e19-85e2-55d866861acd" />

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

The `/components` folder contains files that define core graph and info card components.

The `/data` folder contains Typescript files containing the data for the hardcoded computation graph instances. There are 2 files, 1 for forward pass and 1 for backward pass. 

The `/pages` folder define pages that are actually being rendered on the webpage. Specifically, `pages/index` is the home page that is displayed. It includes the computation graph instance as well as the equations. All other files are boilerplate for now.
        
The `/public` folder contains static files that can be rendered. The only relevant section in this folder is the folder called `/initial_latex_icons`. This folder contains raw latex text as pictures, I use these to insert into each node of the graph to render as a picture upload. This is a very brute-force approach since at this time I have yet to find a way to dynamially render this text. 

The `/style` folder contains 2 files: `/style/GraphDefaultStyle.ts` and `/style/GraphCustomStyle.ts`, each containing objects with styling attributes for a default graph and extensions for a highlighted graph, respectively. 

The `/utils` folder contains files that include helper functions for retrieving or manipulating data from a graph instance 

Please consult the code comments made in each file should you need more fine level details about implementation.

## Design decision
> Why did you pick this specific computation graph example?

I picked this specific example from lecture (rather than making my own) because utilizing a familar example from lecture for visualization would mean students can spend less overhead time familiarizing themselves with the graph and equation setup. This hopefully allows students to spend more time understanding how forward pass and backpropagation are visualizations, which is the main goal of this project. 

> Why did you write out each bias and weight term seperately instead of writing them in the vectorized form

Although writing the bias and weight terms in vectorized form could have made the equations more compact, I wanted to make the visualization of computation structure more explicit. Specifically, since this visualization is suppose to be complementary to Lecture 6, most students would be still trying to get familar with how computation graphs are structured. 

So, I believe having students being able to see how each individual bias and weight terms are being used in forward pass would help them piece together how each individual term contributes to the neural network prediction (the output). 

Similarly, by illustrating how these individual terms are being used to calculate loss gradients, the visualization can help students understand how derivatives and chain rule apply to individual terms during backpropagation. This can help them realize that at the end of backpropagation, we would need to update each individual weight and bias terms seperately. 

> For the backpropagation graph, why did you include the backpropagation arrow?

The backpropgation arrow was included in hopes to help students differentate between the forward pass phase (solid arrows) vs backpropagation phase (dotted arrows). Also, these backpropagation arrows are a physical visualization of the error signals (loss gradients), which is essentially the amount of loss relative to the term we are looking at, that is flowing backwards in the graph. 

## Next Steps 
There are 2 main areas worth exploring when trying to extend and build on top of this existing visualization 

**Area 1: How to better convey concepts?**

1. Consider extending this visualization to illustrate the iterative nature of backpropagation (which involves iteratively conducting BOTH forward and backward pass, and carefully updating
the model weights + bias terms to minimize model loss).

2. Creating tooltips to allow users to hover over equation terms and see definitions. This change will likely yield a much better learning / user experience, since users won't need to constantly scroll up to the "Example Setup" info card

**Area 2: How to make the visualization more user-friendly?**

1. Making visualization scale and display well on smaller resolutions. Currently, the computation graph does not resize when the webpage window shrinks. Ideally, the graph should resize so users on smaller screens (eg: phone, tablet) can see the graph. 

2. Dynamically rendering node labels, instead of resorting to static images. Finding out a way to dynamically render node labels instead of relying on static images in `/initial_latex_icons` would lead to less overhead should this project be deployed. 

## Resources used
1. [Cytoscape.js documentation](https://js.cytoscape.org/)
   - Documentation for the library used the create and render the computation graph. Specifically, sections **"Notation - Position"** and **"Notation - Elements JSON"** were super critical to read over in the initial project stages. Methods in section **Core** were also useful, especially for implementing style augmentations on the graph based on user input 
2. [Latex to SVG generator](https://viereck.ch/latex-to-svg/)
   - This is the website used to generate the static node labels found in folder `/initial_latex_icons`
3. [Colour picker](https://htmlcolorcodes.com/color-picker/)
   - This is the website used to pick custom colour codes for highlighting.
5. [README.md template](https://www.makeareadme.com/)
   -  This is the template used for this Readme.md file       
