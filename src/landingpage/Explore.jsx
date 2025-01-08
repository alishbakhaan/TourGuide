'use client'
import React, { useState } from 'react'
import Tabs from '../components/Tabs'
import { Volkhov } from 'next/font/google'
import SliderCard from '../components/SliderCard'
const volkhov = Volkhov({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Explore = () => {
  const [activeTab, setActiveTab] = useState("New York");
  const gallery = {
    "New York":
      [
        '/explore.png'
      ],
    "California":
      [
        '/explore1.jpg'
      ],
    "Alaska":
      [
        '/explore2.jpg'
      ],
    "Sidney":
      [
        '/explore3.jpg'
      ],
    "Dubai":
      [
        '/explore4.jpg'
      ],
    "London":
      [
        '/explore5.jpg'
      ],
    "Tokyo":
      [
        '/explore.png'
      ],
    "Delhi":
      [
        '/explore1.jpg'
      ],

  };

  return (
    <div className='py-20 px-10 md:px-32'>
      <div className='p-5'>
        <h1 className={`${volkhov.className} text-black text-2xl md:text-4xl text-center font-bold tracking-wider `}>Explore Popular Cities</h1>
        <p className='text-[#778088] md:text-base text-sm text-center max-w-2xl m-auto py-4 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center py-8 flex-wrap space-x-4 space-y-2">
        {Object.keys(gallery).map((category) => (
          <button
            key={category}
            className={`px-4 md:px-10 py-3 rounded-full text-center ${activeTab === category
              ? "bg-[#7BBCB0] text-white"
              : "border border-[#7BBCB0]"
              }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="">
        {gallery[activeTab].map((imgSrc, index) => (
          <div key={index}>
            <img
              className="h-auto w-full object-cover"
              src={imgSrc}
              alt={`${activeTab} ${index + 1}`}
            />
            <div className=''><Tabs/></div>

          </div>
        ))}
      </div>

      {/* slider card */}

<div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4 py-10'>
      <SliderCard image={'/slidercard (1).png'} head={'Alaska: Westminster to Greenwich River Thames'}/>
      <SliderCard image={'/slidercard (2).png'} head={'Alaska: Vintage Double Decker Bus Tour & Thames '}/>
      <SliderCard image={'/slidercard (3).png'} head={'Alaska: Magic of London Tour with Afternoon Tea at '}/>
      <SliderCard image={'/slidercard (4).png'} head={'Alaska: Magic of London Tour with Afternoon Tea at '}/>
</div>
    </div>
  )
}

export default Explore



