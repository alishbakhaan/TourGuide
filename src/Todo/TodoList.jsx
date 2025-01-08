import React from 'react'
import { Volkhov } from 'next/font/google';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faClock, faStar, faUserGroup } from '@fortawesome/free-solid-svg-icons';
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const cards = [
{
    id: 1,
    imgSrc: '/todo (1).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
},
{
    id: 2,
    imgSrc: '/todo (2).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
},
{
    id: 3,
    imgSrc: '/todo (3).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
},
{
    id: 4,
    imgSrc: '/todo (4).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
},
{
    id: 5,
    imgSrc: '/todo (1).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
},
{
    id: 6,
    imgSrc: '/todo (2).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
},
{
    id: 7,
    imgSrc: '/todo (3).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
},
{
    id: 8,
    imgSrc: '/todo (4).png',
    button: 'Water Activities',
    heading: 'Westminster to Greenwich River Thames'
}
]

const TodoList = () => {
    return (
       
        <div className=''>
           
            <div className="flex flex-wrap gap-5 justify-between py-5 px-10 xl:px-52">
                <div>
                    <h1 className={`${volkhov.className} text-black text-xl md:text-3xl font-bold tracking-wider capitalize`}>Things to do in London</h1>
                    <p className='text-black text-opacity-40'>49 activities found</p>
                </div>
                <div >
                    <label className=' text-black font-bold pr-4' htmlFor="search">Sort by:</label>
                    <input className='px-4 py-2 bg-[#F4F4F5] rounded-md' type="search" name="search" id="search" placeholder='Popularity' />
                </div>
            </div>

            <div className='bg-[#F9FAFD] grid xl:grid-cols-4 gap-10 py-10 px-10 xl:px-52'>

                <div className=''>
                    <div className='bg-white shadow-md mb-4'>
                        <h3 className='border-b font-bold text-xl px-8 py-4'>Availability</h3>
                        <div className='p-8 space-y-4'>
                            <label className='block font-bold' htmlFor="from">From</label>
                            <input className='block bg-[#F4F4F5] p-2 w-full rounded-md' type="datetime-local" id="from" name="from" />
                            <label className='block font-bold' htmlFor="to">To</label>
                            <input className='block bg-[#F4F4F5] p-2 w-full rounded-md' type="datetime-local" id="to" name="to" />
                            <button className='bg-[#7BBCB0] p-4 text-center text-white rounded-md font-bold w-full capitalize'>check availability </button>

                        </div>
                    </div>
                    <div className='bg-white shadow-md mb-4'>
                        <select className='border-b font-bold text-xl px-8 py-4 w-full rounded-md' name="guest" id="guest">
                            <option value="1">Theme</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div className='p-8 space-y-4'>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Water activities</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Good for social distancing</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Adrenaline</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Nature</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Hidden gems</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Street art & grafitti</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Food</label>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-md mb-4'>
                        <select className='border-b font-bold text-xl px-8 py-4 w-full rounded-md' name="guest" id="guest">
                            <option value="1">Duration</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div className='p-8 space-y-4'>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1"> 0-3 hours</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1"> 3-5 hours</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">5-7 hours</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Full day (7+ hours)</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1"> Multi-day</label>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-md mb-4'>
                        <select className='border-b font-bold text-xl px-8 py-4 w-full rounded-md' name="guest" id="guest">
                            <option value="1">Destination</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <div className='p-8 space-y-4'>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Biscayne Bay</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Downtown Miami</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Wynwood Arts District</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Port of Miami</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Everglades National Park</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Fisher Island</label>
                            </div>
                            <div className='flex'>
                                <input type="checkbox" name="1" id="1" />
                                <label className='ml-4 block' htmlFor="1">Coconut Grove</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-3">
                    {cards.map((card) => (
                       <div className="bg-white shadow-md rounded-lg grid xl:grid-cols-6 items-center gap-5 my-5" key={card.id}>
                        <div>
                            <Image
                                src={card.imgSrc}
                                alt='images'
                                width={2000}
                                height={2000}
                                className='object-cover w-full xl:h-40 xl:w-40 rounded-lg'
                            />
                        </div>

                        <div className='xl:col-span-4 p-4' >
                            <div className='space-x-2'>
                            <button className='bg-[#7BBCB0] px-4 py-1 rounded-full text-white uppercase text-sm font-bold'>{card.button}</button>
                            <span>|</span>
                            <FontAwesomeIcon className='text-[#FFA432]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FFA432]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FFA432]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FFA432]' icon={faStar} />
                            <FontAwesomeIcon className='text-[#FFA432]' icon={faStar} />
                            <span className='text-black text-opacity-40'>(584 reviews)</span>
                            </div>

                            <div className='py-4'>
                            <h1 className={`${volkhov.className} text-black text-xl md:text-2xl font-semibold tracking-wider capitalize`}>{card.heading}</h1>
                            </div>

                            <div className='text-black text-opacity-60 space-x-4 font-medium'>
                                <span><FontAwesomeIcon icon={faClock}/> 2 hours</span>
                                <span>|</span>
                                <span><FontAwesomeIcon icon={faCar}/>Transport</span>
                                <span>|</span>
                                <span><FontAwesomeIcon icon={faUserGroup}/>Family Plan</span>
                            </div>
                        </div>

                        <div className='p-4'>
                            <h3 className='text-[#7BBCB0] text-2xl font-bold'>$35.00</h3>
                            <p className='text-black text-opacity-40'>per Person</p>
                        </div>
                    </div>
                    ))}
                     <div className="">
                    <button className='border border-[#7BBCB0] text-[#7BBCB0] bg-white w-full p-4 rounded-full'>Load More</button>
                </div>
                </div>

              
            </div>  
           
        </div>
    )
}

export default TodoList