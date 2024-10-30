import { useLoaderData } from 'react-router-dom'
import User from '../User/User'

const Users = () => {
    const users = useLoaderData()

    return (
        <div>
            <h2 className=' bg-emerald-400 '>THis is Users</h2>
            <h2 className=' bg-emerald-400 '> {users.length} </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 '>
                {
                    users.map((user) => <User key={user.id} user={user} ></User>)
                }

            </div>
        </div>
    )
}

export default Users
