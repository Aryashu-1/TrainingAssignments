import React from 'react'

const Cchild = (props) => {
    
   let cdata = props.value
  return ( <div className='items-center m-10 bg-gray-700 flex rounded-md' >
  <button className='bg-blue-700 rounded-full p-3 mx-10 my-10 text-white ' onClick={()=>props.func(1)}  ></button>
  <button className='bg-blue-700 rounded-full p-3 mx-10 text-white' onClick={()=>props.func(-1)} >decrement</button>
  </div>
  )
}

export default Cchild