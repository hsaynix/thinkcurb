import { getPostData, getAllPostIds } from "@/lib/posts";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Comments from "@/components/Comments";

/**
 * 1. توليد المسارات الثابتة
 */
export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * 2. توليد البيانات الوصفية (SEO)
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: `${postData.title} | ThinkCurb`,
      description: postData.excerpt,
    };
  } catch (e) {
    return { title: 'Post Not Found' };
  }
}

/**
 * 3. المكون الرئيسي للمقال
 */
export default async function PostPage({ params }) {
  const { slug } = await params;
  
  let postData;
  try {
    postData = await getPostData(slug);
  } catch (error) {
    notFound();
  }

  return (
    <article className="min-h-screen pb-32 animate-entry bg-white overflow-x-hidden selection:bg-blue-600 selection:text-white">
      
      <style dangerouslySetInnerHTML={{ __html: `
        /* منع خروج النصوص والكلمات الطويلة */
        .prose-thinkcurb {
          word-wrap: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
        }

        /* ضبط حجم الخط الأساسي ليكون متزناً (Balanced) */
        .prose-thinkcurb p {
          font-size: clamp(1.1rem, 1.8vw, 1.45rem); 
          line-height: 1.8;
          color: #475569;
          margin-bottom: 2.5rem;
          font-weight: 400;
          max-width: 100%;
        }
        body {margin-left: 5%;}
        /* العناوين الفرعية: ضخمة بذكاء */
        .prose-thinkcurb h2 {
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.2;
          margin-top: 5rem;
          margin-bottom: 2rem;
          letter-spacing: -0.03em;
        }

        /* تنسيق كود بايثون: إزالة المربعات والإطارات */
        .prose-thinkcurb pre {
          margin: 3rem 0;
          padding: 2rem !important;
          font-size: clamp(0.85rem, 1.2vw, 1.05rem) !important;
          border-radius: 1.25rem;
          background: #fafff6 !important;
          border: none !important; /* إزالة المربع/الإطار */
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
          overflow-x: auto;
          position: relative;
        }

        .prose-thinkcurb pre code {
          background: transparent !important;
          border: none !important;
          padding: 0 !important;
        }

        .prose-thinkcurb img {
          max-width: 100%;
          height: auto;
          border-radius: 2rem;
          margin: 4rem 0;
        }

        @media (max-width: 768px) {
          .prose-thinkcurb p { font-size: 1.15rem; margin-bottom: 2rem; }
          .prose-thinkcurb h2 { font-size: 1.75rem; }
          .prose-thinkcurb pre { padding: 1.5rem !important; border-radius: 1rem; }
        }
      `}} />

      {/* Header Section */}
      <header className="pt-32 md:pt-48 pb-16 md:pb-24 border-b border-slate-50 mb-16 md:mb-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          
          <Link 
            href="/" 
            className="inline-flex items-center text-[10px] md:text-xs font-black text-blue-600 mb-12 hover:gap-3 transition-all uppercase tracking-[0.4em]"
          >
            ← Back to Engineering Hub
          </Link>
          
          <div className="flex flex-wrap items-center gap-4 mb-10">
             <span className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
               {postData.category || 'Research'}
             </span>
             <span className="text-slate-400 text-xs md:text-sm font-medium tracking-tight">
               {postData.date} • {postData.readingTime || '5 min read'}
             </span>
          </div>

          {/* العنوان الرئيسي: متجاوب ولا يخرج عن الشاشة */}
          <h1 className="text-[10vw] md:text-[6vw] lg:text-7xl font-black leading-[1.1] mb-12 text-slate-900 tracking-tight break-words max-w-5xl">
            {postData.title}
          </h1>

          <div className="flex items-center gap-6 pt-10 border-t border-slate-100">
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-black shadow-lg">TC</div>
            <div>
              <p className="text-base md:text-xl font-bold text-slate-900 tracking-tight">{postData.author || "ThinkCurb Staff"}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-0.5">Intelligence Architect</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div 
          className="prose-thinkcurb mb-32 max-w-4xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
        
        {/* Comments Section */}
        <div className="max-w-4xl pt-20 border-t border-slate-50">
           <Comments />
        </div>
      </div>
    </article>
  );
}