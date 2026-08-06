import { designIdeas } from "@/data/designIdeas";
import { getBlogs, getProjects, getLocations } from "@/lib/serverApi";

const BASE_URL = "https://livingspacedecor.in";

export default async function sitemap() {

  // Static Pages
 

  const staticRoutes = [
    "",
    "about",
    "contact",
    "blog",
    "portfolio",
    "locations",
    "services",
    "architecture",
    "furnitures",
    "turnkey-projects",
    "wardrobes",
    "kitchen-design",
    "kitchen-calculator",
    "cost-calculator",
    "wardrobe-calculator",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${BASE_URL}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  // Design Ideas

  const designPages = designIdeas.map((item) => ({
    url: `${BASE_URL}/services/design-ideas/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));
 
  // Locations (Database)

  let locationPages = [];

  try {
    const res = await getLocations();

    locationPages = (res.data || []).map((location) => ({
      url: `${BASE_URL}/locations/${location.slug}`,
      lastModified: new Date(location.updatedAt || location.createdAt),
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Location Sitemap Error:", error);
  }

  // Blogs (Database)

  let blogPages = [];

  try {
    const res = await getBlogs({
      page: 1,
      limit: 1000,
    });

    blogPages = (res.data || []).map((blog) => ({
      url: `${BASE_URL}/blog/${blog.slug}`,
      lastModified: new Date(blog.updatedAt || blog.createdAt),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Blog Sitemap Error:", error);
  }

  // Portfolio (Database)
 

  let portfolioPages = [];

  try {
    const res = await getProjects({
      page: 1,
      limit: 1000,
    });

    portfolioPages = (res.data || []).map((project) => ({
      url: `${BASE_URL}/portfolio/${project.slug}`,
      lastModified: new Date(project.updatedAt || project.createdAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Portfolio Sitemap Error:", error);
  }


  // Return Sitemap

  return [
    ...staticPages,
    ...designPages,
    ...locationPages,
    ...blogPages,
    ...portfolioPages,
  ];
}
