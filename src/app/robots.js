// app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // أي مسارات لا تريد أرشفتها
    },
    sitemap: 'https://thinkcurb-blog.vercel.app/sitemap.xml', // استبدل برابط موقعك
  }
}