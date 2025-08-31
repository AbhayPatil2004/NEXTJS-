"use client"

import React from 'react'

function error({error}) {
  return (
    <div>SomeThing went wrong
        <p>{error.message}</p>
    </div>
  )
}

export default error