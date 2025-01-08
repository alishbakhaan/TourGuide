import React from 'react'
import { Volkhov } from 'next/font/google'
import Image from 'next/image'
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin']
})

const Gallery = () => {
    return (
        <div className='grid content-center p-10 justify-center'>
            <div className="flex flex-wrap justify-between items-center py-10">
                <div>
                    <h1 className={`${volkhov.className} text-Black text-4xl font-bold tracking-wider `}>From The Gallery</h1>
                    <p className='text-[#778088] max-w-xl py-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit</p>
                </div>
                <div>
                    <button className='bg-[#495560] text-white text-sm px-12 py-4 font-bold rounded-md'>View All Images</button>
                </div>
            </div>

            <div>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                    <Image
                        src={'/gallery.png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                    <Image
                        src={'/gallery (1).png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                    <Image
                        src={'/gallery (2).png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                    <Image
                        src={'/gallery (3).png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                    <Image
                        src={'/gallery (4).png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                    <Image
                        src={'/gallery (5).png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                    <Image
                        src={'/gallery (6).png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                    <Image
                        src={'/gallery (7).png'}
                        width={350}
                        height={350}
                        alt='image'
                        className='object-contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default Gallery