'use client'

import React from 'react';
import { Volkhov } from 'next/font/google';
import Slider from '../components/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const CitySpecial = () => {

    return (
        <div className='px-10 xl:px-52'>
         <h1 className={`${volkhov.className} text-black text-xl md:text-3xl font-bold tracking-wider capitalize py-10`}>outside the city specials</h1>
            <div className="grid content-center border-y">
                <div className="flex flex-wrap justify-between items-center py-8">
                    <div>
                       <button className='bg-[#7BBCB0] p-4 rounded-full text-white uppercase tracking-widest text-sm font-bold'>Water Activities</button>
                    </div>
                    <div className="flex space-x-4 ">
                                      
                        <button className=" flex items-center text-center justify-center p-6 w-3 h-3 text-2xl bg-[#FFDA32] border border-[#FFDA32] drop-shadow-xl shadow-lg shadow-[#FFDA32] rounded-full hover:bg-white">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                        <button className=" flex items-center text-center justify-center p-6 w-3 h-3 text-2xl bg-[#FFDA32] border border-[#FFDA32] drop-shadow-xl shadow-lg shadow-[#FFDA32] rounded-full hover:bg-white">
                        <FontAwesomeIcon icon={faChevronRight}/>
                        </button>
                        
                    </div>
                </div>

                <Slider/>
            </div>

            <div className="grid content-center border-y">
                <div className="flex flex-wrap justify-between items-center py-8">
                    <div>
                    <button className='bg-[#59A9FE] p-4 rounded-full text-white uppercase tracking-widest text-sm font-bold'>Special Foods</button>
                    </div>
                    <div className="flex space-x-4 ">
                                      
                        <button className=" flex items-center text-center justify-center p-6 w-3 h-3 text-2xl bg-[#FFDA32] border border-[#FFDA32] drop-shadow-xl shadow-lg shadow-[#FFDA32] rounded-full hover:bg-white">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                        <button className=" flex items-center text-center justify-center p-6 w-3 h-3 text-2xl bg-[#FFDA32] border border-[#FFDA32] drop-shadow-xl shadow-lg shadow-[#FFDA32] rounded-full hover:bg-white">
                        <FontAwesomeIcon icon={faChevronRight}/>
                        </button>
                        
                    </div>
                </div>

                <Slider/>
            </div>

            <div className="grid content-center border-y">
                <div className="flex flex-wrap justify-between items-center py-8">
                    <div>
                    <button className='bg-[#FF6969] p-4 rounded-full text-white uppercase tracking-widest text-sm font-bold'>River Activity</button>
                    </div>
                    <div className="flex space-x-4 ">
                                      
                        <button className=" flex items-center text-center justify-center p-6 w-3 h-3 text-2xl bg-[#FFDA32] border border-[#FFDA32] drop-shadow-xl shadow-lg shadow-[#FFDA32] rounded-full hover:bg-white">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                        </button>
                        <button className=" flex items-center text-center justify-center p-6 w-3 h-3 text-2xl bg-[#FFDA32] border border-[#FFDA32] drop-shadow-xl shadow-lg shadow-[#FFDA32] rounded-full hover:bg-white">
                        <FontAwesomeIcon icon={faChevronRight}/>
                        </button>
                        
                    </div>
                </div>

                <Slider/>
            </div>

        </div>
    );
};
export default CitySpecial