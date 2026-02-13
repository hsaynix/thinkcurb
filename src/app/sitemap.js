import { getSortedPostsData } from '@/lib/posts';

export default async function sitemap() {
  const baseUrl = "https://thinkcurb.com"; // استبدله برابط موقعك الحقيقي لاحقاً

  // 1. جلب روابط المقالات ديناميكياً
  const posts = getSortedPostsData().map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // 2. تحديد الصفحات الثابتة (القانونية والرئيسية)
  const routes = ['', '/about', '/contact', '/privacy', '/terms'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.5, // الصفحة الرئيسية لها أعلى أولوية
    })
  );

  return [...routes, ...posts];
}