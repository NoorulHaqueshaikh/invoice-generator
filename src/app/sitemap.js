// app/sitemap.js

export default function sitemap() {
  return [
    {
      url: "https://invoice.andicode.com/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://invoice.andicode.com/about-us",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}