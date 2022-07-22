import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <header>

        <div className='flex items-center justify-between w-full max-w-5xl m-auto  p-5 lg:p-4 '>

            <div className='flex gap-5 items-center'>
            
                <div className='w-44 '>
                <Link href="/">
                    <img src='https://links.papareact.com/yvf'  className='w-full object-contain cursor-pointer' />
                </Link>
                </div>
            

                <ul className=' space-x-5 hidden md:flex items-center'>
                    <li> <Link href='/'>About</Link></li>
                    <li> <Link href='/'>Contact</Link></li>
                    <li className='bg-green-400 px-3 py-1 text-white font-semibold rounded-full'> <Link href='/'>Follow</Link></li>
                </ul>
            </div>

            <div className='flex items-center gap-4 text-green-600 '>
                <span>Sign in</span>
                <button className='border-green-400 px-3 py-1 rounded-2xl border-2 '>Get Started</button>
            </div>

        </div>

      
    </header>
  )
}

export default Header