"use client";
import React, { useState } from 'react';

function FAQ() {
  // SEO-Optimized GST FAQ Data
  const faqData = [
    {
      question: "What is a GST invoice?",
      answer: "A GST invoice is a legal commercial document issued by a registered seller to a buyer. It details the goods or services provided, the total amount due, and explicitly shows the specific GST components (CGST, SGST, or IGST) applied to the transaction."
    },
    {
      question: "Is issuing a GST invoice mandatory?",
      answer: "Yes. If your business is registered under the GST regime in India, you are legally mandated by the government to issue a GST-compliant invoice for every taxable sale of goods or services."
    },
    {
      question: "Can I create a GST invoice without a GSTIN?",
      answer: "No. A valid 15-digit GSTIN (Goods and Services Tax Identification Number) is a legally mandatory field on a GST invoice. If you are not GST-registered, you should issue a standard 'Bill of Supply' or regular commercial invoice without charging any tax."
    },
    {
      question: "What is the difference between IGST, CGST, and SGST?",
      answer: "CGST (Central) and SGST (State) are charged together on intra-state sales (when the buyer and seller are in the same state). IGST (Integrated) is a single tax charged on inter-state sales (when the buyer and seller are in different states)."
    },
    {
      question: "What are HSN and SAC codes? Do I need them?",
      answer: "HSN (Harmonized System of Nomenclature) codes are used to classify physical goods, while SAC (Services Accounting Code) is used for services. They are mandatory classification codes required by the government to ensure the correct tax rate is applied to your items."
    },
    {
      question: "Is this GST invoice generator free to use?",
      answer: "Yes, our GST invoice generator is 100% free. You can instantly enter your details, automatically calculate complex state taxes, and download professional, compliance-ready PDFs without any hidden fees or software subscriptions."
    }
  ];

  // Initialize state with an array of all indices so every FAQ is open by default
  const [openIndices, setOpenIndices] = useState(faqData.map((_, index) => index));

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
          <p className="mt-4 text-lg text-[#4B5563]">
            Everything you need to know about generating compliant GST bills in India.
          </p>
        </div>

        {/* FAQ Accordion Container */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
            // Check if the current index is in the openIndices array
            const isOpen = openIndices.includes(index);

            return (
              <div 
                key={index} 
                className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Question Header (Clickable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-bold text-[#111827]">
                    {faq.question}
                  </span>
                  
                  {/* Plus / Minus Icons - Restored to #111827 */}
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
                    <p className="text-[#4B5563] leading-relaxed text-base">
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