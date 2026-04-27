"use client";
import React, { useState } from 'react';


function FAQ({ data }) {
  // Initialize state with an array of all indices so every FAQ is open by default
  const [openIndices, setOpenIndices] = useState(data.map((_, index) => index));

  const toggleFAQ = (index) => {
    if (openIndices.includes(index)) {
      // If it's already open, remove it from the array to close it
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      // If it's closed, add it to the array to open it
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl">
            Frequently Asked Questions (FAQ)
          </h2>
        </div>

        {/* FAQ Accordion Container */}
        <div className="space-y-4">
          {data.map((faq, index) => {
            // Check if the current index is in the openIndices array
            const isOpen = openIndices.includes(index);

            return (
              <div 
                key={index} 
                className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300"
              >
                {/* Question Header (Clickable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-bold text-[#111827]">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Icons */}
                  <span className="ml-4 flex-shrink-0 text-[#111827]">
                    {isOpen ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer Body (Conditionally rendered with a top border) */}
                {isOpen && (
                  <div className="px-6 py-5 border-t border-[#E5E7EB] bg-white">
                    <p className="text-gray-600 leading-relaxed text-base">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default FAQ;