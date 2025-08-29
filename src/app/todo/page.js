
 
async function page() {
     
    const slowResponse = await fetch("https://procodrr.versel.app/?sleep=2000")
    console.log(slowResponse)
    const response =  await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5',
        {
            next : {
                revalidate : 5000 
            }
        }
    )
    const data = await response.json()
  return (
    <div>
      {
        data.map(({id, title,body} ) => (
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