import React from 'react'
import { Volkhov } from 'next/font/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faFilter, faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const reviews = [
    {
        id: 1,
        name: "Jenny Wilson",
        date: "2 October 2012",
        avatar: "/customer (1).png",
        stars: 4,
        reviewTitle: "Informative but disappointed not seeing changing of the guards",
        reviewText: `The tour was very well organised. One minus is that you get completely
      bombarded with information. You also have to stand up for too long at the
      private entrance to the Tower of London, which leads to a lack of time later.
      Lunch was the same, too stress, the quality was great but you couldn't enjoy it.
      I'd like to ask the organisers: please`,
    },
    {
        id: 2,
        name: "Jenny Wilson",
        date: "2 October 2012",
        avatar: "/customer (2).png",
        stars: 4,
        reviewTitle: "Informative but disappointed not seeing changing of the guards",
        reviewText: `The tour was very well organised. One minus is that you get completely
      bombarded with information. You also have to stand up for too long at the
      private entrance to the Tower of London, which leads to a lack of time later.
      Lunch was the same, too stress, the quality was great but you couldn't enjoy it.
      I'd like to ask the organisers: please`,
    },
    {
        id: 3,
        name: "Jenny Wilson",
        date: "2 October 2012",
        avatar: "/customer (3).png",
        stars: 4,
        reviewTitle: "Informative but disappointed not seeing changing of the guards",
        reviewText: `The tour was very well organised. One minus is that you get completely
      bombarded with information. You also have to stand up for too long at the
      private entrance to the Tower of London, which leads to a lack of time later.
      Lunch was the same, too stress, the quality was great but you couldn't enjoy it.
      I'd like to ask the organisers: please`,
    },
    {
        id: 4,
        name: "Jenny Wilson",
        date: "2 October 2012",
        avatar: "/customer (4).png",
        stars: 4,
        reviewTitle: "Informative but disappointed not seeing changing of the guards",
        reviewText: `The tour was very well organised. One minus is that you get completely
      bombarded with information. You also have to stand up for too long at the
      private entrance to the Tower of London, which leads to a lack of time later.
      Lunch was the same, too stress, the quality was great but you couldn't enjoy it.
      I'd like to ask the organisers: please`,
    },
    {
        id: 5,
        name: "Jenny Wilson",
        date: "2 October 2012",
        avatar: "/customer (5).png",
        stars: 4,
        reviewTitle: "Informative but disappointed not seeing changing of the guards",
        reviewText: `The tour was very well organised. One minus is that you get completely
      bombarded with information. You also have to stand up for too long at the
      private entrance to the Tower of London, which leads to a lack of time later.
      Lunch was the same, too stress, the quality was great but you couldn't enjoy it.
      I'd like to ask the organisers: please`,
    },

];

const CustomerReview = () => {
    return (
        <div className='py-10 px-10 xl:px-40'>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className={`${volkhov.className} text-Black text-2xl font-bold tracking-wider `}>Customer Review</h1>
                    <p className='text-4xl font-extrabold py-4'>4,30 <span className='font-medium text-black text-opacity-40 tracking-widest text-lg'>854 Reviews</span></p>
                    <FontAwesomeIcon icon={faStar} className='text-[#FFA432] h-10' />
                    <FontAwesomeIcon icon={faStar} className='text-[#FFA432] h-10' />
                    <FontAwesomeIcon icon={faStar} className='text-[#FFA432] h-10' />
                    <FontAwesomeIcon icon={faStar} className='text-[#FFA432] h-10' />
                    <FontAwesomeIcon icon={faStar} className='text-[#CFD9DE] h-10' />
                </div>
                <div className='grid grid-cols-2 gap-4 justify-around'>

                    <div className='space-y-1 text-black text-opacity-60 font-bold'>
                        <label className='block' htmlFor="progress-bar-1">Guide</label>
                        <label className='block' htmlFor="progress-bar-2">Transportation</label>
                        <label className='block' htmlFor="progress-bar-3">Value for money</label>
                        <label className='block' htmlFor="progress-bar-4">Safety</label>
                    </div>
                    <div className='space-y-5'>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 " id="progress-bar-1">
                            <div className="bg-[#FFDA32] h-2.5 rounded-full" style={{ width: '35%' }}></div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 " id="progress-bar-2">
                            <div className="bg-[#FFDA32] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 " id="progress-bar-3">
                            <div className="bg-[#FFDA32] h-2.5 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 " id="progress-bar-4">
                            <div className="bg-[#FFDA32] h-2.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                    </div>


                </div>
            </div>

            <div className="bg-[#F8FAFC] rounded-md shadow-md p-4 flex flex-col md:flex-row items-center gap-4 my-10">
                <h3 className='font-bold inline-flex items-center gap-2'> <FontAwesomeIcon icon={faFilter} /> Filtering:</h3>
                <select className='block w-full p-4 shadow-lg rounded-md' name="guest" id="guest">
                    <option value="1">Recommended</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select className='block w-full p-4 shadow-lg rounded-md' name="guest" id="guest">
                    <option value="1">Traveler type</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <select className='block w-full p-4 shadow-lg rounded-md' name="guest" id="guest">
                    <option value="1">Rating</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input type="search" name="" id="" placeholder='Search Here' className='p-4 w-full border' />
            </div>

            {/* reviews */}
            <div className="grid md:grid-cols-4 gap-10 ">
                {reviews.map((review) => (
                    <React.Fragment key={review.id}>
                        <div className="inline-flex gap-4">
                            <div>
                                <Image
                                    src={review.avatar}
                                    width={50}
                                    height={50}
                                    alt={`Avatar of ${review.name}`}
                                />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#FFA432]' />
                                <FontAwesomeIcon icon={faStar} className='text-[#CFD9DE]' />
                                <p className="text-lg text-bold">
                                    {review.name}
                                    <FontAwesomeIcon
                                        icon={faCheckDouble}
                                        className="text-[#7BBCB0] px-2"
                                    />
                                </p>
                                <p className="text-black text-opacity-40">{review.date}</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="font-bold text-xl">{review.reviewTitle}</h3>
                            <p className="py-4">{review.reviewText}</p>
                        </div>
                        <div className="inline-flex md:justify-end">
                            <p>
                                Helpful? <span className="text-[#7BBCB0]">Yes</span>
                            </p>
                        </div>
                    </React.Fragment>
                ))}
            </div>


        </div>
    )
}

export default CustomerReview