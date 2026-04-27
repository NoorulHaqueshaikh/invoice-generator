import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#F9FAFB] relative z-20">
      
      {/* Custom SVG Curve (Upward Dome)
        This creates an upward bulging curve (a dome/arch) instead of a downward dip.
      */}
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="w-full h-[60px] md:h-[120px] block text-[#2563EB]"
      >
        {/* Path starts at bottom-left, curves UP to top-center, then down to bottom-right, and closes at the bottom */}
        <path 
          d="M0,120 Q600,0 1200,120 Z" 
          fill="currentColor" 
        />
      </svg>

      {/* Main Footer Container */}
      <div className="bg-[#2563EB] text-white pt-4 pb-8 shadow-[0_-15px_40px_rgba(37,99,235,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Section: Logo & Description */}
          <div className="max-w-4xl mb-12 mx-auto text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6 cursor-pointer">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-2xl font-bold tracking-tight flex items-center text-white">
                andicode<span className="font-normal opacity-90 ml-1">invoice</span>
              </span>
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-blue-100 text-sm md:text-base leading-relaxed">
              <p>
                Andicode Invoice is a powerful, connected billing platform that simplifies the process of creating, sending, and managing professional invoices for businesses of all sizes.
              </p>
              <p>
                With our platform, freelancers and agencies can instantly generate accurate GST and Non-GST invoices without the hassle of manual spreadsheet calculations. We automatically handle complex tax setups, subtotaling, and PDF generation so you can focus on growing your business.
              </p>
              <p>
                In addition to fast invoice creation, we offer built-in tools for tracking your billing history, managing client details, and ensuring 100% compliance with Indian invoicing standards—all from one secure dashboard.
              </p>
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="flex flex-col items-center justify-center mb-12 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-blue-100">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="text-blue-300 hidden sm:inline">|</span>
              <a href="/about" className="hover:text-white transition-colors">About Us</a>
              <span className="text-blue-300 hidden sm:inline">|</span>
              <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            </div>
          </div>

          {/* Divider */}
          <hr className="border-blue-400/40 mb-8 max-w-4xl mx-auto" />

          {/* Bottom Section: Copyright & Socials */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <p className="text-blue-200 text-sm text-center md:text-left">
              Andicode Invoice All rights reserved © {new Date().getFullYear()}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-5">
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/noorul-haque-shaikh-7a33942b7" className="text-blue-200 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;