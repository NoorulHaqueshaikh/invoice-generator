import React from 'react';

const featuresData = [
  {
    prefix: 'Create',
    highlight: 'GST/Non-GST',
    suffix: 'invoices',
  },
  {
    prefix: 'Add',
    highlight: 'discounts, shipping, and notes',
    suffix: '',
  },
  {
    prefix: 'Include',
    highlight: 'company logos and branding',
    suffix: '',
  },
  {
    prefix: 'Save time with',
    highlight: 'auto-calculation',
    suffix: '',
  },
  {
    prefix: 'Download or print',
    highlight: 'PDF invoices instantly',
    suffix: '',
  },
  {
    prefix: 'Works on',
    highlight: 'desktop, tablet, and mobile',
    suffix: '',
  },
];

function Features() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-[#111827] sm:text-4xl md:text-5xl relative inline-block">
            Key Features of Our Online Invoice Generator
            
            {/* Sketchy Underline matching your Primary Blue palette */}
            <svg 
              className="absolute w-full h-3 -bottom-2 left-0 text-[#2563EB]/40" 
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
          </h2>
        </div>

        {/* Clean 3x2 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 md:p-8 border border-[#E5E7EB] hover:border-[#2563EB]/50 hover:shadow-lg hover:shadow-[#2563EB]/5 transition-all duration-300 flex items-center h-full"
            >
              <p className="text-[#111827] text-lg">
                {feature.prefix && `${feature.prefix} `}
                {/* Dynamically bolding the specific keywords just like the image */}
                <span className="font-bold">{feature.highlight}</span>
                {feature.suffix && ` ${feature.suffix}`}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default Features;