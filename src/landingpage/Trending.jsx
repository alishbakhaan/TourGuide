import React from 'react'
import Banner from '../components/Banner'
import Image from 'next/image'

const Trending = () => {
  return (
    <div>
      <Banner
        image={'/trending.png'}
        property={'flex'}
        head={'Wilderlife of Alaska'}
        para={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
        content={<p className='text-white font-bold'>Available on IOS & Android</p>}
        desc={
          <div>
            <Image
              src={'/banner.png'}
              width={500}
              height={500}
              alt='image'
              className='object-contain w-full h-[600px]'
            />
            {/* <div className='absolute top-1/4 left-[20%]'>
        <Image 
        src={'/trendingbanner (5).png'}
        width={450}
        height={450}
        alt='image'
        className='object-contain'
        />
        </div>
        <div className='absolute top-1/4 left-[22%]'>
        <Image
          src={'/trendingbanner (4).png'}
          width={400}
          height={400}
          alt='image'
          className='object-contain'
        />
        </div>
        <div className='absolute top-1/4 left-[20%]'>
        <Image
          src={'/trendingbanner (6).png'}
          width={450}
          height={450}
          alt='image'
          className='object-contain'
        />
        </div> */}
          </div>
        }
        button={
          <button className='bg-[#FFDA32] text-xs px-12 py-4 font-extrabold uppercase rounded-full shadow-lg shadow-[#ffd93281]'>Book Now</button>
        }
      />
    </div>
  )
}

export default Trending