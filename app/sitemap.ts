import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl =
		process.env.NEXT_PUBLIC_SITE_URL || "https://escrow-protocol.com";

	return [
		{
			url: baseUrl,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "weekly",
			priority: 1.0,
		},
		{
			url: `${baseUrl}/trade`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/freelancer`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${baseUrl}/integrations`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/protocol`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "weekly",
			priority: 0.8,
		},
		{
			url: `${baseUrl}/community`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/support`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "monthly",
			priority: 0.7,
		},
		{
			url: `${baseUrl}/privacy`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "yearly",
			priority: 0.5,
		},
		{
			url: `${baseUrl}/terms`,
			lastModified: new Date("2025-09-11"),
			changeFrequency: "yearly",
			priority: 0.5,
		},
	];
}
