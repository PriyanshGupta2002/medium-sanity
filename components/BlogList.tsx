import Link from 'next/link'
import React from 'react'
import { post } from '../types'
import BlogItem from './BlogItem'
interface Props{
    posts:post[]
  }
const BlogList = ({posts}:Props) => {
  return (
    <div className='flex flex-col gap-6 lg:gap-4 lg:px-2 lg:flex-wrap  max-w-5xl m-auto items-center justify-center md:justify-center lg:justify-start md:px-6 md:flex-row flex-wrap md:items-center'>

      {posts.map((post)=>{
        return (
      
        <BlogItem key={post._id} post={post}/>
        
        )
      })}
    
      </div>
  )
}

export default BlogList