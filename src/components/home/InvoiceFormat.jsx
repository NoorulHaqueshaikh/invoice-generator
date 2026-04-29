import React from 'react';

function InvoiceFormat() {
  const invoiceComponents = [
    {
      title: "Header & Invoice Number",
      description: "Every invoice must have a unique, sequential invoice number. This helps in professional record-keeping and is mandatory for GST filing in India. Be sure to include your company logo, the exact invoice date, and a clear \"Invoice\" label at the top."
    },
    {
      title: "Business & Client Details",
      description: "Clearly state the legal name, address, and contact details of both the seller and the buyer. For B2B transactions, including the GSTIN is essential. You must also specify the buyer's billing address and the place of supply to determine the correct tax type."
    },
    {
      title: "Itemized Description",
      description: "List each product or service provided clearly. For Indian compliance, adding HSN (for goods) or SAC (for services) codes is required for accurate tax classification. Don't forget to include the exact quantity, unit price, and any discounts applied to the items."
    },
    {
      title: "GST Breakdown",
      description: "Instead of just a total tax, show the exact tax split. Use CGST and SGST for intra-state sales (within your state), or IGST for sales made outside your home state. Clearly mention the tax rate percentage for each line item to ensure full compliance."
    }
  ];

  return (
    <section className="py-16 bg-transparent sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-aligned Title & Intro (Matching the screenshot) */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          What Should an Invoice Include? (India Guide)
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Creating a professional invoice is more than just listing prices. Follow this guide to ensure your billing is GST-compliant, business-ready, and helps you get paid faster without any tax compliance headaches.
        </p>

        {/* Text-Heavy Numbered List */}
        <div className="space-y-6">
          {invoiceComponents.map((component, index) => (
            <p key={index} className="text-gray-600 text-lg leading-relaxed">
              {index + 1}. <strong className="text-gray-900 font-semibold">{component.title}:</strong> {component.description}
            </p>
          ))}
        </div>

        {/* Optional: Pro Tip kept simple to match the clean aesthetic */}
        <div className="mt-10 p-5 bg-gray-50 border border-gray-200 rounded-lg">
          <p className="text-gray-700">
            <strong className="text-gray-900 font-semibold">Pro Tip:</strong> Always include your terms and conditions, payment deadlines, and bank details at the bottom of the invoice to avoid payment disputes.
          </p>
        </div>

      </div>
    </section>
  );
}

export default InvoiceFormat;