"use client";
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is an online invoice generator?",
    answer: "An online invoice generator is a free, web-based tool that helps businesses, freelancers, and agencies create professional invoices in seconds. It eliminates the need for manual preparation in spreadsheets or Word documents. You can customize templates, auto-calculate totals, and instantly produce a polished PDF ready to send to your clients."
  },
  {
    question: "Can I create both GST and Non-GST invoices?",
    answer: "Yes, absolutely! Our platform is specifically built for Indian businesses. You can seamlessly switch between GST and Non-GST billing formats. For GST invoices, the generator automatically handles complex tax calculations including CGST, SGST, and IGST based on your state and client details, ensuring you remain 100% compliant."
  },
  {
    question: "Which is the best free invoice generator in India?",
    answer: "While there are many tools available, ours is heavily optimized for fast, frictionless billing specifically for the Indian market. It is considered a top-tier choice because it requires no login, handles precise GST auto-calculations, and allows unlimited, high-quality PDF downloads completely for free."
  },
  {
    question: "Do I need to sign up to make an invoice for free?",
    answer: "No login or account creation is required to use our free invoice generator. We believe in saving you time. You can instantly start entering your business details, adding your line items, and downloading your invoice without any friction or hidden paywalls."
  },
  {
    question: "Can I add my company logo and signature?",
    answer: "Yes, our free invoice maker allows you to easily upload your brand logo and attach a digital signature. Customizing your invoice with your branding helps you maintain a highly professional identity and builds trust with your clients on every bill you send."
  },
  {
    question: "Is my financial data secure on this platform?",
    answer: "Your privacy is our top priority. All invoice generation happens locally within your browser. We do not store your sensitive financial data, client information, or business details on our servers, ensuring your billing information remains completely private and secure."
  },
  {
    question: "How do I share the generated invoice with my clients?",
    answer: "Once you have filled in all the necessary details and reviewed the auto-calculations, you can instantly download your invoice as a high-quality, print-ready PDF document. From there, you can easily attach it to an email or send it directly to your client via WhatsApp."
  }
];

function FAQ() {
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
        </div>

        {/* FAQ Accordion Container */}
        <div className="space-y-4">
          {faqData.map((faq, index) => {
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