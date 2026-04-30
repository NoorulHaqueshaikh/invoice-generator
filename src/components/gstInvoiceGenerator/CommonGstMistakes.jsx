import React from 'react';

function CommonGstMistakes() {
  const mistakes = [
    {
      id: "wrong-tax-type",
      title: "Wrong GST Type (IGST vs CGST/SGST)",
      description: "Applying state taxes (CGST/SGST) to an out-of-state client, or integrated tax (IGST) to a local client, is the #1 reason invoices get rejected by accounting departments.",
      uiSnippet: (
        <div className="flex items-center gap-3 bg-red-50 text-red-700 p-3 rounded-lg border border-red-100 text-sm font-medium">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          Error: Applied CGST (9%) to Inter-state supply. Use IGST (18%).
        </div>
      )
    },
    {
      id: "missing-gstin",
      title: "Missing or Incorrect GSTIN",
      description: "A simple typo in the 15-digit GSTIN, or forgetting to include the buyer's GSTIN entirely, will block your client from claiming their Input Tax Credit (ITC).",
      uiSnippet: (
        <div className="space-y-1">
          <label className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Client GSTIN</label>
          <div className="bg-white border border-red-300 rounded-lg p-2.5 flex justify-between items-center shadow-sm">
            <span className="font-mono text-gray-800 text-sm">27AAAAA0000A1Z</span>
            <span className="text-red-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <p className="text-xs text-red-500 font-medium mt-1">Must be exactly 15 characters long.</p>
        </div>
      )
    },
    {
      id: "calculation-errors",
      title: "Incorrect Tax Calculation",
      description: "Manually calculating percentages on the grand total instead of line-by-line often leads to fractional rounding errors. Even a 1 Rupee discrepancy breaks compliance.",
      uiSnippet: (
        <div className="flex flex-col gap-2 bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Manual Excel Math:</span>
            <span className="text-red-500 line-through font-mono">₹ 1,180.55</span>
          </div>
          <div className="w-full h-px bg-gray-100"></div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-900 font-bold">System Auto-Math:</span>
            <span className="text-emerald-600 font-mono font-bold">₹ 1,180.00</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#F9FAFB] border-t border-gray-100" aria-labelledby="mistakes-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Sticky Header Area */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6 border border-red-200">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 
              id="mistakes-heading" 
              className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-4"
            >
              Common <br className="hidden lg:block"/> GST Invoice Mistakes
            </h2>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              Manual billing is risky. Small formatting errors can lead to delayed payments and rejected tax filings. Here is what to avoid (and how our generator fixes it automatically).
            </p>
          </div>

          {/* Right Column: List of Mistakes */}
          <div className="w-full lg:w-2/3 space-y-6">
            {mistakes.map((mistake, index) => (
              <div 
                key={mistake.id} 
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm flex flex-col md:flex-row gap-8 items-start"
              >
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-xs font-bold">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-[#111827]">{mistake.title}</h3>
                  </div>
                  <p className="text-[#4B5563] leading-relaxed">
                    {mistake.description}
                  </p>
                </div>

                {/* UI Snippet (Visual Example) */}
                <div className="w-full md:w-1/2 bg-[#F9FAFB] rounded-xl p-5 border border-gray-100 flex items-center justify-center min-h-[120px]">
                  <div className="w-full max-w-[280px]">
                    {mistake.uiSnippet}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CommonGstMistakes;