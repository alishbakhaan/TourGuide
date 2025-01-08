import React from 'react'
import { Volkhov } from 'next/font/google' 
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
const volkhov = Volkhov({ 
    weight: ['400', '700'],
    subsets: ['latin'] 
})

const HeroSection = () => {
  return (
    <div className='grid content-center bg-cover bg-center bg-no-repeat w-full h-[90vh] p-10' style={{backgroundImage: `url(/hero.png)`}}>
      <div>
       <h1 className={`${volkhov.className} md:text-5xl text-3xl font-bold text-center max-w-3xl m-auto`}>We Find The Best Tours For You</h1> 
       <p className='text-center max-w-xl m-auto py-5 leading-8 font-medium md:text-base text-sm'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia 
        consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

        <div className='flex justify-center'>
          <Link href={'/'}>
          <div className='rounded-full bg-white w-10 h-10 inline-flex items-center justify-center'> <FontAwesomeIcon className='text-[#7BBCB0]' icon={faPlay}/> </div>
          <button className='px-2 tracking-wider font-bold md:text-xl text-base'>Watch Video</button>
          </Link>
        </div>
      </div>    
    </div>
  )
}

export default HeroSection