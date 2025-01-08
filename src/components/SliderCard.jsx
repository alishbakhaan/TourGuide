import React from 'react'
import { Volkhov } from 'next/font/google'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faClock, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons'
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin']
})

export default function SliderCard({ image, head }) {
    return (
        <div>
            <div className="rounded-md bg-white shadow-md md:max-w-[350px] max-h-max p-4">
                <Image
                    src={image}
                    width={350}
                    height={350}
                    alt='image'
                    className='object-contain w-full'
                />

                <div className='space-y-2 py-2'>

                    <h1 className={`${volkhov.className} text-black text-left text-lg py-2 font-medium tracking-wide`}>{head}</h1>

                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faClock} />
                        <p className='text-black text-base text-opacity-60'>Duration 2 hours</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCarSide} />
                        <p className='text-black text-base text-opacity-60'>Transport Facility</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faUserGroup} />
                        <p className='text-black text-base text-opacity-60'>Family Plan</p>
                    </div>

                </div>

<div className=' border-t'>
                <div className='py-2 flex justify-between items-center text-black text-base text-opacity-60 font-semibold'>
                    <div>
                        <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                        <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                        <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                        <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                        <FontAwesomeIcon icon={faStar} className='text-[#CFD9DE]' />
                        <p>584 reviews</p>
                    </div>
                    <div>
                        <h3 className={`${volkhov.className} text-[#7BBCB0] text-lg font-extrabold`}>$35.00</h3>
                        <p className='text-black text-base text-opacity-60 font-semibold'>per person</p>
                    </div>
                </div>
</div>
            </div>
        </div>
    )
}
