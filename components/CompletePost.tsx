import React from "react";
import { post } from "../types";
import { urlFor } from "../sanity";
import PortableText from "react-portable-text";
import Image from "next/image";
import {useForm,SubmitHandler} from 'react-hook-form'
import {ToastContainer,toast} from 'react-toastify'
import { useRouter } from "next/router";
import 'react-toastify/dist/ReactToastify.css';
interface Props {
  post: post;
}
interface IFormInput{
  _id:string,
  name:string,
  email:string,
  comment:string
}
const CompletePost = ({ post }: Props) => {
  const router = useRouter()
  const {register,handleSubmit,formState:{errors}}=useForm<IFormInput>()
  const mainImg = urlFor(post.mainImage).url();
  const authorImg = urlFor(post.author.image).url();
  const humanReadableDate = new Date(post._createdAt).toLocaleString("en-Us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const onSubmit:SubmitHandler<IFormInput>=async(data)=>{
    const response = await fetch('/api/createComment',{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
      'Content-Type':'application/json'
      }
    })
    if (!response.ok) {
      toast.error('Try Again!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        });
      return
    }
    toast.success("Thanks for commenting.Your comment will be appeared as soon as it is approved.",{
      position: "top-left",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: 0,
    })
    router.push('/')
  }
  return (

      <article>
        <div>
          <img src={`${mainImg}`} alt="" className="object-cover w-full h-40" />
        </div>
        <div>
          <div className="wrapper max-w-3xl flex flex-col justify-center p-8 m-auto">
            <div className="info flex flex-col gap-2 md:justify-start md:items-start justify-center items-center">
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="text-gray-400">{post.description}</p>
              <div className="flex items-center flex-col md:flex-row  gap-2">
                <img
                  src={`${authorImg}`}
                  alt=""
                  className="w-10 rounded-3xl h-10 object-cover"
                  />
                <p className="text-sm text-gray-400">
                  Blog Post by{" "}
                  <span className="text-green-600">{post.author.name}</span>
                </p>
                <p>- Published at {humanReadableDate}</p>
              </div>
            </div>
            <div className="blog-content my-4 px-3">
              <PortableText
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID!}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                content={post.body}
                serializers={{
                  h1: (props: any) => {
                    
                     return <h1
                      className="text-2xl font-semibold font-sans my-5"
                      {...props}
                      />
                      ;
                    },
                    h3: (props: any) => {
                      
                       return <h3
                        className="text-xl  font-normal font-sans my-5"
                        {...props}
                        />
                        ;
                      },
                      li: (props: any) => {
                        return <li className="ml-4 list-disc">{props.children}</li>;
                      },
                      link: ({ href, children }: any) => {
                        
                        return  <a href={href} className="text-blue-500 hover:underline">
                        {children}
                      </a>
                  ;
                  },
                  img: ({ src }: any) => {
                    return (
                      <Image
                        className="w-"
                        src={src}
                        width={400}
                        height={400}
                        layout="responsive"
                        />
                        );
                      },
                    }}
                    />
            </div>
          </div>
          <hr className="max-w-lg md:max-w-2xl my-5 mx-auto border-yellow-400 border" />
        </div>
      
        <form action="" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-9 items-center justify-center max-w-3xl m-auto">
          <div className="controls flex flex-col gap-3">
          <div>
              <small className="text-yellow-400">Enjoyed this article?</small>
              <h1 className="text-2xl font-semibold">Leave a comment below!</h1>
            </div>
          <input 
            {...register("_id")}
            type="hidden"
            name="_id"
            value={post._id}
            />
            <label htmlFor="name" className=" font-semibold text-lg text-gray-700">Name</label>
            <input
           {...register('name', { required: true } )}
            type="text"
            name="name"
            id="name"
            className="w-80 sm:w-[35rem] focus:ring-2  focus:ring-yellow-500 md:w-[40rem] py-3 px-2 shadow-xl rounded-lg outline-none "
            />
          </div>
          <div className="controls flex flex-col gap-3">
            <label htmlFor="email" className=" font-semibold text-lg text-gray-700">Email</label>
            <input
           {...register('email', { required: true } )}
            type="text"
            name="email"
            id="email"
            className="w-80 sm:w-[35rem] focus:ring-2  focus:ring-yellow-500 md:w-[40rem] py-3 px-2 shadow-xl rounded-lg outline-none "
            />
          </div>
          <div className="controls flex flex-col gap-3">
            <label htmlFor="comment" className="font-semibold text-lg text-gray-700">Comment</label>
            <textarea
           {...register('comment', { required: true } )}
            name="comment"
            id="comment"
            rows={8}
            className="w-80 sm:w-[35rem]  md:w-[40rem] py-3 px-2 shadow-xl rounded-lg outline-none focus:ring-2  focus:ring-yellow-500  "
            />
            <button className="bg-yellow-500 mt-9 text-white rounded-md py-2 font-semibold  hover:bg-yellow-400 cursor-pointer">
              Submit
            </button>
            <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            />
           
          </div>
                    <div className="flex flex-col gap-2 ">
                      
                      {errors.name && <p className="text-red-500">*Name is required</p>}
                      {errors.email && <p className="text-red-500">*Email is required</p>}
                      {errors.comment && <p className="text-red-500">*Comment is required</p>}
                    </div>
        </form>
            
     </article>
     
     );
    };
  
    export default CompletePost;
    