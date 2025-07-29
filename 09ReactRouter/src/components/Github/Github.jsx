import React from 'react'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
      
      
      const data = useLoaderData()
      //basicly we are fetching data from github api
      // const [data, setData] = useState([]);     
      // useEffect(() => {
      //       // Fetching data from GitHub API
      //       fetch('https://api.github.com/users/akash1723tripathi')
      //       .then(response => response.json())
      //       .then(data => {
      //             console.log(data);
      //             setData(data);
      //       })
      //       .catch(error => console.error('Error fetching GitHub followers:', error));
      // }, []);

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Github Followers : {data.followers} 
    <img src="{data.avatar_url}" alt="Git Picture" width={300} /></div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/akash1723tripathi');
  if (!response.ok) {
    throw new Error('Failed to fetch GitHub data');
  }
  return response.json();
} 