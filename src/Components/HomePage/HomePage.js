import React from 'react'

import HomePageJumbotron from './HomePageJumbotron'
import TopSellingProducts from './TopSellingProducts'
import AboutUs from './AboutUs'
import Testimonials from './Testimonials'

export default function HomePage() {
  return (
    <div>
        <HomePageJumbotron></HomePageJumbotron>
        <TopSellingProducts></TopSellingProducts>
        <AboutUs></AboutUs>
        <Testimonials></Testimonials>
    </div>
  )
}
