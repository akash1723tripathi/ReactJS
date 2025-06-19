Learning React JS

**Lecture 1 -- CREATE A REACT PROJECT**

//creation through **create-react-app utility** 
1) To create react project we use    "npx create-react-app --name of project--"
      require a lot of time -- old method 
      create-react-app -- it is an bulky utility and gives a lot of extras things 

2) As just you created a react app, first step is to look for package.Json to understand 
      everything 

3) Further, now check that you are in yout project file in terminal --- \01basic_react>
      command -- dir -- check the project is showing the package.json file  
      command -- npm run start
      command -- npm run build --creates a deploy ready environment fro development 
                                 inside the static folder you can all the css js file that has been written in react converted. 
                                 one time generate hota hai..  

4) For constructing project via (vite)-- basic bundler used to create project
      **npm create vite@latest**

      --dependencies-- sirf do hoti--react/react-dom
      --devDependencies-- jayda hoti hai yeh devlopoment me use hoti hai but production me nhi 
                        jati

      --isme node modules nhi hote--
      direct run nhi hota hai, node modules add karne hote hai.
      npm install 

5) Now we start we trim and tweking the files.
   Most of the time sirf src folder me kaam karna hai-- sab uda di aur index aur app js left
   --yeh basic_react wala tha

6) Now moving to vite--ud diya sab and left     
   with app.jsx and main.jsx  


**Lecture 2 -- Folder Structure and Workflow** 

1) PackageLock.Json ek file hqi jisme hum stable version ke sab mention kar dete hai 
   manifest.json : tab use me ati hai jab hum hmri website ko mobile me open karte hai 
   robots.txt : for search engine 

   index.html : single file available in public subFolder -- SIngle Page Application
    
2) Html me directly koi script linked nhi hoti hai, vo source se ati hai and hum kuch bi naming de sakte h.
   moreover, react-script ka use karte hai hum to inject the script into the html file 

3) React creates a virtual DOM and then comapre it with real DOM. Thereby Facilitating the manipulation.

4) JAb components bante hai tab jsx rakhte hai name, yeh vite me dhyan dena padega..but in create react app
   me .js karke ek file bana sakta hu.

5) Component ka naam uppercase se start karna rehta hai, warna import ke time roo deta hai react.

   
**Lecture 3- Creating Your own react Library and JSX**

1) Custom react element kaise banta hai yeh dekha sari working 03Customreact folder me hai 


**Lecture 4 - Hooks**

1) Hooks ka use cheze update karna ya kisi UI me change lane ke liye karte hai -- changes propagation 
2) reference -- https://github.com/facebook/react/blob/main/packages/react/src/ReactHooks.js

