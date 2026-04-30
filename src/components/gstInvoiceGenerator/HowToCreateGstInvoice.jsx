import React from 'react';

function HowToCreateGstInvoice() {
  const steps = [
    {
      num: "1",
      title: "Enter business details + GSTIN",
      description: "Start by adding your company name, registered address, contact info, and your 15-digit GSTIN. This establishes your business as a registered tax-paying entity on the document.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      num: "2",
      title: "Add client details & place of supply",
      description: "Input your buyer's information. Crucially, select the 'Place of Supply' state. Our system uses this to automatically determine whether to apply IGST or CGST & SGST.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      num: "3",
      title: "Add items with GST rates",
      description: "List your products or services, include their HSN/SAC codes, and select the applicable GST rate (0%, 5%, 12%, 18%, or 28%). All tax math is calculated instantly in the background.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      num: "4",
      title: "Generate and download invoice",
      description: "Review the totals, dynamic tax split, and final amount. Once verified, click generate to instantly download a professional, compliance-ready PDF to send to your client.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] relative overflow-hidden" aria-labelledby="how-to-create-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-0.5 bg-[#2563EB] rounded-full"></div>
            <span className="text-[#2563EB] text-sm font-bold tracking-widest uppercase">
              Quick Guide
            </span>
            <div className="w-10 h-0.5 bg-[#2563EB] rounded-full"></div>
          </div>
          
          <h2 
            id="how-to-create-heading" 
            className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-4"
          >
            How to Create <span className="text-[#2563EB]">GST Invoice</span> (Step-by-Step)
          </h2>
          <p className="text-lg text-[#4B5563] font-medium leading-relaxed">
            Generate a flawless, tax-compliant invoice in under 60 seconds.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Continuous Vertical Line for Desktop/Tablet */}
          <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-0.5 bg-blue-100"></div>

          <div className="space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col sm:flex-row items-start gap-6 group">
                
                {/* Step Indicator / Icon Container */}
                <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-white border-2 border-blue-100 shadow-sm group-hover:border-[#2563EB] group-hover:shadow-md group-hover:shadow-[#2563EB]/20 transition-all duration-300">
                  <div className="absolute -top-3 -right-3 w-7 h-7 bg-[#2563EB] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
                    {step.num}
                  </div>
                  <div className="text-[#2563EB]">
                    {step.icon}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md group-hover:bg-white group-hover:border-blue-100 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#2563EB] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#4B5563] leading-relaxed">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#invoice-top" 
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2563EB] text-white rounded-lg font-bold text-lg hover:bg-[#1e4eb8] transition-colors shadow-lg shadow-blue-500/30"
          >
            Create Your First Invoice Now
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

export default HowToCreateGstInvoice;