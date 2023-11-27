import React from 'react'

const User = (props) => {
    let usersc=props.ucount
    console.log(props)
    return (
<div>
<div className="max-w-sm rounded overflow-hidden shadow-lg m-10">
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{props.value.name}</div>
            <p className="text-gray-700 text-base">{props.value.username}</p>
            <p className="text-gray-700 text-base">{props.value.email}</p>
            <div >
            <button className='bg-gray-800 text-white items-center rounded-full px-2 py-2 mx-10 my-2 w-20' onClick={()=>props.ufunc(1)}> ADD </button>
            <button className='bg-gray-800 text-white items-center rounded-full px-2 py-2 mx-10 my-2 w-20' onClick={()=>props.ufunc(-1)}> REMOVE </button>

            </div>
            
          </div>
        </div>
</div>

      );
}

export default User