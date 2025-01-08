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

const RelatedTours = () => {

    return (
        <div className='p-20'>
            <div className="grid content-center p-10 border-y">
                <div className="flex flex-wrap justify-between items-center py-8">
                    <div>
                        <h1 className={`${volkhov.className} text-black text-3xl md:text-4xl font-bold tracking-wider`}>
                        Related tours in Today
                        </h1>
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

            <div className="grid content-center p-10 border-y">
                <div className="flex flex-wrap justify-between items-center py-8">
                    <div>
                        <h1 className={`${volkhov.className} text-black text-4xl font-bold tracking-wider`}>
                        Related tours in London
                        </h1>
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
export default RelatedTours