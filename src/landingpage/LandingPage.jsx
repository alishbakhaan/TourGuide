import CityTour from '@/landingpage/CityTour'
import Explore from '@/landingpage/Explore'
import Featured from '@/landingpage/Featured'
import Gallery from '@/landingpage/Gallery'
import Guests from '@/landingpage/Guests'
import HeroSection from '@/landingpage/HeroSection'
import Stories from '@/landingpage/Stories'
import Trending from '@/landingpage/Trending'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
        <HeroSection/>
        <Guests/>
        <Explore/>
        <Trending/>
        <Featured/>
        <CityTour/>
        <Gallery/>
        <Stories/>
    </div>
  )
}

export default LandingPage