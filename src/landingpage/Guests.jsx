'use client'

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faSearchLocation, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Link from 'next/link';

const Guests = () => {
  const today = new Date();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="flex justify-center items-center -mt-10">
      <div
        className="grid md:grid-cols-4 bg-white shadow-lg shadow-[#7BBCB0] rounded-xl md:justify-center items-center md:max-w-5xl w-full p-8 gap-10"
      >
        {/* location*/}
        {/*         
        <div className="cursor-pointer">
         <div className="flex items-center pl-3 pointer-events-none">
             <FontAwesomeIcon icon={faSearchLocation} className='text-[#7BBCB0]' />
             <span className='text-[#7BBCB0] font-bold px-4'>Location</span>
        </div>
        <Link href={'/location'}><p className='text-black text-opacity-40 p-4'>Search For A Destination</p></Link>
        </div> */}

        {/* Start Date Picker */}

        <div className="cursor-pointer">
          <div className="flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faCalendar} className='text-[#7BBCB0]' />
            <span className='text-[#7BBCB0] font-bold px-4'>Start Date</span>
          </div>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            minDate={today}
            className="bg-transparent outline-none text-white text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholderText="Pick a date"
          />
        </div>

        {/* End Date Picker */}
        <div className="cursor-pointer">
          <div className="flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faCalendar} className='text-[#7BBCB0]' />
            <span className='text-[#7BBCB0] font-bold px-4'>End Date</span>
          </div>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            minDate={startDate || today}
            className="bg-transparent outline-none text-white text-sm rounded-lg block w-full pl-10 p-2.5"
            placeholderText="End date"
          />
        </div>

        {/* Dropdown */}
        <div className="cursor-pointer">
          <div className="flex items-center pl-3 pointer-events-none">
            <FontAwesomeIcon icon={faUserGroup} className='text-[#7BBCB0]' />
            <span className='text-[#7BBCB0] font-bold px-4'>Guests</span>
          </div>
          <select
            name="guests"
            id="guests"
            className="bg-transparent outline-none text-black text-opacity-50 text-sm rounded-lg focus:bg-[#7bbcb096] block w-full pl-10 p-2.5"
          >
            <option value="">How many Guests?</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <div className='bg-[#FFDA32] text-xs px-10 py-4 font-extrabold uppercase rounded-full shadow-lg shadow-[#ffd93281] text-center'>
          {/* Button */}
          <button>
            Search
          </button>
        </div>

      </div>
    </div>
  );
};

export default Guests;
