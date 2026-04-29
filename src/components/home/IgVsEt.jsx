import React from 'react';

function IgVsEt() {
  const comparisonPoints = [
    {
      title: "Manual Data Entry vs. Smart Automation",
      description: "Typing out client details, manually adding rows, and adjusting column widths in an Excel template is tedious and frustrating. A dedicated invoice generator automates the layout process. You just fill in the blanks, and the tool perfectly formats the spacing, alignment, and page breaks every single time."
    },
    {
      title: "Eliminating Costly Calculation Errors",
      description: "In Excel, one accidentally deleted cell or a broken formula can miscalculate your entire total. This leads to undercharging clients or paying the wrong GST amount. An online invoice maker handles all the math automatically, accurately computing subtotals, taxes (CGST, SGST, IGST), and grand totals with zero margin for error."
    },
    {
      title: "Massive Time Savings",
      description: "Opening an old spreadsheet, duplicating the file, clearing out last month's data, and exporting it as a new PDF usually takes 10 to 15 minutes. With our online tool, you skip the repetitive setup and generate a ready-to-send PDF in under 60 seconds. That is time you can invest back into your actual work."
    },
    {
      title: "Agency-Grade Professional Output",
      description: "No matter how much you tweak borders and fonts in Excel, the final PDF often still looks like a spreadsheet. An invoice generator uses professionally designed templates that make your brand look established and trustworthy, helping you leave a lasting impression on your clients."
    }
  ];

  return (
    <section className="py-16 bg-[#F9FAFB] sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left-aligned Title & Intro */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Invoice Generator vs Excel: Which is Better?
        </h2>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          For years, freelancers and business owners have relied on Word and Excel templates to create their bills. While these methods are familiar, they often lead to hidden costs in the form of wasted time, formatting headaches, and calculation mistakes. Here is why upgrading to a digital invoice maker is the smarter choice.
        </p>

        {/* Clean, simple comparison table for SEO & Quick Scanning */}
        <div className="overflow-x-auto mb-12 shadow-sm rounded-xl border border-gray-200">
          <table className="w-full text-left border-collapse bg-white">
            <thead>
              <tr className="bg-blue-50 text-blue-900">
                <th className="py-4 px-6 font-semibold border-b border-gray-200 w-1/3">Feature</th>
                <th className="py-4 px-6 font-semibold border-b border-gray-200 w-1/3">Our Invoice Generator</th>
                <th className="py-4 px-6 font-semibold border-b border-gray-200 w-1/3">Excel / Word Templates</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Speed</td>
                <td className="py-4 px-6 text-green-600 font-medium">Under 60 seconds</td>
                <td className="py-4 px-6 text-red-500">10-15 minutes per invoice</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Calculations</td>
                <td className="py-4 px-6 text-green-600 font-medium">100% Automated & Accurate</td>
                <td className="py-4 px-6 text-red-500">Manual (Prone to errors)</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Design & Layout</td>
                <td className="py-4 px-6 text-green-600 font-medium">Always pixel-perfect</td>
                <td className="py-4 px-6 text-red-500">Breaks when adding new rows</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium text-gray-900">Tax Compliance</td>
                <td className="py-4 px-6 text-green-600 font-medium">Built-in GST Support</td>
                <td className="py-4 px-6 text-red-500">Requires manual updates</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Text-Heavy Numbered List (Matching your previous UI exactly) */}
        <div className="space-y-6">
          {comparisonPoints.map((point, index) => (
            <p key={index} className="text-gray-600 text-lg leading-relaxed">
              {index + 1}. <strong className="text-gray-900 font-semibold">{point.title}:</strong> {point.description}
            </p>
          ))}
        </div>

      </div>
    </section>
  );
}

export default IgVsEt;