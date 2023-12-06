import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import { useState } from 'react'
import { CompletedContext } from '../../Context/Completed'

function Taskview() {
    let [context,setContext] = useContext(Context)
    let [completed,setCompletedContext] = useContext(CompletedContext)

    function editCompletedcontext(task1,index){
      setCompletedContext([...completed,task1])
      context?.splice(index,1)
    }
    function deleteTask(index){
      let tasks = [...context]
      tasks.splice(index,1)
      setContext(tasks)
      
    }
    
  return (
    <div>
        <div className=' '>
            <h1>TASKS LIST</h1>
            { 
                context?.map((task1,index)=>(
                 
                   <div className='flex justify-evenly items-center ' key={index}>
                    <h1 className='mx-auto'>{task1}</h1>
                    <button className='bg-white mx-auto' onClick={()=>{editCompletedcontext(task1,index)}}>DONE</button>
                    <button className='bg-white mx-4' onClick={()=>{deleteTask(index)}}>DELETE</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Taskview