import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Comments from '@/components/Comments';

// إعدادات الـ SEO لتبدو المقالة احترافية في محركات البحث
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: post.title,
    description: post.description,
  };
}

// توليد الصفحات مسبقاً (SSG) لسرعة التصفح
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ slug: post.id }));
}

export default async function PostPage({ params }) {
  const { slug } = await params; 
  const postData = await getPostData(slug);

  if (!postData) notFound();

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a] antialiased">
      {/* شريط علوي بسيط للعودة للرئيسية */}
      <nav className="max-w-3xl mx-auto px-6 py-8 flex justify-between items-center border-b border-gray-100">
        <Link href="/" className="font-bold text-xl tracking-tight">
          ThinkCurb<span className="text-gray-400">.</span>
        </Link>
        <Link href="/" className="text-sm text-gray-500 hover:text-black transition-colors">
          Back to Feed
        </Link>
      </nav>

      {/* محتوى المقال */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        
        {/* رأس المقال (Title & Meta) */}
        <header className="mb-16">
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-6 font-medium">
            <span className="uppercase tracking-widest">{postData.category}</span>
            <span>•</span>
            <time>{postData.date}</time>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
            {postData.title}
          </h1>
          {postData.description && (
            <p className="text-xl text-gray-500 italic leading-relaxed">
              {postData.description}
            </p>
          )}
        </header>

        {/* الصورة الرئيسية (إذا وجدت) */}
        {postData.image && (
          <div className="mb-16 rounded-2xl overflow-hidden shadow-sm">
            <img 
              src={postData.image} 
              alt={postData.title} 
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* جسم المقال (Content) */}
        <div 
          className="prose prose-lg prose-gray max-w-none 
                     prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-tight
                     prose-p:font-serif prose-p:text-gray-800 prose-p:leading-extra-relaxed
                     prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                     prose-pre:bg-gray-50 prose-pre:border prose-pre:border-gray-100 prose-pre:text-gray-800"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />

        {/* تذييل المقال ونظام التعليقات */}
        <footer className="mt-24 pt-12 border-t border-gray-100">
          <div className="mb-12 text-center">
            <p className="text-gray-400 text-sm mb-4 font-medium uppercase tracking-widest">Discussion</p>
            <h3 className="text-2xl font-bold mb-8">What do you think?</h3>
          </div>
          
          <Comments />
        </footer>
      </article>

      {/* تذييل الصفحة البسيط */}
      <footer className="max-w-3xl mx-auto px-6 py-20 text-center border-t border-gray-100 text-gray-400 text-sm">
        © {new Date().getFullYear()} ThinkCurb Blog. Built with Next.js.
      </footer>
    </main>
  );
}