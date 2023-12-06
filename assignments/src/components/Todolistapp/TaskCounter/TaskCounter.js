import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
function TaskCounter() {
    let [context,setContext]=useContext(Context)
    
  return (
    <div className='bg-gray-800 text-center rounded-lg my-20 mx-auto'>
        <h1 className='my-2 p-4 text-2xl w-96 text-white '>TASKS COUNT : {context?.length }</h1>
    </div>
  )
}

export default TaskCounter