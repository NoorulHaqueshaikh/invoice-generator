"use client";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-50 bg-[#2563EB] transition-all duration-300 ${
        scrolled ? "shadow-md shadow-black/10" : "shadow-none"
      }`}
    >
      
      {/* Navbar Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <a href="/" className="text-xl font-bold tracking-tight text-white flex items-center">
              andicode<span className="font-normal opacity-90 ml-1">invoice</span>
            </a>
          </div>

          {/* Desktop Menu - About Us */}
          <div className="hidden md:flex items-center">
            <a 
              href="/about" 
              className="text-white hover:text-[#111827] hover:bg-[#DBEAFE] px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              About Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 p-2 rounded-md transition-colors focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#2563EB] relative z-10 border-t border-white/10 shadow-inner">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="/about" 
              className="block px-3 py-2 text-white hover:bg-[#1e4eb8] rounded-md text-base font-medium transition-colors"
            >
              About Us
            </a>
          </div>
        </div>
      )}
      
    </nav>
  );
}

export default Navbar;