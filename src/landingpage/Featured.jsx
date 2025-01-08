'use client'

import React, { useRef } from 'react';
import { Volkhov } from 'next/font/google';
import Slider from '../components/Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Featured = () => {

    return (
        <div>
            <div className="grid content-center p-10">
                <div className="flex flex-wrap justify-between items-center py-10">
                    <div>
                        <h1 className={`${volkhov.className} text-black text-4xl font-bold tracking-wider`}>
                            Featured Destinations
                        </h1>
                        <p className="text-[#778088] max-w-xl py-4">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit
                        </p>
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

export default Featured;
