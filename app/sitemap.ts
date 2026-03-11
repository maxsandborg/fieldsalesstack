import { MetadataRoute } from "next";
import { stacks } from "../data/stacks";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fieldsalesstack.com";

  const stackUrls = stacks.map((stack) => ({
    url: `${baseUrl}/stacks/${stack.slug}`,
    lastModified: new Date(stack.lastUpdated),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...stackUrls,
  ];
}
