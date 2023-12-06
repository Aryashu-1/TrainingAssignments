import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Intro from '../Intro/Intro'
import Counter from '../Counter/Counter'
import Users from '../Books_Users/Users'
import Todolist from '../To-do-list/Todolist'
import { RouterProvider } from 'react-router-dom'
const Body = () => {
  return (
    <div>
        <Searchbar/>
        <Intro/>
        <Counter/>
        <Users/>
        <Todolist/>
    </div>
  )
}

export default Body