import InvoiceGenerator from "@/components/home/InvoiceGenerate";
import Navbar from "@/components/home/Navbar";
import Features from "@/components/home/Features";
import React from "react";
import HowItWorks from "@/components/home/HowItWorks";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/home/Footer";
import Script from "next/script";

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
    answer: "After creating your invoice, you can download it as a high-quality PDF and share it easily via email or messaging apps like WhatsApp."
  },
  {
    question: "Does this tool provide professional invoice templates?",
    answer: "Yes. The tool generates clean, modern, and business-ready invoice PDFs that are suitable for freelancers, agencies, and companies. The layout is designed to look professional and not generic."
  }
];

export const metadata = {
  title: "Free Invoice Generator | GST & Non-GST Invoice Maker Online",
  description:
    "Create professional invoices online with our free invoice generator. Generate GST and non-GST invoices, add logo, download PDF, and manage invoices easily.",
  keywords: [
    "invoice generator",
    "free invoice generator",
    "invoice maker",
    "GST invoice generator India",
    "online invoice generator",
    "PDF invoice generator",
    "billing software free",
  ],
  alternates: {
    canonical: "https://invoice.andicode.com",
  },
};

function page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Invoice Generator",
    url: "https://invoice.andicode.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    description:
      "Free online invoice generator for creating GST and non-GST invoices. Generate professional PDF invoices instantly without login.",
  };

  return (
    <div>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Script
        id="webapp-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <InvoiceGenerator
        title="Invoice Generator"
        description="Create professional invoices online with this free invoice generator. Generate GST and non-GST invoices, add your logo, and download clean, business-ready PDF invoices instantly."
      />
      <Features />
      <HowItWorks />
      <FAQ data={faqData} />
      <Footer />
    </div>
  );
}

export default page;
