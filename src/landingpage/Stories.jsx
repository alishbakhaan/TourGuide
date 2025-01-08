import React from 'react'
import Card from '../components/Card'
import { Volkhov } from 'next/font/google'
import Image from 'next/image'
const volkhov = Volkhov({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Stories = () => {
  return (
    <div>
      <div className='grid md:content-center p-10 justify-center'>
        <div className="flex flex-wrap justify-between items-center py-10">
          <div>
            <h1 className={`${volkhov.className} text-Black text-4xl font-bold tracking-wider `}>Latest Stories</h1>
            <p className='text-[#778088] max-w-xl py-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
          </div>
          <div>
            <button className='bg-[#495560] text-white text-sm px-12 py-4 font-bold rounded-md'>View All Posts</button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          <Card
            head={'7 Signs and Symptoms of Iodine Deficiency'}
            image={'/card (1).png'}
          />
          <Card
            head={'How to Fix Your Sleep Schedule: 7 Easy Ways'}
            image={'/card (2).png'}
          />
          <Card
            head={'10 Proven Health Benefits of Cinnamon'}
            image={'/card (3).png'}
          />
          <Card
            head={'11 Health Benefits of Turmeric and Curcumin'}
            image={'/card (4).png'}
          />
        </div>
      </div>
    </div>
  )
}

export default Stories