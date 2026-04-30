import React from 'react';

function GstInvoiceFormat() {
  return (
    <section className="py-24 bg-[#F9FAFB]" aria-labelledby="gst-format-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-20">
          <p className="text-[#2563EB] text-sm font-bold tracking-widest uppercase mb-3">
            Compliance Requirements
          </p>
          <h2 
            id="gst-format-heading" 
            className="text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight mb-4"
          >
            The Anatomy of a GST Invoice
          </h2>
          <p className="text-lg text-[#4B5563] leading-relaxed max-w-2xl">
            To ensure your invoices are legally valid for Input Tax Credit (ITC) claims, the Indian government strictly requires these four elements on every bill you issue.
          </p>
        </div>

        {/* Editorial Feature List */}
        <div className="space-y-8">
          
          {/* Requirement 1: GSTIN */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200 shadow-sm">
            {/* Custom UI Visual */}
            <div className="w-full md:w-5/12 bg-[#F9FAFB] rounded-xl p-6 flex items-center justify-center border border-gray-100 min-h-[160px]">
              <div className="w-full max-w-[240px] space-y-2">
                <div className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Billed By</div>
                <div className="bg-white border border-gray-200 p-3 rounded-lg flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 bg-blue-50 rounded flex items-center justify-center text-[#2563EB] font-bold border border-blue-100">B</div>
                  <div>
                    <div className="text-sm font-bold text-[#111827]">Your Business</div>
                    {/* Using 27 (Maharashtra) state code as a realistic example */}
                    <div className="text-xs text-gray-500 font-mono mt-0.5">GSTIN: <span className="text-[#111827] font-semibold">27AAAAA0000A1Z5</span></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold">1</span>
                <h3 className="text-xl font-bold text-[#111827]">Supplier & Buyer GSTIN</h3>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                The 15-digit alphanumeric tax identification number is non-negotiable. For B2B transactions, both the supplier's and the recipient's GSTIN must be clearly printed.
              </p>
            </div>
          </div>

          {/* Requirement 2: Invoice Number */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200 shadow-sm">
            {/* Custom UI Visual */}
            <div className="w-full md:w-5/12 bg-[#F9FAFB] rounded-xl p-6 flex items-center justify-center border border-gray-100 min-h-[160px]">
              <div className="flex items-center gap-4 bg-white border border-gray-200 p-4 rounded-lg shadow-sm w-full max-w-[260px]">
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Invoice No.</div>
                  <div className="font-mono text-[#111827] font-bold text-sm">INV-2026-001</div>
                </div>
                <div className="w-px h-8 bg-gray-200"></div>
                <div>
                  <div className="text-[10px] uppercase text-gray-400 font-bold tracking-wider mb-1">Date</div>
                  <div className="text-[#111827] font-medium text-sm">Apr 30, 2026</div>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold">2</span>
                <h3 className="text-xl font-bold text-[#111827]">Unique Sequence & Date</h3>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                A consecutive, unique serial number not exceeding 16 characters (can include hyphens or dashes). It must be paired exactly with the date of issue.
              </p>
            </div>
          </div>

          {/* Requirement 3: HSN/SAC */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200 shadow-sm">
            {/* Custom UI Visual */}
            <div className="w-full md:w-5/12 bg-[#F9FAFB] rounded-xl p-6 flex items-center justify-center border border-gray-100 min-h-[160px]">
               <table className="w-full max-w-[260px] text-left bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <thead className="bg-[#F9FAFB] text-[10px] uppercase text-gray-500 border-b border-gray-200 tracking-wider">
                  <tr>
                    <th className="p-2.5 font-bold">Item Description</th>
                    <th className="p-2.5 border-l border-gray-200 bg-blue-50/50 text-[#2563EB] font-bold">HSN / SAC</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-100">
                    <td className="p-2.5 text-[#111827]">Web Design</td>
                    <td className="p-2.5 border-l border-gray-200 font-mono font-medium text-[#4B5563]">998311</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 text-[#111827]">Hosting Plan</td>
                    <td className="p-2.5 border-l border-gray-200 font-mono font-medium text-[#4B5563]">998315</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold">3</span>
                <h3 className="text-xl font-bold text-[#111827]">HSN or SAC Codes</h3>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                Every line item must be classified. Include the Harmonized System of Nomenclature (HSN) code for physical goods, or the Services Accounting Code (SAC) for digital and professional services.
              </p>
            </div>
          </div>

          {/* Requirement 4: Tax Breakdown */}
          <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 border border-gray-200 shadow-sm">
            {/* Custom UI Visual */}
            <div className="w-full md:w-5/12 bg-[#F9FAFB] rounded-xl p-6 flex items-center justify-center border border-gray-100 min-h-[160px]">
              <div className="w-full max-w-[240px] bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">Taxable Value</span>
                  <span className="font-medium text-[#111827]">₹10,000</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-500">CGST (9%)</span>
                  <span className="font-medium text-[#4B5563]">₹900</span>
                </div>
                <div className="flex justify-between text-sm mb-3 pb-3 border-b border-gray-100">
                  <span className="text-gray-500">SGST (9%)</span>
                  <span className="font-medium text-[#4B5563]">₹900</span>
                </div>
                <div className="flex justify-between text-base font-bold">
                  <span className="text-[#111827]">Total</span>
                  <span className="text-[#2563EB]">₹11,800</span>
                </div>
              </div>
            </div>
            {/* Text Content */}
            <div className="w-full md:w-7/12">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] text-xs font-bold">4</span>
                <h3 className="text-xl font-bold text-[#111827]">Clear Tax Breakdown</h3>
              </div>
              <p className="text-[#4B5563] leading-relaxed">
                You cannot just show a 'total tax'. The invoice must explicitly separate the taxable value from the tax amounts, divided cleanly into Central (CGST), State (SGST), or Integrated (IGST).
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default GstInvoiceFormat;