import React from 'react'
import Searchbar from '../Searchbar/Searchbar'
import Intro from '../Intro/Intro'
import Counter from '../Counter/Counter'
import Users from '../Books_Users/Users'

const Body = () => {
  return (
    <div>
        <Searchbar/>
        <Intro/>
        <Counter/>
        <Users/>
    </div>
  )
}

export default Body