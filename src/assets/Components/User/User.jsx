import React from 'react'
import { Link } from 'react-router-dom'

const User = ({ user }) => {
    const { id, name, phone, email } = user
    return (
        <div className='border-2 p-5 border-red-400 mt-5 overflow-hidden    '>
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <Link to={`/user/${id}`}> <button className=' rounded-lg px-3 py-2 mt-2 bg-teal-400'>Show Details</button> </Link>
        </div>
    )
}

export default User
