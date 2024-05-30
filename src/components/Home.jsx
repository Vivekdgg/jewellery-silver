import React from 'react'
import Hero from './layout/Hero'
import FeaturedCollections from './layout/FeaturedCollections';
import Aboutus from './layout/Aboutus';
import Testimonials from './layout/Testimonials';
import NewsletterSignup from './layout/NewsletterSignup';
import  Carousel  from './layout/carousel';
const Home = () => {
  return (
    <>
     <Hero></Hero>
     <Carousel></Carousel>
    <FeaturedCollections />
    <Aboutus></Aboutus>
    <Testimonials></Testimonials>
    <NewsletterSignup></NewsletterSignup>
    </>
   
  )
}

export default Home