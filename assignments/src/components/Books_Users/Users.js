import React from 'react'
import User from '../Book_User/User'
import { useState } from 'react'
import { useEffect } from 'react'
const Users = () => {
  let [users,setusers]=useState([])
  useEffect(()=>{
    fetch( 'https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(usersList=>setusers([...usersList]))
  }, [])
console.log(users)


  let [userCount,setUsercount]=useState(0);
  function setusercount(uscount){
    if(uscount==1){
      setUsercount(userCount+1)
    }
    else if(uscount==-1){
      if(userCount!=0)
      setUsercount(userCount-1)
    }
    
  }
  return (
    <div className='p-4'>
      <p className='text-2xl py-10'>Advertisemnet......Demo User Counter</p>
<div></div>
<div className=' text-center my-7'>
  <p className='text-3xl'>USER_COUNT : {userCount}</p>
</div>
<div className=' grid grid-rows-auto grid-cols-4 '>
{
  users.map((userinfo,index)=>(
    
    <User ucount={userCount} ufunc={setusercount} value={userinfo} key={index} />

  ))
}

</div>
    </div>
  )
}

export default Users