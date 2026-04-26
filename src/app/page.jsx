import InvoiceGenerator from '@/components/home/InvoiceGenerate'
import Navbar from '@/components/home/Navbar'
import Features from '@/components/home/Features'
import React from 'react'
import HowItWorks from '@/components/home/HowItWorks'
import FAQ from '@/components/home/FAQ'
import Footer from '@/components/home/Footer' 

function page() {
  return (
    <div>
      <Navbar/>
      <InvoiceGenerator/>
      <Features/>
      <HowItWorks/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default page