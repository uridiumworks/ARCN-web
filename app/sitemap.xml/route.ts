import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://arcn.gov.ng"; // 🔁 Replace with your actual domain

  const routes = [
    "",
    "/about/history",
    "/mandate",
    "/mandate/training",
    "/mandate/initiatives",
    "/news-and-events", // if you have a dedicated ARCN page
    "/programs-and-projects", // if you have a dedicated ARCN page
    "/downloads", // if you have a dedicated ARCN page
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `<url>
  <loc>${baseUrl}${route}</loc>
  <changefreq>weekly</changefreq>
  <priority>${route === "" ? "1.0" : "0.8"}</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
