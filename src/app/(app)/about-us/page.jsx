import React from 'react'
import AboutUs from '@/components/about/AboutUs'
import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'

function page() {
  return (
    <div>
      <Navbar/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default page