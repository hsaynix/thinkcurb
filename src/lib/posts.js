import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

/**
 * تحديد مسار المجلد الذي يحتوي على المحتوى (Markdown files).
 * تأكد من وجود مجلد باسم 'content' في جذر المشروع.
 */
const contentDirectory = path.join(process.cwd(), 'content');

/**
 * 1. جلب كافة المقالات مرتبة حسب التاريخ (للمتجر الرئيسي/Feed)
 */
export function getSortedPostsData() {
  // التحقق من وجود المجلد لتجنب أخطاء وقت البناء (Build-time errors)
  if (!fs.existsSync(contentDirectory)) {
    console.warn("⚠️ Directory 'content' not found. Create it at the project root.");
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  
  const allPostsData = fileNames
    .filter(fileName => fileName.endsWith('.md')) // معالجة ملفات المارك داون فقط
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, ''); // استخراج الـ ID من اسم الملف
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // تحليل البيانات الوصفية (metadata) باستخدام gray-matter
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
 * 2. جلب التصنيفات الفريدة (Unique Categories)
 * تُستخدم لتشغيل نظام الفلترة في الصفحة الرئيسية.
 */
export function getAllCategories() {
  const posts = getSortedPostsData();
  const categories = posts
    .map((post) => post.category)
    .filter(Boolean); // إزالة أي قيم فارغة (Null/Undefined)
  
  return [...new Set(categories)]; // إرجاع مصفوفة فريدة بدون تكرار
}

/**
 * 3. جلب جميع المعرفات (لأغراض الـ Static Generation)
 * تُستخدم في وظيفة generateStaticParams في Next.js
 */
export function getAllPostIds() {
  if (!fs.existsSync(contentDirectory)) return [];
  const fileNames = fs.readdirSync(contentDirectory);
  
  return fileNames.map((fileName) => {
    return {
      slug: fileName.replace(/\.md$/, ''),
    };
  });
}

/**
 * 4. جلب بيانات مقال واحد بالتفصيل
 * تقوم بتحويل نص المارك داون إلى HTML جاهز للعرض.
 */
export async function getPostData(id) {
  const fullPath = path.join(contentDirectory, `${id}.md`);
  
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  // استخدام remark لتحويل محتوى المارك داون إلى HTML
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