import React from 'react'

const User = ({user}) => {
    const {id, name , phone , email} =user
  return (
    <div className='border-2 p-5 border-red-400 mt-5 overflow-hidden    '>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{phone}</h2>
    </div>
  )
}

export default User
