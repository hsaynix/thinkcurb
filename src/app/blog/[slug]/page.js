import { getPostData, getAllPostIds } from "@/lib/posts";
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Comments from "@/components/Comments";

/**
 * 1. توليد المسارات الثابتة (لأداء فائق السرعة)
 */
export async function generateStaticParams() {
  const posts = getAllPostIds();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * 2. توليد البيانات الوصفية (SEO) بشكل ديناميكي
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  try {
    const postData = await getPostData(slug);
    return {
      title: `${postData.title} | ThinkCurb Lab`,
      description: postData.excerpt || "Engineering insights from ThinkCurb Lab.",
      openGraph: {
        title: postData.title,
        description: postData.excerpt,
        type: 'article',
      },
    };
  } catch (e) {
    return { title: 'Post Not Found' };
  }
}

/**
 * 3. المكون الرئيسي للمقال (The Technical Lab Aesthetic)
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
      
      {/* التنسيقات الداخلية المخصصة للهوية البصرية */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prose-thinkcurb {
          word-wrap: break-word;
          overflow-wrap: break-word;
          max-width: 100%;
        }

        .prose-thinkcurb p {
          font-size: clamp(1.1rem, 1.8vw, 1.35rem); 
          line-height: 1.8;
          color: #334155;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }

        .prose-thinkcurb h2 {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          color: #0f172a;
          line-height: 1.1;
          margin-top: 6rem;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
          font-style: italic;
        }

        .prose-thinkcurb pre {
          margin: 4rem 0;
          padding: 2.5rem !important;
          font-size: 0.95rem !important;
          border-radius: 1.5rem;
          background: #f8fafc !important;
          border: 1px solid #f1f5f9 !important;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.05);
          overflow-x: auto;
        }

        .prose-thinkcurb img {
          border-radius: 2.5rem;
          margin: 5rem 0;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.1);
        }
      `}} />

      {/* Header: ضخم وجريء */}
      <header className="pt-32 md:pt-48 pb-16 border-b border-slate-50 mb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          
          <Link 
            href="/" 
            className="inline-flex items-center text-[10px] font-black text-blue-600 mb-16 hover:pl-2 transition-all uppercase tracking-[0.5em]"
          >
            ← BACK_TO_LAB_HUB
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
             <span className="px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
               {postData.category || 'Engineering'}
             </span>
             <span className="text-slate-400 text-xs font-mono">
               {postData.date} • {postData.readingTime || '5m read'}
             </span>
          </div>

          <h1 className="text-[10vw] md:text-[7vw] lg:text-8xl font-black leading-[0.95] mb-12 text-slate-900 tracking-tighter break-words max-w-6xl italic">
            {postData.title}
          </h1>

          <div className="flex items-center gap-6 pt-12 border-t border-slate-100">
            <div className="w-14 h-14 rounded-full bg-slate-900 flex items-center justify-center text-white text-[10px] font-black">TC</div>
            <div>
              <p className="text-xl font-black text-slate-900 tracking-tight">{postData.author || "ThinkCurb Staff"}</p>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Lead Intelligence Architect</p>
            </div>
          </div>
        </div>
      </header>

      {/* Body: محتوى المقال والتعليقات */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div 
          className="prose-thinkcurb mb-40 max-w-4xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
        
        <section className="max-w-4xl pt-24 border-t border-slate-100">
           <h3 className="text-2xl font-black mb-12 italic tracking-tight">Lab Discussion_</h3>
           <Comments />
        </section>
      </div>
    </article>
  );
}