export default function sitemap() {
  return [
    {
      url: "https://invoice.andicode.com/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://invoice.andicode.com/gst-invoice-generator",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}