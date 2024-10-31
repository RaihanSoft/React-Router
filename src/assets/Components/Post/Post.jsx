import { Link, useNavigate } from "react-router-dom"


const Post = ({ post }) => {
    const { id, title } = post

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(`/post/${id}`)


    }


    return (
        <div className="border-2  border-red-400 p-5 rounded-xl">
            <h1>{id}</h1>
            <h1>{title}</h1>
            <div className="flex flex-col">
                <Link to={`/post/${id}`} ><button className="p-3 border-2 bg-green-400 rounded-xl mt-4">Post Details</button></Link>
                <Link to={`/post/${id}`} ><button>Show Details</button></Link>

                <button onClick={handleDetails} >Click to see Details</button>
            </div>

        </div>
    )
}

export default Post
