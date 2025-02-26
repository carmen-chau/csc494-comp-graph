# Installation instructions (please use a terminal for this) 
1. Download Node.js. This comes with the package <npm> which can help you download dependencies. You can see here to download a version of Node.js directly: https://nodejs.org/en. You could also consult https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. 
3. Once done, in the root directory of this repo, do either <npm install> or <yarn install> to download dependencies
4. To test if app runs, in the root directory, run <npm run dev>. Upon success, you should be able to see a graph displayed on http://localhost:3000 

# Code structure 

The structure of files in this projects mimics a class-based approach. Think of OOP from Java if you learned that. Basically I tried to make a class for each component of the graph.
The /components folder defines these graph components as seperate files 
The /pages folder define pages that are actually rendered. 
        /SampleGraph.tsx defines the main computation graph displayed. 
        /index is the home page where I call SampleGraph.tsx to display. I also render some MathJax expressions
        
The /public folder contains another folder called /initial_latex_icons. This folder contains raw latex text as pictures, I use these to insert into each node of the graph to render as a picture upload. This is a very brute-force approach since at this time right now I have yet to find a way to dynamially render this text, nor do I think it is a primary objective at this stage of this project. 

# Feedback 
1. Feedback on the class structure for common elements (Node, Graph, Edges) is welcomed. If there are any other attributes you think I should add or whether something could be improved upon in its structure let me know. (*)

2. I'm looking into finding ways to partially highlight the graph. Basically something looking like this:
![image](https://github.com/user-attachments/assets/d8f077e7-5573-4850-9782-c74a12691cd7)
What ideas (from a design POV or from a code implementation perspective) do you have for me with regards to tackling this. Any ideas are honestly welcomed. (*)

3. Do you have any feedback on how to improve the structure of the home page (eg: Headers, formatting) 
