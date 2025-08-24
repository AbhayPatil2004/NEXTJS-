import Link from "next/link";
import View from "../component/view"
import { Suspense } from "react";

export default function Home(){
    return (
        <div>
            Hello World
            <Link href="Home/about"> About Page</Link>
            <Suspense fallback="loading Views...">
                <View/>
            </Suspense>
        </div>
        
    )
}