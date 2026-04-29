import React from 'react';

function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        About Us
      </h1>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Andicode Invoice is a modern, easy-to-use invoice generator built to simplify billing for freelancers, startups, and small businesses. We created this platform with a clear goal—to eliminate the complexity of traditional invoicing and provide a fast, reliable, and professional solution that anyone can use without technical knowledge.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Our tool allows you to generate GST and non-GST invoices instantly, with automatic tax calculations, clean layouts, and downloadable PDF formats. Whether you're a freelancer sending your first invoice or a growing business managing multiple clients, Andicode Invoice helps you stay organized and professional.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        We focus on speed, accuracy, and privacy. You don’t need to sign up or go through lengthy processes—just enter your details and generate your invoice in seconds. Your data remains secure, and you stay in full control of your information.
      </p>

      <p className="text-gray-600 mb-6 leading-relaxed">
        Andicode Invoice was built by Noorul Haque Shaikh, a developer focused on creating practical tools that solve real-world problems for businesses and freelancers.
      </p>

      <p className="text-gray-600 leading-relaxed">
        📩 Contact us:{" "}
        <a 
          href="mailto:noorulhaque560@gmail.com" 
          className="text-blue-600 font-medium hover:underline"
        >
          noorulhaque560@gmail.com
        </a>
      </p>

    </div>
  );
}

export default Page;