import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// تحديد المسار لمجلد content في جذر المشروع
const postsDirectory = path.join(process.cwd(), 'content', 'posts');
/**
 * 1. جلب جميع المقالات مرتبة حسب التاريخ
 * تُستخدم في الصفحة الرئيسية (Home) وصفحة الأرشيف
 */
export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    console.warn("Directory 'content' not found at:", postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // قراءة ملفات Markdown فقط
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // تحليل البيانات الوصفية (metadata) مثل العنوان والتاريخ
      const matterResult = matter(fileContents);

      return {
        id,
        ...matterResult.data,
      };
    });

  // ترتيب المقالات: الأحدث يظهر أولاً
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * 2. جلب كافة الـ IDs (المسارات الديناميكية)
 * هذه هي الدالة التي كانت مفقودة وتسببت في خطأ الـ Build
 * تُستخدم في generateStaticParams داخل [slug]/page.js
 */
export function getAllPostIds() {
  if (!fs.existsSync(postsDirectory)) return [];

  const fileNames = fs.readdirSync(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      return {
        slug: fileName.replace(/\.md$/, ''), // نستخدم اسم الملف كـ slug
      };
    });
}

/**
 * 3. جلب بيانات مقال واحد وتحويل محتواه إلى HTML
 * تُستخدم لعرض صفحة المقال الكاملة
 */
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post with id ${id} not found`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // تحويل Markdown إلى HTML بأسلوب Remark
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}