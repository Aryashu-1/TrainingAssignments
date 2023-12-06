import React from 'react'
import { useContext } from 'react'
import { CompletedContext } from '../../Context/Completed'

function CompletedT() {
  let [completed,setCompletedContext] = useContext(CompletedContext)

  return (
    <div>
        <div className='bg-gray-400 '>
            <h1>COMPLETED TASKS</h1>
            {completed?.map((task,index)=>(
              <div>
              <h1 key={index}>{task}</h1>
              </div>
            ))
            }
        </div>
    </div>
  )
}

export default CompletedT