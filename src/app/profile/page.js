import React from 'react'
import { Volkhov } from 'next/font/google';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCake, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const page = () => {
    return (
        <div className='pt-32'>
            <div className='bg-white py-5 px-10 xl:px-52'>
                <h1 className={`${volkhov.className} text-black text-xl font-bold capitalize`}>My Profile</h1>
                <p className='text-black text-opacity-40'>Home/My Profile</p>
            </div>

            <div className='bg-[#F9FAFD] py-10 px-10 xl:px-52'>
                <div className='bg-white shadow-md grid md:grid-cols-2 xl:grid-cols-4'>

                    <div>
                        <div className='text-center'>
                            <div className='flex justify-center'>
                                <Image
                                    src={'/profile.png'}
                                    alt='images'
                                    width={100}
                                    height={100}
                                    className='object-contain w-40 h-40 rounded-full text-center'
                                />
                            </div>
                           
                                <h1 className='text-xl font-bold'>Masum Rana</h1>
                            
                            <div className='flex items-center gap-2 text-black text-opacity-60 justify-center p-2'>
                                <span className='inline-flex gap-2'> <FontAwesomeIcon className='w-3' icon={faLocationDot} /> Gothenburgh </span>
                                <span>|</span>
                                <span className='inline-flex gap-2'> <FontAwesomeIcon className='w-3' icon={faCake} /> 15th February </span>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className='text-lg px-10 py-5 font-semibold bg-[#7BBCB0] text-white transition-all duration-200 ease-in cursor-pointer'>Profile Informations</h3>
                            <h3 className='text-lg px-10 py-5 font-semibold hover:bg-[#7BBCB0] hover:text-white transition-all duration-200 ease-in cursor-pointer'>Manage notifications</h3>
                            <h3 className='text-lg px-10 py-5 font-semibold hover:bg-[#7BBCB0] hover:text-white transition-all duration-200 ease-in cursor-pointer'>Newsletter Subscription</h3>
                            <h3 className='text-lg px-10 py-5 font-semibold hover:bg-[#7BBCB0] hover:text-white transition-all duration-200 ease-in cursor-pointer'>Booking History</h3>
                        </div>

                    </div>

                    <div className='xl:col-span-3 '>
                        <div className='border p-10 space-y-4'>
                            <h3 className='font-bold text-xl'>Personal Information</h3>

                            <label className='block font-bold' htmlFor='name'>Name</label>
                            <input className='block bg-[#F4F4F5] p-4 w-full rounded-md' type="text" name="name" id="" placeholder='Masum Rana' />

                            <label className='block font-bold' htmlFor="from">Date of Birth</label>
                            <input className='block bg-[#F4F4F5] p-4 w-full rounded-md' type="datetime-local" id="from" name="from" />

                            <label className='block font-bold' htmlFor='num'>Phone</label>
                            <input className='block bg-[#F4F4F5] p-4 w-full rounded-md' type="number" name="num" id="" placeholder='+46-7644 394 68' />

                            <label className='block font-bold' htmlFor="location">Location</label>
                            <input className='block bg-[#F4F4F5] p-4 w-full rounded-md' type="location" name="location" id="location" placeholder='Gothenburg' />

                            <button className='bg-[#7BBCB0] p-5 rounded-md font-bold text-white w-1/2'>Save</button>
                        </div>

                        <div className='border p-10 space-y-4'>
                            <h3 className='font-bold text-xl'>Security</h3>

                            <label className='block font-bold' htmlFor='email'>Email Address</label>
                            <input className='block bg-[#F4F4F5] p-4 w-full rounded-md' type="email" name="email" id="" placeholder='masumrana15@gmail.com' />

                            <label className='block font-bold' htmlFor='pass'>Password</label>
                            <input className='block bg-[#F4F4F5] p-4 w-full rounded-md' type="password" name="password" id="" placeholder='**********' />

                            <label className='block font-bold' htmlFor='pass'>Confirm Password</label>
                            <input className='block bg-[#F4F4F5] p-4 w-full rounded-md' type="password" name="password" id="" placeholder='**********' />

                            <button className='bg-[#7BBCB0] p-5 rounded-md font-bold text-white w-1/2'>Save</button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default page