import React, { useState } from 'react'
import Cchild from '../Cchild/Cchild'
const Cparent = () => {
   let  [count,setCounter]=useState(0);
   function setCount(ccount){
    
    if(ccount==1){
        setCounter(count+1)
      }
      else if(ccount==-1){
        if(count!=0)
        setCounter(count-1)
      }
}
  return (
    <div className='bg-gray-800 rounded-2xl shadow-md shadow-black'>
        <div className= 'w-full '>
       
          <h3 className='text-white text-center mt-8 font-medium font-mono text-3xl'>COUNTER:{count}</h3>
        
       
       
      </div>
        <Cchild value= {count} func={setCount}/>
            </div>
  )
}

export default Cparent