import React from 'react'
import StrSection from './StrSection'
import Top from './Top'
// import RegistrationForm from './RegistrationForm'
import PostForm from './PostForm'
import PostList from './PostList'

const Creater = () => {
  return (
    <div className=' h-full m-0 p-0'>
      <Top/>
      <br/>
      
      <PostForm/>
      <PostList/>

    </div>
  )
}

export default Creater
