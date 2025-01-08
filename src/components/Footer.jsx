import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#13253F] text-white '>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:place-content-center max-w-7xl md:m-auto p-10 md:p-20">

        <div>
          <h3 className='text-opacity-80 text-white'>Language</h3>
          <select name="cars" id="cars" className='text-white text-opacity-60 bg-transparent border border-white border-opacity-30 rounded-sm px-4 py-2 my-4 w-3/4'>
            <option className='text-black' value="volvo">English (UK)</option>
            <option className='text-black' value="saab">Urdu (PAK)</option>
            <option className='text-black' value="mercedes">France (FN)</option>
            <option className='text-black' value="audi">Hindi (IN)</option>
          </select>

          <h3 className='text-opacity-80 text-white'>Currency</h3>
          <select name="cars" id="cars" className='text-white text-opacity-60 bg-transparent border border-white border-opacity-30 rounded-sm px-4 py-2 my-4 w-3/4'>
            <option className='text-black' value="volvo">U.S. Dollar ($)</option>
            <option className='text-black' value="saab">P.K.R (pkr)</option>
            <option className='text-black' value="mercedes">G.R (FN)</option>
            <option className='text-black' value="audi">I.N (inr)</option>
          </select>
        </div>

        <div>
          <h3 className='text-opacity-80 text-white'>Company</h3>
          <ul className=' list-none py-2'>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> About us</li>           </Link>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> Blog</li>                 </Link>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> Press Room</li> </Link>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> Career</li>              </Link>
          </ul>
        </div>

        <div>
          <h3 className='text-opacity-80 text-white'>Help</h3>
          <ul className=' list-none py-2'>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> Contact us</li>           </Link>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> FAQs</li>                 </Link>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> Terms and conditions</li> </Link>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> Privacy policy</li>       </Link>
            <Link href={'/'}> <li className='py-1 tracking-wider text-opacity-60 text-white'> Sitemap</li>              </Link>
          </ul>
        </div>

        <div>
          <h3 className='text-opacity-80 text-white'>Payment methods possible</h3>
          <div className='grid grid-cols-5 gap-2 max-w-xs py-8'>
            <Image
              src={'/footericon (1).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (2).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (3).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (4).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (5).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (6).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (7).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (8).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (9).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
            <Image
              src={'/footericon (10).png'}
              width={50}
              height={50}
              alt='icon'
              className='object-contain'
            />
          </div>
          <h3 className='text-opacity-80 text-white'>Company</h3>
          <p className='text-opacity-60 text-white py-2'>Become a Tour guide for Us</p>

        </div>


      </div>
    <div className='bg-black bg-opacity-40 p-5 flex flex-wrap items-center gap-5 justify-around'>

  <div>
    <p className='text-white text-opacity-60 text-center'>Copyright 2021 Tour Guide. All Rights Reserved</p>
  </div>

  <div className='inline-flex gap-2'>
  <Image
              src={'/footersvg (1).png'}
              width={40}
              height={40}
              alt='icon'
              className='object-contain'
            />
  <Image
              src={'/footersvg (2).png'}
              width={40}
              height={40}
              alt='icon'
              className='object-contain'
            />
  <Image
              src={'/footersvg (3).png'}
              width={40}
              height={40}
              alt='icon'
              className='object-contain'
            />
  <Image
              src={'/footersvg (4).png'}
              width={40}
              height={40}
              alt='icon'
              className='object-contain'
            />
  </div>

</div>
    </div>
  )
}

export default Footer