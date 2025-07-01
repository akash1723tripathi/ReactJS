import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componets/card'

// here we just learnt how we can pass props like obj and array
function App() {
  const [count, setCount] = useState(0)

  let myobj ={
    name : "bob",
    job: "theBuilder"
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-blue-500 p-4 rounded-xl mb-5'>Tailwind test </h1>
      <Card username="akash" bText="learning react props" />
      <Card username="avdesh" bText="learning react props" />
      <Card username="adarsh" />
      
    </>
  )
}

export default App
