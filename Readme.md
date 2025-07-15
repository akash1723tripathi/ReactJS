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
      command -- npm run build --creates a deploy ready environment for development 
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


**Lecture 5 - Virtual DOM, Fibre & Reconciliation**

1) createROOT - this command create a new virtual DOM thatr react comapres with the real DOM and apply 
   changes only to the points where UI element is changed..  page reload vs element reload  

2) react pahle instantenous changes karti thi but now react has presented new algo to handles instantenous
   call---fibre

3) The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. 
   Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

4) Other key features include the ability to pause, abort, or reuse work as new updates come in; the 
   ability to assign priority to different types of updates; and new concurrency primitives.

5) Hyration :-  refers to the process of attaching client-side JavaScript to HTML that was initially 
                rendered on the server. This process transforms a static, server-rendered page into a fully interactive React application on the client.

               **How Hydration Works:**
               5.1.1) Server-Side Rendering (SSR): The React application is rendered on the server, generating static HTML content. This HTML is then sent to the client's browser.

               5.1.2) Client-Side Hydration: When the browser receives the HTML, React's client-side bundle is loaded and executed. The hydrateRoot() function (or ReactDOM.hydrate() in older React versions) is used to "hydrate" the static HTML.

               5.1.3) Attaching Interactivity: During hydration, React traverses the existing DOM nodes and attempts to attach event listeners, manage state, and establish the full React component tree, essentially making the page interactive. It reuses the existing DOM nodes where possible, avoiding unnecessary re-rendering.

               5.1.4) Reconciliation:React compares the server-rendered HTML with its virtual DOM representation. If there are any mismatches, it will update the necessary parts of the DOM to ensure consistency.

               **Benefits of Hydration**
               5.2.1) Improved User Experience: Users see content quickly because the initial HTML is served directly, leading to faster perceived load times. Interactivity is then added progressively.
               5.2.2) SEO Benefits: Search engine crawlers can easily index the pre-rendered HTML content, improving search engine optimization.
               5.2.3) Performance Optimization:By reusing existing DOM nodes, hydration can be more efficient than a full client-side render, especially for large applications.
               5.2.4) Hydration Mismatches: It is crucial that the server-rendered HTML precisely matches what React expects to render on the client. Any discrepancies, such as different content or attributes, can lead to "hydration errors" or warnings, indicating a mismatch that React needs to reconcile. These mismatches can impact performance and potentially lead to unexpected behavior.


6) reconciliation : when you render a React application, a tree of nodes that describes the app is 
                    generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

7) Fiber is a ground-up rewrite of the reconciler
   7.1) Diffing of lists is performed using keys. Keys should be "stable, predictable, and unique.
   7.2) Different component types are assumed to generate substantially different trees. React will not     
        attempt to diff them, but rather replace the old tree completely.

Must read the the document:-
https://github.com/acdlite/react-fiber-architecture


**Lecture 6 : Tailwind and Props**

1) Tailwiind ki website pe link karne ka process hai 
2) Component me naming convention ka bahut dhyan rakhna hai-- 


**Lecture 7: Creating a Password Generator Using React**
1) UseCallBack : method ko memorize karta hai, previous state kok reuse karne ke liye 
2) UseEffect : jab bipage ya depoencies array me elements me kisi me change ata hai toh re run karega to 
               update the states
3) UseRef : Reference create karne ke liye use karte hai, passkarte hai reference to update it 