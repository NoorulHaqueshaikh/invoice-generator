"use client";
import React, { useState } from 'react';

const faqData = [
  {
    question: "What is an online invoice generator?",
    answer: "An online invoice generator is a web-based invoice maker that helps businesses, freelancers, and agencies create professional invoices instantly. You can add items, apply taxes, and download a ready-to-send PDF invoice without using Excel or Word."
  },
  {
    question: "Can I create GST and non-GST invoices in India?",
    answer: "Yes. This invoice generator is designed for Indian users and supports both GST and non-GST invoices. It automatically calculates CGST, SGST, or IGST based on your billing details, helping you create accurate and compliant invoices."
  },
  {
    question: "Do I need to sign up to create an invoice?",
    answer: "No signup is required to create and download invoices. You can instantly generate a free invoice without login. However, if you want to save and manage invoices (like tracking paid or unpaid status), you can use the optional save feature."
  },
  {
    question: "Can I save and manage my invoices?",
    answer: "Yes. You can save your invoices securely and access them later. This allows you to track payment status (paid or unpaid), manage records, and organize your billing efficiently."
  },
  {
    question: "Can I add my company logo and signature?",
    answer: "Yes, you can upload your company logo and add a digital signature to your invoice. This helps create a professional, branded invoice that builds trust with your clients."
  },
  {
    question: "Is this invoice generator free to use?",
    answer: "Yes, the invoice generator is completely free. You can create unlimited invoices and download high-quality PDF invoices without any hidden charges."
  },
  {
    question: "Is my data secure?",
    answer: "Your data is handled securely. Invoice generation can be done instantly without storing data. If you choose to save invoices, your data is stored securely so you can access and manage it later."
  },
  {
    question: "How do I share the invoice with my client?",
    answer: "After creating your invoice, you can download it as a high-quality PDF and share it بسهولة via email or messaging apps like WhatsApp."
  },
  {
    question: "Does this tool provide professional invoice templates?",
    answer: "Yes. The tool generates clean, modern, and business-ready invoice PDFs that are suitable for freelancers, agencies, and companies. The layout is designed to look professional and not generic."
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