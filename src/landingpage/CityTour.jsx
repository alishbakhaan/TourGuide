import React from 'react'
import Banner from '../components/Banner'
import Image from 'next/image'

const CityTour = () => {
  return (
    <div>
      <Banner
        image={'/citytour.png'}
        property={'hidden'}
        head={'Smart City Tour Mobile App'}
        para={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
        content={<p className='text-white font-bold'>Available on IOS & Android</p>}
        desc={
          <div>
             <Image 
                    src={'/tourbanner.png'}
                    width={550}
                    height={550}
                    alt='image'
                    className='object-contain w-full h-[600px]'
                    />
            {/* <div className='absolute top-32 left-0  md:left-[28%]'>
              <Image
                src={'/tourbanner (5).png'}
                width={400}
                height={400}
                alt='image'
                className='object-contain'
              />
            </div>
            <div className='absolute top-20 left-0 md:left-[20%]'>
              <Image
                src={'/tourbanner (1).png'}
                width={400}
                height={400}
                alt='image'
                className='object-contain'
              />
            </div> */}
          </div>
        }
        button={
          <div className='flex flex-wrap gap-4'>

            <button className='bg-[#FFDA32] text-sm px-4 md:px-12 py-2 md:py-5 font-extrabold uppercase rounded-full shadow-lg shadow-[#ffd93281] inline-flex items-center gap-4'><span>
              <Image
                src={'/bannervector (3).png'}
                width={30}
                height={30}
                alt='image'
                className='object-contain'
              />
            </span>
              Download For IOS
            </button>


            <button className='bg-[#FFDA32] text-sm px-4 md:px-12 py-2 md:py-5 font-extrabold uppercase rounded-full shadow-lg shadow-[#ffd93281] inline-flex items-center gap-4'><span>
              <Image
                src={'/bannervector (2).png'}
                width={30}
                height={30}
                alt='image'
                className='object-contain'
              />
            </span>
              Download For Android
            </button>

          </div>
        }
      />
    </div>
  )
}

export default CityTour