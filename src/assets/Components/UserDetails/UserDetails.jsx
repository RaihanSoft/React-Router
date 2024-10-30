import { useLoaderData } from "react-router-dom"

const UserDetails = () => {

    const user = useLoaderData()
    const {name, website} = user
    return (
        <div>
            <h1 className="bg-red-300">This is User : {name} </h1>
            <h1 className="bg-red-300">This is User : {website} </h1>
        </div>
    )
}

export default UserDetails
