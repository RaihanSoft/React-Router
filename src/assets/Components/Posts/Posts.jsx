import { useLoaderData } from "react-router-dom"
import Post from "../Post/Post"

const Posts = () => {
  const posts = useLoaderData()


  return (
    < div >
      <h1>post : {posts.length} </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {
          posts.map((post, index) => <Post key={index} post={post} />)
        }
      </div>

    </div >
  )
}

export default Posts
