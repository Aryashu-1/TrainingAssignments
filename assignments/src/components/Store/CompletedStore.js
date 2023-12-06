import React from 'react'
import { useState } from 'react'
import { CompletedContext } from '../Context/Completed';
function CompletedStore({children}) {
    let [completed,setContext]=useState([]);
  return (
    <CompletedContext.Provider value={[completed, setContext]}>
            {children}
    </CompletedContext.Provider>
  )
}

export default CompletedStore