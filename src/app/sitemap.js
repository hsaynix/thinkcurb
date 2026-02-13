// app/sitemap.js
import { getSortedPostsData } from '../lib/posts'; // افترضنا أن لديك دالة لجلب المقالات

const URL = "https://thinkcurb-blog.vercel.app";

export default async function sitemap() {
  // 1. جلب مسارات المقالات من ملفات Markdown
  const posts = getSortedPostsData();
  
  const blogPosts = posts.map((post) => ({
    url: `${URL}/posts/${post.id}`,
    lastModified: post.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // 2. الصفحات الرئيسية
  const routes = ['', '/about', '/categories'].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1.0,
  }));

  return [...routes, ...blogPosts];
}