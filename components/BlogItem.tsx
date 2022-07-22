import React from 'react'
import { post } from '../types'
import Image from 'next/image'
import Link from 'next/link'
import {urlFor} from '../sanity'
interface IProps{
    post:post
}
const BlogItem = ({post}:IProps) => {
    const mainimgUrl = urlFor(post.mainImage)
    const authorImgUrl=urlFor(post.author.image)
  return (
    <div className='flex flex-col justify-center items-center cursor-pointer sm:w-auto w-[80%]  border-2 border-gray-200 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out'  >
        <Link href={`/posts/${post.slug.current}`}>
       
        <div className="image sm:w-96 w-[100%] md:w-80  overflow-hidden">
            <Image src={`${mainimgUrl}`} width={200} height={150} layout="responsive" className='rounded-xl overflow-hidden'/>
        </div>
        
        </Link>
        <Link href={`/posts/${post.slug.current}`}>
        <div className='flex  items-center md:gap-4 gap-10  px-1 my-4'>
                <div>
                    <h1 className='font-bold text-black'>{post.title}</h1>
                    <p className='text-xs flex items-center'>{post.description} by <span>{post.author.name}</span> </p>
                </div>

                <div>
                    <img src={`${authorImgUrl}`} className="rounded-full w-12 h-12" alt="" />
                </div>
        </div>
        </Link>
      
       
    </div>
  )
}

export default BlogItem