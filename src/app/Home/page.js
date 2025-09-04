import Link from "next/link";
// import View from "../component/view"
import { Suspense } from "react";
import Image from "next/image";

export default function Home(){
    return (
        <div>
            {/* Hello World
            <Link href="Home/about"> About Page</Link>
            <Suspense fallback="loading Views...">
                <View/>
            </Suspense> */}

            {/* <img src="../favicon.ico"></img>. */}

            <Image src={"/favicon.ico"} height={300} width = {300} alt="favicon"
            quality={50}
            ></Image>
        </div>
        
    )
}