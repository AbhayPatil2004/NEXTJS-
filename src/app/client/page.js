"use client"
import { useState } from "react"

export default function clientPage(){

    const [ count , setCount ] = useState(0) ;
    console.log(count)
    return(
        <div>
            <h1>Client Component</h1>
        console.log("My name is Abhya")
        { console.log("Abhya")}
        <button
            onClick={() => {setCount( (prev) => {prev+1})}}
        >
            count :- {count}
        </button>
        </div>
    )
}