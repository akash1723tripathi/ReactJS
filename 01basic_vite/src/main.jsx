import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function myapp()  {
  return(
    <h1>trying to push function instead of</h1>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <myapp />
  </StrictMode>,
)
