import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.catalystxcrew.in/sitemap.xml",
    host: "https://www.catalystxcrew.in",
  };
}
