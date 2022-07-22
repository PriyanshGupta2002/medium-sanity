import React from 'react'
import { post } from '../../types'
import { client } from '../../sanity'
import { GetStaticProps } from 'next'
import CompletePost from '../../components/CompletePost'
import CommentSection from '../../components/CommentSection'
 interface Props{
  Post:post
 }
const PostDetail = ({Post}:Props) => {
  return (
    <>
    <CompletePost post={Post}/>
    <CommentSection post={Post}/>
    </>
  )
}
export async function getStaticPaths() {
  const query =`*[_type=='post']{
    _id,
    slug{
    current
  }
  }`
  const posts=await client.fetch(query)
  const paths = posts.map((post:post)=>{return {params:{slug:post.slug.current}}})
  return{
    paths:paths,
    fallback:'blocking'
  }
}
export const getStaticProps:GetStaticProps=async({params})=>{
  const query = `
  *[_type=='post' && slug.current==$slug][0]{
    _id,
    _createdAt,
   author->{
    name,
    image
  } ,
  'comments':*[
    _type=='comment' &&
    post._ref==^._id&&
    approved == true
  ],
  title,
  body,
  slug,
  description,
  mainImage
}
  `
  const Post = await client.fetch(query,{
    slug:params?.slug
  })
if (!Post) {
  return{
    notFound:true
  }
}
  return{
    props:{
      Post,
    },
    revalidate:60
  }
}

export default PostDetail