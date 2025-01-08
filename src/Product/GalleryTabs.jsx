'use client';

import React, { useState } from 'react';
import { Volkhov } from 'next/font/google';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faCheckDouble, faClock, faHeadset, faHeart, faKitMedical, faLocationDot, faMobile, faShare, faStar } from '@fortawesome/free-solid-svg-icons';
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const GalleryTabs = () => {
    const [activeTab, setActiveTab] = useState('/explore.png');

    const gallery = {
        '/explore.png': ['/explore.png'],
        '/explore2.jpg': ['/explore2.jpg'],
        '/explore4.jpg': ['/explore4.jpg'],
        '/explore1.jpg': ['/explore.png'],
        '/explore3.jpg': ['/explore2.jpg'],
        '/explore5.jpg': ['/explore4.jpg'],
    };

    return (
        <div className="grid content-center p-10 xl:p-40">
            <h1
                className={`${volkhov.className} text-Black text-4xl font-bold tracking-wider max-w-3xl`}
            >
                Vintage Double Decker Bus Tour & Thames River Cruise
            </h1>
            <div className="inline-flex gap-2 items-center py-8">
                <FontAwesomeIcon icon={faLocationDot} className="h-4" />
                <p className="text-opacity-40 text-black font-bold">Gothenburg</p>
                <p className="text-opacity-40 text-black font-bold">|</p>
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#FFA432]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#FFA432]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#FFA432]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#FFA432]" />
                <FontAwesomeIcon icon={faStar} className="h-4 text-[#FFA432]" />
                <p className="text-opacity-40 text-black font-bold">(348 reviews)</p>
            </div>


            <div className='grid xl:grid-cols-3 gap-5'>

                <div className='xl:col-span-2'>
                    {/* Gallery */}
                    <div>
                        {gallery[activeTab]?.map((imgSrc, index) => (
                            <div key={index}>
                                {/* <img
                                    className="h-[500px] w-full object-cover"
                                    src={imgSrc}
                                    alt={`${activeTab} ${index + 1}`}
                                /> */}
                                <Image
                                width={1000}
                                height={1000}
                                className="h-[500px] w-full object-cover"
                                src={imgSrc}
                                alt={`${activeTab} ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Tabs */}
                    <div className="flex gap-2 items-center py-2 flex-wrap w-full justify-center">
                        {Object.keys(gallery).map((category) => (
                            <div
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`hover:fill-blue-500 cursor-pointer ${activeTab === category ? 'bg-black ' : ' bg-blue-500'
                                    }`}
                            >
                                <Image 
                                className="w-40 h-20 object-cover" 
                                src={category} 
                                alt={category}
                                width={200}
                                height={200}
                                />
                            </div>
                        ))}
                    </div>

                    {/* description */}
                    <div className='grid md:grid-cols-2 justify-center gap-4 shadow-md bg-[#F8FAFC] rounded-md p-16'>
                        <div>
                            <div className='py-2'>
                                <h3 className='text-lg font-bold'> <FontAwesomeIcon icon={faBan} className='text-[#7BBCB0] pr-3' /> Free cancellation</h3>
                                <p className='text-black text-opacity-40 max-w-xs py-2'>Cancel up to 24 hours in advance to receive a full refund</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg font-bold'> <FontAwesomeIcon icon={faMobile} className='text-[#7BBCB0] pr-3' /> Free cancellation</h3>
                                <p className='text-black text-opacity-40 max-w-xs py-2'>Cancel up to 24 hours in advance to receive a full refund</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg font-bold'> <FontAwesomeIcon icon={faCheckDouble} className='text-[#7BBCB0] pr-3' /> Free cancellation</h3>
                                <p className='text-black text-opacity-40 max-w-xs py-2'>Cancel up to 24 hours in advance to receive a full refund</p>
                            </div>
                        </div>

                        <div>
                            <div className='py-2'>
                                <h3 className='text-lg font-bold'> <FontAwesomeIcon icon={faKitMedical} className='text-[#7BBCB0] pr-3' />Health precautions</h3>
                                <p className='text-black text-opacity-40 max-w-xs py-2'>Special health and safety measures apply. Learn more</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg font-bold'> <FontAwesomeIcon icon={faClock} className='text-[#7BBCB0] pr-3' /> Duration 3.5 hours</h3>
                                <p className='text-black text-opacity-40 max-w-xs py-2'>Check availability to see starting times.</p>
                            </div>
                            <div className='py-2'>
                                <h3 className='text-lg font-bold'> <FontAwesomeIcon icon={faHeadset} className='text-[#7BBCB0] pr-3' />Live tour guide in English</h3>
                                <p className='text-black text-opacity-40 max-w-xs py-2'>English</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='shadow-md xl:h-3/4'>
                    <h3 className='border-b font-bold text-xl px-8 py-2'>Booking</h3>
                    <div className='p-8 space-y-4'>
                        <label className='block font-bold' htmlFor="from">From</label>
                        <input className='block bg-[#F4F4F5] p-2 w-full rounded-md' type="datetime-local" id="from" name="from" />
                        <label className='block font-bold' htmlFor="to">To</label>
                        <input className='block bg-[#F4F4F5] p-2 w-full rounded-md' type="datetime-local" id="to" name="to" />

                        <label className='block font-bold' htmlFor="guest">No. of Guests</label>
                        <select className='block bg-[#F4F4F5] p-2 w-full rounded-md' name="guest" id="guest">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div className="text-center">
                            <span className='text-black text-opacity-40'>Subtotal</span>
                            <h1 className='text-[#7BBCB0] text-3xl font-extrabold'>$78.90</h1>
                        </div>

                        <button className='bg-[#7BBCB0] p-4 text-center text-white rounded-md font-bold w-full'>Confirm Booking</button>
                        <button className='bg-transparent border p-4 text-center text-black text-opacity-40 rounded-md font-bold w-full'>
                            <FontAwesomeIcon className='px-2' icon={faHeart} /> Save to wishlist
                        </button>
                        <button className='bg-transparent border p-4 text-center text-black text-opacity-40 rounded-md font-bold w-full'>
                            <FontAwesomeIcon className='px-2' icon={faShare} /> Share the activity
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GalleryTabs;
