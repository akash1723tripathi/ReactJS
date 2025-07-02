import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  // let counter = 5
  let [counter, setcounter] = useState(5)   // useState function ek array return karta hai jisme se first vo mera element hota hai jisme change hona hota hai, next hmra hota hai "set prop"--setCounter jo nayi value leta hai 

  //interview question
  // 10 baar likhne se fayda nhi hai, batch me jata hai sb --refrence fiber
  const addValue = () =>{
    if(counter<20){
      setcounter(()=>{}) // ese hi hidden function call deta hai react
      setcounter(prevcounter => prevcounter+1) //ese value update hogi
      setcounter(prevcounter => prevcounter+1) //ese value update hogi
      setcounter(counter+1) //ese update nhi hogi
      setcounter(counter+1)
    }else{
      console.log("Updation above 20 not allowed")
    }
  }

  const decValue = () => {
    if(counter>0){
      setcounter(counter-1)
    }else{
      console.log("Updation below 0 is Not Possible")
    }
  }

  return (
    <>
      <h1>React ho raha hai </h1>
      <h4>counter value : {counter}</h4>
 
      <button
      onClick={addValue}
      >Increase Value</button>
      <br />
      <br />
      <button
      onClick={decValue}
      >Decrease Button</button>
    </>
  )
}

export default App
