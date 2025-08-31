"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useTheme } from "@/context/themeProvider";
import error from "./error";

export default function Home() {
  const name = "Abhay"

 
    if (name == "Abhay") {
      throw new Error("My error");
    }
  
    console.log(error)
  

  return (
    <div>
      Home Page {name}
    </div>
  );
}
