import Link from 'next/link';
import Image from 'next/image';
import { getSortedPostsData, getAllCategories } from '@/lib/posts';
import PostsGrid from '@/components/PostsGrid';

// إعدادات الـ SEO للصفحة الرئيسية
export const metadata = {
  title: 'ThinkCurb | Technical Engineering Lab',
  description: 'Deep dives into system design, web architecture, and modern engineering protocols.',
};

export default function Home() {
  // 1. جلب البيانات من مجلد content
  const allPosts = getSortedPostsData();
  const categories = getAllCategories();
  
  // عزل المقال الأحدث ليكون المقال المميز (Featured)
  const featuredPost = allPosts[0];
  const remainingPosts = allPosts.slice(1);

  return (
    <div className="pb-32 overflow-x-hidden bg-white">
      
      {/* --- 1. HERO SECTION --- */}
      <header className="relative pt-24 pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-12">
          
          {/* Lab Status Indicator */}
          <div className="inline-flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-slate-50 border border-blue-100 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
              System_Status: Operational
            </span>
          </div>
          
          <div className="max-w-5xl">
            <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.75] text-slate-900">
              Think <br />
              <span className="text-blue-600 italic">Curb</span> <br />
              Labs<span className="text-blue-600">.</span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-l-2 border-slate-100 pl-8">
            <p className="text-lg md:text-xl text-slate-500 font-medium max-w-md leading-relaxed font-mono">
              // Scalable architectures documentation. <br />
              // Engineering high-performance web systems.
            </p>
            
            <Link href="#feed" className="group flex items-center gap-4 bg-slate-900 text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-blue-600 transition-all shadow-2xl active:scale-95">
              Explore_Logs <span className="group-hover:translate-x-2 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 space-y-40">
        
        {/* --- 2. BENTO HIGHLIGHTS --- */}
        
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-[#F8FAFC] border border-slate-100 p-12 rounded-[3rem] flex flex-col justify-between min-h-[350px] group hover:border-blue-200 transition-all">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 text-3xl font-black italic shadow-sm border border-blue-50">TC</div>
            <div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter">Architecture Protocols.</h3>
              <p className="text-slate-500 font-medium max-w-md">Detailed blueprints for building resilient, distributed web applications using modern cloud primitives.</p>
            </div>
          </div>

          <div className="bg-blue-600 p-12 rounded-[3rem] text-white flex flex-col justify-between shadow-xl shadow-blue-200/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-3xl rounded-full -mr-16 -mt-16" />
            <div className="z-10">
              <span className="text-5xl font-black italic tracking-tighter block mb-2">99.9%</span>
              <p className="text-xs font-mono uppercase tracking-widest opacity-80">Uptime_Focused_Design</p>
            </div>
            <h3 className="text-lg font-bold leading-tight uppercase font-mono tracking-tighter z-10">Performance First Documentation</h3>
          </div>
        </section>

        {/* --- 3. FEATURED LOG (LATEST POST) --- */}
        {featuredPost && (
          <section id="featured" className="scroll-mt-32">
            <div className="mb-12 flex items-center gap-6 font-mono text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">
              <span>01 // Primary_Analysis</span>
              <div className="h-[1px] flex-1 bg-slate-100" />
            </div>

            <Link href={`/blog/${featuredPost.id}`}>
              <div className="group relative bg-white border border-slate-100 rounded-[3.5rem] p-6 md:p-10 flex flex-col lg:flex-row gap-12 items-center hover:shadow-2xl hover:shadow-blue-100/30 transition-all duration-700">
                <div className="w-full lg:w-1/2 aspect-video bg-slate-100 rounded-[2.5rem] overflow-hidden relative border border-slate-50">
                  {featuredPost.image ? (
                    <Image 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center font-mono font-black text-slate-200 text-5xl italic">NO_IMG</div>
                  )}
                </div>

                <div className="flex-1 space-y-6">
                  <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-mono font-bold uppercase tracking-widest border border-blue-100">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-4xl md:text-6xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-[0.9] tracking-tighter">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-500 font-medium leading-relaxed line-clamp-3">
                    {featuredPost.description}
                  </p>
                  <div className="pt-4 flex items-center gap-4 text-blue-600 font-black uppercase text-xs tracking-widest group-hover:gap-6 transition-all">
                    Initiate Read Sequence <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* --- 4. THE MAIN FEED --- */}
        <section id="feed" className="scroll-mt-32">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900">
              The Feed<span className="text-blue-600">.</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full" />
          </div>
          
          <PostsGrid allPosts={remainingPosts} categories={categories} />
        </section>

        {/* --- 5. CLEAN NEWSLETTER --- */}
        <section className="py-24 bg-slate-900 rounded-[3.5rem] px-8 md:px-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -mb-20 -mr-20" />
          <div className="max-w-2xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-none tracking-tighter uppercase">
              Keep Your Stack <br />
              <span className="text-blue-500 italic">Optimized.</span>
            </h2>
            <p className="text-slate-400 font-mono text-sm mb-12 uppercase tracking-widest">Join engineers receiving monthly architecture audits.</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="system_admin@domain.com" 
                className="flex-1 bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-xl font-mono focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <button className="bg-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-blue-600 transition-all">
                Subscribe_
              </button>
            </form>
          </div>
        </section>

      </main>
    </div>
  );
}