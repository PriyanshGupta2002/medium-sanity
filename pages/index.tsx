import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import { post } from '../types'
import BlogList from '../components/BlogList'
import { getAllPosts } from '../utils/query'
interface Props{
  posts:post[]
}
const Home: NextPage<Props> = ({posts}) => {

  return (
    <div className="">
      <Head>
        <title>
          Medium Blog
        </title>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <HeroSection/>
      <div className='my-11'>
      <BlogList posts={posts}/>
      </div>
    </div>
  )
}
export const getServerSideProps=async()=>{
  const posts = await getAllPosts()
    return{
      props:{
        posts
      }
    }
}
export default Home
