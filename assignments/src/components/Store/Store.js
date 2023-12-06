import React from 'react'
import { useState } from 'react'
import { Context } from '../Context/Context';
function Store({children}) {
    let [context,setContext]=useState([]);
  return (
    <Context.Provider value={[context, setContext]}>
            {children}
    </Context.Provider>
  )
}

export default Store