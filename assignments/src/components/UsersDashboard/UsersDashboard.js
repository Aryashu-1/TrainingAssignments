import React from 'react'
import {useLocation} from 'react-router-dom'

function UsersDashboard() {
    let data =useLocation()
    console.log(data)
  return (
    <div>UsersDashboard</div>
  )
}

export default UsersDashboard