import { useLoaderData, useNavigate } from "react-router-dom"


const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body}= post
    const navigate = useNavigate()

    const handleGoBack=()=>{
        navigate(-1)



    }



  return (
    <div>

        <h3>Post details About </h3>
        <p>{id}</p>
        <p>{body}</p>
        <p>{title}</p>
        <button onClick={handleGoBack} >GO Back</button>
      
    </div>
  )
}

export default PostDetails
