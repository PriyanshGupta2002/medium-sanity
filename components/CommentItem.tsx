import React from 'react'
import { comment } from '../types'

interface Iprops{
    comment:comment
}
const CommentItem = ({comment}:Iprops) => {
  return (
    <div className='text-yellow-500 my-2'>{comment.name}: <span className='text-black'>{comment.comment}</span></div>
  )
}

export default CommentItem