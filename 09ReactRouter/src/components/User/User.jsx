import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
      const { userId } = useParams(); // Extract userId from the URL parameters
  return (
    <div className='bg-slate-600 text-white text-3xl text-center p-5'>User :{userId}</div>
  )
}

export default User