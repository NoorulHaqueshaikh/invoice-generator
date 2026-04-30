import React from 'react';

function GstSpecificFeatures() {
  const features = [
    {
      title: "Automatic GST Calculation",
      description: "Instantly calculate CGST, SGST, and IGST based on state supply rules. Our intelligent engine automatically detects inter-state vs. intra-state transactions, ensuring your tax math is 100% accurate without any manual spreadsheet formulas.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "GSTIN Support",
      description: "Easily add your business GST number and your client's GST details. We format the GSTINs perfectly on the final invoice, which is crucial for seamless B2B transactions and hassle-free Input Tax Credit (ITC) claims.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
        </svg>
      )
    },
    {
      title: "HSN/SAC Code Support",
      description: "Seamlessly include product and service classifications directly on your bill. Whether you are selling physical goods or digital services, our dedicated HSN/SAC columns keep your invoices fully compliant with government mandates.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
    },
    {
      title: "Tax Breakdown in PDF",
      description: "Generate a clear, compliant GST split in the final document. Our professional PDFs include dedicated tax tables showing exactly how much CGST, SGST, or IGST was applied per item, offering complete transparency to your clients.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#F9FAFB]" aria-labelledby="gst-features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            id="gst-features-heading" 
            className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-4"
          >
            Features of Our <span className="text-[#2563EB]">GST Invoice Generator</span>
          </h2>
          <p className="text-lg text-[#4B5563] font-medium leading-relaxed">
            Built strictly for Indian tax compliance. No generic tools, just exactly what your business needs to stay professional and accurate.
          </p>
        </div>

        {/* Features Grid - Upgraded to pure white cards on gray bg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Subtle top border accent on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:from-[#2563EB] group-hover:to-[#60A5FA] transition-all duration-500"></div>
              
              {/* Icon Container */}
              <div className="w-14 h-14 bg-blue-50 text-[#2563EB] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4B5563] leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GstSpecificFeatures;