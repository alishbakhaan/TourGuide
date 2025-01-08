import React from 'react'
import { Volkhov } from 'next/font/google'
const volkhov = Volkhov({
  weight: ['400', '700'],
  subsets: ['latin']
})

const Banner = ({ image, desc, property, head, para, button, content }) => {
  return (
    <div className='grid content-center bg-cover bg-center bg-no-repeat w-full ' style={{ backgroundImage: `url(${image})` }}>
      <div className="grid md:grid-cols-2 gap-10 items-center p-10 md:p-20">
        {/* left column */}
        <div>
          {desc}
        </div>

        {/* right column */}
        <div>
          <button className={`${property} bg-[#AFFFF0] text-xs px-4 py-2 font-extrabold shadow-md uppercase rounded-full`} >Trending Now</button>
          <h1 className={`${volkhov.className} text-white text-4xl font-bold tracking-wider py-4`}>{head}</h1>
          <div>{content}</div>
          <p className='text-white max-w-xl py-4'> {para} </p>
          <div>
            {button}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Banner