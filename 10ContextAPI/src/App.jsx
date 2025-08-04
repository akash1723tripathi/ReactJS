import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './componets/Login'
import Profile from './componets/Profile'

function App() {
  

  return (
    <UserContextProvider>
           <h1>React Context API</h1>
           <Login/>
           <Profile/>

    </UserContextProvider>
  )
}

export default App
