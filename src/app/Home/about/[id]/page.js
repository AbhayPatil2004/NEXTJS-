import { notFound } from "next/navigation";


export default async function About({ params , searchParams}){

    const { id } = await params ;
    console.log(id)
    console.log( searchParams.name , searchParams.age );
    
    if( !Number(id) ){
        notFound();
    }
    return(
        <div>
            Hello Params { id}
        </div>
    )
}