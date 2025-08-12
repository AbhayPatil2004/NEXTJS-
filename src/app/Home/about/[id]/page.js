

export default async function About({ params , searchParams}){

    const { id } = await params ;
    console.log(id)
    console.log( searchParams.name , searchParams.age );
    
    return(
        <div>
            Hello Params { searchParams.name} {searchParams.age }
        </div>
    )
}