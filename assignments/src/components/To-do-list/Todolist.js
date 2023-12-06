import React from 'react'
import { NavLink } from 'react-router-dom'

const Todolist = () => {
  return (
    <div className='bg-gray-800 text-center'>
        <h1 className='text-2xl text-white m-3 p-4'>To try our latest To-do-list Manager Click the "Try Now" Button</h1>
      <NavLink to={'todolist'}> <button className='p-3 bg-blue-700 rounded-full m-4 hover:bg-white underline hover:text-blue-700'>Try Now</button> </NavLink> 
    </div>
  )
}

export default Todolist