"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useTheme } from "@/context/themeProvider";
import error from "./error";
import { useState } from "react";
import style from "../style.css"

export default function Home() {

  const name = "Abhay"
  const [ fruits , setFruits] = useState(['mango' , 'appple' , 'banana' , 'jamun' , 'jasmine'])

  return (
  <div>
    Home Page {name}
    <button
      
    >
      Click
    </button>
    <div>
      {fruits.map((fruit) => (
        <p key={fruit}>{fruit}</p>
      ))}
    </div>
  </div>
);

}
