import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-yellow-400 max-w-5xl m-auto border-b-2 border-gray-400 h-[60vh] flex justify-center items-center p-8 md:p-6 '>
        <div className="wrapper flex gap-5 items-center justify-center lg:justify-around w-full lg:p-0 ">
            <div className="content flex flex-col space-y-3">
                <h1 className='text-5xl md:w-[32rem] font-extrabold font-serif line leading-tight'>
                    <span className='underline decoration-black'>Medium</span> is a place to write, read, and connect
                </h1>
                <p>It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
            </div>
            
            <div className="hidden md:block lg:w-full">
                <img src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" alt="" className='w-full object-contain' />
            </div>
        </div>
    </div>
  )
}

export default HeroSection