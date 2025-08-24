export default async function views(){

    await new Promise((resolve) => setTimeout(resolve,3000))
    return(
        <h1>
            10K Views
        </h1>
    )
}