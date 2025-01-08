import React from 'react'
import { Volkhov } from 'next/font/google'
import Image from 'next/image'
const volkhov = Volkhov({
  weight: ['400', '700'],
  subsets: ['latin']
})

export default function Card({image, head}) {
  return (
    <div>
      <div className="rounded-md bg-white shadow-md md:max-w-[350px] max-h-max">
        <Image
          src={image}
          width={350}
          height={350}
          alt='image'
          className='object-contain w-full'
        />

        <div className='p-4'>
          <div className="inline-flex items-center gap-2">
            <Image
              src={'/avatar.png'}
              width={30}
              height={30}
              alt='image'
              className='object-contain'
            />
            <p className='text-black text-sm text-opacity-40'>Jackie Moncada</p>
          </div>

          <h1 className={`${volkhov.className} text-Black text-lg py-2 font-bold tracking-wide `}>{head}</h1>
        </div>
      </div>
    </div>
  )
}
