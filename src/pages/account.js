import Button from "@/components/button"

function account(posts) {
  console.log(posts)

  return (
    <>
      {posts.posts.map(p => {
        return <div className="w-64 border-solid border-black border-2">
          <p>{p.title}</p>
          <p className="text-red-600">{p.completed} completed</p>
        </div>
      })}
    </>
  )
}

export async function getServerSideProps(context) {
  const posts = await fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
  return {
    props: {
      posts
    }, // will be passed to the page component as props
  }
}


export default account