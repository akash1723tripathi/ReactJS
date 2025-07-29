import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from "./Layout.jsx"
import Home from "./components/Navigation/Home.jsx"
import About from "./components/Navigation/About.jsx"
import Contact from "./components/Navigation/Contact.jsx"
import User from "./components/User/user.jsx"
import Github,{githubLoader} from './components/Github/Github.jsx'

//to create routes we use createBrowserRouter from react-router-dom

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "Contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      
      <Route path='user/:userId' element={<User />} />
      <Route 
      // loader ={()=>{}} via call back
      loader={githubLoader} //via method call 
      path='Github'
      element={<Github />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = { router } />
  </StrictMode>,
)
