import React from 'react'
import { Volkhov } from 'next/font/google'
import Image from 'next/image'
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin']
})

const Tabs = () => {
    return (
        <>
            <div className='bg-[#F9FDFF] shadow-md rounded-md p-16 max-w-7xl mx-auto'>
                <div className="grid md:grid-cols-2 justify-center gap-10">
                    <div className='max-w-md'>
                        <h1 className={`${volkhov.className} text-black text-3xl xl:text-6xl font-extrabold tracking-wider `}>Alaska</h1>
                        <p className='text-[#778088] md:text-base text-sm py-4 '>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </p>
                    </div>

                    <div>
                        <div className="grid xl:grid-cols-2 gap-2">
                            <div className='bg-white shadow-md text-[#D176E0] p-4 text-sm font-bold inline-flex gap-2'> 
                                <span> 
                                <Image
                                src={'/tabs (1).png'}
                                width={20}
                                height={20}
                                alt='image'
                                className='object-contain'
                            />
                            </span>
                             <p>Public Transportation</p> 
                             </div>
                            <div className='bg-white shadow-md text-[#7BBCB0] p-4 text-sm font-bold inline-flex gap-2'> 
                                <span> 
                                <Image
                                src={'/tabs (3).png'}
                                width={20}
                                height={20}
                                alt='image'
                                className='object-contain'
                            />
                            </span> 
                            <p>Nature & Adventure</p> </div>
                            <div className='bg-white shadow-md text-[#E4B613] p-4 text-sm font-bold inline-flex gap-2'> 
                                <span> 
                                <Image
                                src={'/tabs (2).png'}
                                width={20}
                                height={20}
                                alt='image'
                                className='object-contain'
                            />
                            </span> <p>Private Transportations</p> 
                            </div>
                            <div className='bg-white shadow-md text-[#FC3131] p-4 text-sm font-bold inline-flex gap-2'> 
                                <span>
                                 <Image
                                src={'/tabs (4).png'}
                                width={20}
                                height={20}
                                alt='image'
                                className='object-contain'
                            />
                            </span> 
                            <p>Business Tours</p> 
                            </div>
                            <div className='bg-white shadow-md text-[#5C9BDE] p-4 text-sm font-bold inline-flex gap-2'> 
                                <span> 
                                <Image
                                src={'/tabs (5).png'}
                                width={20}
                                height={20}
                                alt='image'
                                className='object-contain'
                            />
                            </span> 
                            <p>Local Visit</p> 
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Tabs