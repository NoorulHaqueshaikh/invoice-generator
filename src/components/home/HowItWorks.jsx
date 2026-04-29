import React from 'react';

const stepsData = [
  {
    step: '1',
    title: 'Enter Business Details',
    description: 'Input your company information, upload your logo, and add your client\'s billing details. No sign-up required.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    step: '2',
    title: 'Add Items & Taxes',
    description: 'Add your products or services, apply discounts, and let our system automatically calculate GST and subtotals instantly.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: '3',
    title: 'Download & Send',
    description: 'Generate a highly professional, pristine PDF invoice with one click. Ready to be emailed directly to your clients.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
];

function HowItWorks() {
  return (
    <section className="py-24 bg-[#F9FAFB]  overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl relative inline-block">
            Create an invoice in 
            <span className="relative inline-block ml-3 text-[#2563EB]">
              3 simple steps
              {/* Sketchy Underline */}
              <svg 
                className="absolute w-full h-3 -bottom-1 left-0 text-[#2563EB]/40" 
                viewBox="0 0 400 12" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M2 9.5C102 3.5 202 2.5 398 8" 
                  stroke="currentColor" 
                  strokeWidth="4" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We've streamlined the billing process so you can spend less time doing paperwork and more time growing your business.
          </p>
        </div>

        {/* Connected Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Connecting Line (Hidden on Mobile, Visible on Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16.5%] w-[67%] h-0.5 bg-[#DBEAFE] z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {stepsData.map((stepItem, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-center text-center group"
              >
                
                {/* Mobile Connecting Line (Visible only on mobile between steps) */}
                {index !== stepsData.length - 1 && (
                  <div className="md:hidden absolute top-24 left-1/2 w-0.5 h-16 bg-[#DBEAFE] -translate-x-1/2 z-0"></div>
                )}

                {/* Icon Container with Step Number Badge */}
                <div className="relative mb-8 z-10">
                  {/* Outer Ring */}
                  <div className="w-24 h-24 rounded-full bg-white border-[6px] border-[#DBEAFE] flex items-center justify-center text-[#2563EB] group-hover:border-[#2563EB] group-hover:bg-[#DBEAFE]/30 transition-all duration-300">
                    {stepItem.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#2563EB] text-white flex items-center justify-center text-sm font-bold shadow-sm">
                    {stepItem.step}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="px-4">
                  <h3 className="text-xl font-bold text-[#111827] mb-3">
                    {stepItem.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        {/* Call to Action Button */}
        <div className="mt-20 text-center">
          <a 
            href="#invoice-top" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-300 bg-[#2563EB] rounded-xl hover:bg-[#1e4eb8] shadow-sm hover:shadow-xl hover:shadow-[#2563EB]/20 hover:-translate-y-1"
          >
            Create Invoice Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;