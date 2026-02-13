export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // أي مجلد لا تريد أرشفته
    },
    sitemap: 'https://thinkcurb.com/sitemap.xml', // تأكد من مطابقة الرابط
  };
}