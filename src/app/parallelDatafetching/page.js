export default async function ParallelDataFetching() {
  // Run both fetch requests in parallel
  const [data1, data2] = await Promise.all([
    fetch("https://procodrr.vercel.app/?sleep=2000"),  // small typo: "versel" → "vercel"
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5"),
  ]);

  // Convert to JSON in parallel
  const [d1, d2] = await Promise.all([data1.json(), data2.json()]);

  return (
    <div>
      <h2>Parallel Data Fetching</h2>

      <h3>First API:</h3>
      <pre>{JSON.stringify(d1, null, 2)}</pre>

      <h3>Second API:</h3>
      <ul>
        {d2.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
