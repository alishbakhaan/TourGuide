import React from 'react'
import { Volkhov } from 'next/font/google';
import Map from '@/app/map/page';
const volkhov = Volkhov({
    weight: ['400', '700'],
    subsets: ['latin'],
});

const Text = () => {
    return (
        <>
            <div className='grid xl:grid-cols-3 px-20 xl:px-40'>
                <div className="col-span-2">
                    <h1
                        className={`${volkhov.className} text-Black text-4xl font-bold tracking-wider max-w-3xl py-4`} >Description
                    </h1>

                    <div className='text-black text-opacity-60 text-lg space-y-10'>
                        <p>
                            See the highlights of London via 2 classic modes of transport on this half-day adventure. First, you will
                            enjoy great views of Westminster Abbey, the Houses of Parliament, and the London Eye, as you meander through
                            the historic streets on board a vintage double decker bus.
                        </p>

                        <p>Continue to see St. Paul’s Cathedral, Sir Christopher Wren’s architectural masterpiece, where Admirals
                            Nelson and Wellington are buried, and Princess Diana and Prince Charles got married. Continue to the Tower of
                            London, built nearly 1,000 years ago during the reign of William the Conqueror.</p>

                        <p>Home to the Crown Jewels, the Tower is protected by the famous Beefeaters, and the imposing palace has been
                            used as a fortress and a prison throughout its history. Your guide will take you to Traitors Gate, where prisoners
                            entered the Tower for the last time.</p>

                        <p>Next, take a short trip along the River Thames, passing Shakespeare’s Globe, Cleopatra’s Needle, and London Bridge,
                            before arriving at Westminster Pier. Rejoin the bus and head for Buckingham Palace. Make your way to the perfect spot
                            to watch the world famous Changing of the Guard ceremony as the soldiers, dressed in their fabulous tunics and busbies,
                            march to military music.</p>
                    </div>

                    <div className="border-t">
                        <h1
                            className={`${volkhov.className} text-Black text-2xl font-bold max-w-3xl py-4`} >Activity
                        </h1>
                        <h3
                            className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >What you will do
                        </h3>
                        <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                            <li>Discover London on board a classic Routemaster vintage double decker bus</li>
                            <li>Cruise down the River Thames</li>
                            <li>See the Changing of the Guard</li>
                            <li>Go to Westminster Abbey</li>
                            <li>Listen to the chimes of Big Ben and see the Houses of Parliament</li>
                        </ul>
                    </div>

                    <div className="border-t">
                        <h1
                            className={`${volkhov.className} text-Black text-2xl font-bold max-w-3xl py-4`} >What is included / not  included
                        </h1>

                        <div className="grid md:grid-cols-2">
                            <div>
                                <h3
                                    className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >Includes
                                </h3>
                                <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                                    <li>Double-decker Routemaster tour</li>
                                    <li>Short trip along the River Thames</li>
                                    <li>Changing of the Guard</li>
                                    <li>Gratuities</li>
                                </ul>
                            </div>
                            <div>
                                <h3
                                    className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >Not Includes
                                </h3>

                                <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                                    <li>Double-decker Routemaster tour</li>
                                    <li>Short trip along the River Thames</li>
                                    <li>Changing of the Guard</li>
                                    <li>Gratuities</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t">
                        <h1
                            className={`${volkhov.className} text-Black text-2xl font-bold max-w-3xl py-4`} >Safety
                        </h1>
                        <h3
                            className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >Health precautions
                        </h3>
                        <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                            <li>All required protective equipment is provided</li>
                            <li>All areas that customers touch are frequently cleaned</li>
                            <li>You must keep social distance while in vehicles</li>
                            <li>The number of visitors is limited to reduce crowds</li>
                        </ul>
                    </div>

                    <div className="border-t">
                        <h1
                            className={`${volkhov.className} text-Black text-2xl font-bold max-w-3xl py-4`} >Details
                        </h1>

                        <div className="grid md:grid-cols-3">
                            <div>
                                <h3
                                    className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >Language
                                </h3>
                                <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                                    <li>English</li>
                                    <li>French</li>
                                </ul>
                            </div>
                            <div>
                                <h3
                                    className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >Duration
                                </h3>

                                <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                                    <li>2 hours</li>
                                </ul>
                            </div>
                            <div>
                                <h3
                                    className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >Number of people
                                </h3>

                                <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                                    <li>5 Poeple</li>
                                </ul>
                            </div>
                        </div>

                        <h3
                            className={`${volkhov.className} text-Black text-xl font-bold max-w-3xl`} >Meeting point address
                        </h3>
                        <ul className=' list-disc text-black text-lg text-opacity-60 font-bold space-y-2 py-4'>
                            <li>Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road).
                                It's opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery.
                                Look for a guide wearing SMT attire and holding a red SMT flag</li>
                        </ul>
                    </div>
                    {/* map */}

                    <Map />
                </div>
               
            </div>
        </>
    )
}

export default Text