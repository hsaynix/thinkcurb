// src/app/blog/[slug]/page.js
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import Comments from '@/components/Comments';
import { notFound } from 'next/navigation';

// توليد المسارات الثابتة (Static Params) لتحسين سرعة الموقع (SEO)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// دالة توليد بيانات الـ Meta لكل مقال بشكل ديناميكي
export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);
  
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | ThinkCurb`,
    description: post.description,
  };
}

export default async function Post({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  // إذا لم يتم العثور على المقال، أظهر صفحة 404
  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      
      {/* --- رأس المقال (Article Header) --- */}
      <header className="mb-16 text-center">
        <div className="flex justify-center items-center gap-3 mb-8">
          <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest">
            {post.category}
          </span>
          <span className="text-slate-300">•</span>
          <time className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
            {post.date}
          </time>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-12 tracking-tight">
          {post.title}
        </h1>

        {/* صورة الغلاف */}
        <div className="relative h-[300px] md:h-[550px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-100/50">
          <img
            src={post.image || '/images/posts/default.jpg'}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* --- محتوى المقال (Article Content) --- */}
      <div className="flex flex-col md:flex-row gap-12 relative">
        
        {/* شريط جانبي صغير (اختياري - لمعلومات الكاتب) */}
        <aside className="md:w-1/4 flex flex-col gap-6 border-l border-slate-50 pl-8">
          <div className="sticky top-24">
            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Written By</h4>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                HA
              </div>
              <span className="text-sm font-bold text-slate-900">Abdelaziz</span>
            </div>
            <div className="mt-10 h-[1px] w-12 bg-blue-600" />
          </div>
        </aside>

        {/* النص الرئيسي باستخدام Tailwind Typography */}
        <div className="md:w-3/4">
          <div 
            className="prose prose-lg prose-slate max-w-none 
            prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-p:leading-relaxed prose-p:text-slate-600 prose-p:font-light
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
            prose-strong:font-bold prose-strong:text-slate-900
            prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:rounded-r-xl prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />

          {/* --- قسم التعليقات (Giscus) --- */}
          <div className="mt-24 border-t border-slate-100 pt-16">
             <div className="mb-10">
                <h3 className="text-2xl font-black text-slate-900 mb-2">النقاشات والأفكار</h3>
                <p className="text-sm text-slate-500">شاركنا رأيك حول هذا الموضوع عبر حسابك في GitHub.</p>
             </div>
             <Comments />
          </div>
        </div>
      </div>

    </article>
  );
}