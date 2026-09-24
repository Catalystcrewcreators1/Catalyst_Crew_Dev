import { MetadataRoute } from "next";
import { eventsData } from "@/data/events";
import { blogPostsData } from "@/data/blog";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://catalystxcrew.in";

  const staticRoutes = [
    "",
    "/about",
    "/events",
    "/community",
    "/showcase",
    "/showcase/submit",
    "/partners",
    "/opportunities",
    "/resources",
    "/blog",
    "/crew",
    "/faq",
    "/contact",
    "/code-of-conduct",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const eventRoutes = eventsData.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const blogRoutes = blogPostsData.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projectRoutes = projectsData.map((project) => ({
    url: `${baseUrl}/showcase/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...eventRoutes, ...blogRoutes, ...projectRoutes];
}
