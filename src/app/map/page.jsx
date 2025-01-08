import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>        
    <Link href={'/map'}><p className='text-[#7BBCB0] font-bold underline underline-offset-1 pb-4 text-xl'>Open in Google Maps </p></Link>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28950.535519399065!2d67.03904657431636!3d24.90422509999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f221645b6a3%3A0x2282034c7450e7ea!2sRocket%20Tourism!5e0!3m2!1sen!2s!4v1736151534151!5m2!1sen!2s"
      className='w-full h-[400px]' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
  )
}

export default page