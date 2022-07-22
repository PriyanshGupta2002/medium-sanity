import React from 'react'
import { post } from '../types'
import CommentItem from './CommentItem'

interface IProps{
post:post
}

const CommentSection = ({post}:IProps) => {
  return (
    <div className=''>
        <div className='wrapper max-w-2xl m-auto shadow-yellow-200 shadow p-7 mb-7'>

        <h1 className='text-4xl font-semibold border-b-2 border-gray-300 py-2'>Comments</h1>
    {post.comments.length==0?'No Comments':post.comments.map((comment)=>{return <CommentItem comment={comment} key={comment._id}/>})}
        </div>
    </div>
  )
}

export default CommentSection