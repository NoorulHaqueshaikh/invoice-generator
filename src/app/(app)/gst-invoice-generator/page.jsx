import Navbar from '@/components/home/Navbar'
import Footer from '@/components/home/Footer'
import React from 'react'
import InvoiceGenerator from '@/components/home/InvoiceGenerate'
import GstSpecificFeatures from '@/components/gstInvoiceGenerator/GstSpecificFeatures'
import WhatIsGstInvoice from '@/components/gstInvoiceGenerator/WhatIsGstInvoice'
import HowToCreateGstInvoice from '@/components/gstInvoiceGenerator/HowToCreateGstInvoice'
import GstInvoiceFormat from '@/components/gstInvoiceGenerator/GstInvoiceFormat'
import CommonGstMistakes from '@/components/gstInvoiceGenerator/CommonGstMistakes'
import FAQ from '@/components/gstInvoiceGenerator/FAQ'

// ✅ SEO Metadata
export const metadata = {
  title: "Free GST Invoice Generator India (Create GST Invoice Online in Seconds)",
  description:
    "Generate GST-compliant invoices online in India. Automatically calculate CGST, SGST & IGST, add GSTIN, and download professional PDF invoices instantly. 100% free GST invoice generator.",

  keywords: [
    "gst invoice generator",
    "gst invoice generator india",
    "create gst invoice online",
    "free gst invoice generator",
    "gst bill generator",
    "gst invoice format india",
    "cgst sgst igst invoice generator"
  ],

  alternates: {
    canonical: "https://invoice.andicode.com/gst-invoice-generator",
  },

  openGraph: {
    title: "GST Invoice Generator for India (Free & Instant)",
    description:
      "Create GST invoices with CGST, SGST & IGST automatically. Download PDF invoices instantly.",
    url: "https://invoice.andicode.com/gst-invoice-generator",
    siteName: "Andicode Invoice",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Free GST Invoice Generator India",
    description:
      "Generate GST invoices online with automatic tax calculation and PDF download.",
  },

  robots: {
    index: true,
    follow: true,
  },
}

// ✅ FAQ Schema (matches your UI exactly)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a GST invoice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A GST invoice is a legal commercial document issued by a registered seller to a buyer. It details the goods or services provided, the total amount due, and explicitly shows the specific GST components (CGST, SGST, or IGST) applied to the transaction."
      }
    },
    {
      "@type": "Question",
      "name": "Is issuing a GST invoice mandatory?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. If your business is registered under the GST regime in India, you are legally mandated by the government to issue a GST-compliant invoice for every taxable sale of goods or services."
      }
    },
    {
      "@type": "Question",
      "name": "Can I create a GST invoice without a GSTIN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A valid 15-digit GSTIN (Goods and Services Tax Identification Number) is a legally mandatory field on a GST invoice. If you are not GST-registered, you should issue a standard 'Bill of Supply' or regular commercial invoice without charging any tax."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between IGST, CGST, and SGST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CGST (Central) and SGST (State) are charged together on intra-state sales (when the buyer and seller are in the same state). IGST (Integrated) is a single tax charged on inter-state sales (when the buyer and seller are in different states)."
      }
    },
    {
      "@type": "Question",
      "name": "What are HSN and SAC codes? Do I need them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HSN (Harmonized System of Nomenclature) codes are used to classify physical goods, while SAC (Services Accounting Code) is used for services. They are mandatory classification codes required by the government to ensure the correct tax rate is applied to your items."
      }
    },
    {
      "@type": "Question",
      "name": "Is this GST invoice generator free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our GST invoice generator is 100% free. You can instantly enter your details, automatically calculate complex state taxes, and download professional, compliance-ready PDFs without any hidden fees or software subscriptions."
      }
    }
  ]
}

function page() {
  return (
    <div>
      <Navbar />

      {/* ✅ FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <InvoiceGenerator
        title="GST Invoice Generator for India (Free & Instant)"
        description="Create GST-compliant invoices with CGST, SGST, and IGST automatically. Download professional PDF invoices in seconds."
      />

      <GstSpecificFeatures />
      <WhatIsGstInvoice />
      <HowToCreateGstInvoice />
      <GstInvoiceFormat />
      <CommonGstMistakes />
      <FAQ />
      <Footer />
    </div>
  )
}

export default page