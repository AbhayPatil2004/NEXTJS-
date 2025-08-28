
"use client";

import React, { useEffect, useState } from 'react'

function page() {

  const [post , setPost] = useState([])

  useEffect(() => {
    async function fetchPost(){
      const response =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      const data = await response.json()
      setPost(data)
    } 
    fetchPost()
  },[])

  return (
    <div>
      {
        post.map(({id, title,body} ) => (
          <div>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))
      }
    </div>
    
  )
}

export default page