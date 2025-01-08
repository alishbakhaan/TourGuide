import React from 'react'
import { Volkhov } from 'next/font/google' 
import Link from 'next/link'
const volkhov = Volkhov({ 
    weight: ['400', '700'],
    subsets: ['latin'] 
})

const Navbar = () => {
  return (
    <div className='px-10 py-8 bg-white bg-opacity-80 text-black fixed z-50 shadow-md flex items-center justify-between w-full'>
        <h1 className={`${volkhov.className} text-2xl font-bold`}>tour guide</h1>

<div>
        <ul className='list-none hidden lg:inline-flex items-center gap-6 mx-10'>
            <Link href={'/'}> <li>Home</li> </Link>
            <Link href={'/profile'}> <li>Profile</li> </Link>
            <Link href={'/product'}> <li>Popular Destinations</li> </Link>
            <Link href={'/todo'}> <li>Solo Trips</li> </Link>
            <Link href={'/'}> <li>Help</li> </Link>
        </ul>

        <Link href={'/'}>
        <button className='bg-[#FFDA32] text-black font-bold px-10 py-3'>Sign In</button>
        </Link>
</div>
    </div>
  )
}

export default Navbar