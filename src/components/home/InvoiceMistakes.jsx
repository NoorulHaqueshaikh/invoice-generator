import React from 'react';

function InvoiceMistakes() {
  const mistakes = [
    {
      title: "Missing or Duplicate Invoice Numbers",
      description: "This is a bookkeeping nightmare and a major red flag for GST audits. Every invoice must have a unique, sequential tracking number. Without it, your accountant will struggle, and tax authorities may reject your filings."
    },
    {
      title: "Incorrect GST Application",
      description: "Charging local CGST and SGST for an out-of-state client instead of IGST (or vice versa) is a highly common error. This not only violates tax rules but also prevents your clients from claiming their Input Tax Credit (ITC) smoothly."
    },
    {
      title: "Vague or Missing Payment Terms",
      description: "Writing \"Due upon receipt\" often leads to delayed payments because it creates no sense of urgency for the client. Always state a clear, specific deadline, such as \"Net 15\" or \"Please pay by [Exact Date],\" and mention your late fee policy."
    },
    {
      title: "Manual Calculation Errors",
      description: "A simple typo in an Excel formula or a misplaced decimal can throw off your entire total. Undercharging directly hurts your profits, while overcharging damages your professional reputation and client trust."
    },
    {
      title: "Sending the Invoice Late",
      description: "If you wait two weeks after a project ends to send the bill, your client will take their time paying it. Strike while the iron is hot. Generate and email your invoice the moment the work or milestone is completed."
    }
  ];

  return (
    <section className="py-16 bg-transparent sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-aligned Title & Intro */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Common Invoice Mistakes to Avoid
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Even minor billing errors can delay your payments, irritate clients, and cause severe GST compliance issues. Avoid these frequent invoicing pitfalls to keep your cash flow healthy and your business looking professional.
        </p>

        {/* Text-Heavy Numbered List */}
        <div className="space-y-6">
          {mistakes.map((mistake, index) => (
            <p key={index} className="text-gray-600 text-lg leading-relaxed">
              <span className="text-red-500 font-bold mr-1">Mistake {index + 1}:</span> 
              <strong className="text-gray-900 font-semibold">{mistake.title}.</strong> {mistake.description}
            </p>
          ))}
        </div>

        {/* Action-Oriented Highlight Box */}
        <div className="mt-10 p-6 bg-green-50 border border-green-100 rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-sm">
          <p className="text-green-800 text-base sm:text-lg mb-4 sm:mb-0 sm:mr-6">
            <strong className="font-semibold">The Easy Fix:</strong> Using our automated invoice generator guarantees zero calculation errors, proper GST splitting, and perfectly sequential numbering every single time.
          </p>
          <a href="#" className="flex-shrink-0 w-full sm:w-auto text-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 shadow-sm hover:bg-green-700 transition-colors">
            Create Error-Free Invoice
          </a>
        </div>

      </div>
    </section>
  );
}

export default InvoiceMistakes;