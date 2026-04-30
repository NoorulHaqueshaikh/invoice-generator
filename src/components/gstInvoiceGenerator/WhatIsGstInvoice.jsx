import React from 'react';

function WhatIsGstInvoice() {
  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden" aria-labelledby="what-is-gst-heading">
      
      {/* Very subtle background light flare for a premium feel */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Simple Explanation (SEO Gold Content) */}
          <div className="w-full lg:w-1/2">
            
            {/* Elegant Overline */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-[#2563EB] rounded-full"></div>
              <span className="text-[#2563EB] text-sm font-bold tracking-widest uppercase">
                Billing Basics
              </span>
            </div>

            <h2 
              id="what-is-gst-heading" 
              className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight mb-6 leading-tight"
            >
              What exactly is a <br/>
              <span className="text-[#2563EB]">GST Invoice?</span>
            </h2>
            
            <p className="text-lg text-[#4B5563] leading-relaxed mb-6 font-medium">
              In simple terms, a GST invoice is an official commercial bill provided by a seller to a buyer. It acts as proof of a transaction and guarantees that the correct taxes were applied according to Indian law.
            </p>
            
            {/* Premium Callout Box */}
            <div className="mt-8 bg-blue-50/80 border-l-4 border-[#2563EB] p-5 rounded-r-xl shadow-sm">
              <div className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#2563EB] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-[#111827] leading-relaxed">
                  <strong>Compliance Note:</strong> If your business is GST-registered, you are legally required to issue these specific invoices. Unlike generic receipts, a valid GST invoice must contain strict mandatory fields.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Layered UI Cards */}
          <div className="w-full lg:w-1/2 relative">
            
            {/* Decorative Offset Background Block */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>

            <div className="space-y-4">
              
              {/* Point 1 */}
              <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 relative overflow-hidden">
                  <span className="absolute text-5xl font-black opacity-10 -right-2 -bottom-2">1</span>
                  <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">GSTIN Integration</h3>
                  <p className="text-[#4B5563] leading-relaxed text-sm sm:text-base">
                    It must display your unique 15-digit GST Identification Number, as well as your client's GSTIN for seamless B2B transactions.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 relative overflow-hidden">
                  <span className="absolute text-5xl font-black opacity-10 -right-2 -bottom-2">2</span>
                  <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">Clear Tax Breakdown</h3>
                  <p className="text-[#4B5563] leading-relaxed text-sm sm:text-base">
                    It transparently splits the total tax into CGST (Central), SGST (State), or IGST (Integrated), so everyone knows exactly what is being charged.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-100 transition-all duration-300 flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300 relative overflow-hidden">
                  <span className="absolute text-5xl font-black opacity-10 -right-2 -bottom-2">3</span>
                  <svg className="w-6 h-6 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827] mb-2 group-hover:text-[#2563EB] transition-colors">Place of Supply</h3>
                  <p className="text-[#4B5563] leading-relaxed text-sm sm:text-base">
                    It legally identifies the destination state of the goods or services, which is strictly required to determine the correct tax rules.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhatIsGstInvoice;