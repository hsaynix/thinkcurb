"use client";

import { useState } from "react";
import Link from "next/link";

export default function HomeContent({ initialPosts = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // منطق الترقيم
  const POSTS_PER_PAGE = 6; 
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  // تأمين البيانات واستخراج التصنيفات
  const safePosts = initialPosts || [];
  const categories = ["All", ...new Set(safePosts.map(post => post?.category).filter(Boolean))];

  // تصفية المقالات بناءً على البحث والتصنيف
  const filteredPosts = safePosts.filter(post => {
    const matchesSearch = post?.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post?.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const postsToShow = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => setVisibleCount(prev => prev + 4);

  return (
    <div className="flex flex-col pb-32 pt-24 bg-white min-h-screen">
      
      {/* 1. اسم الموقع في منتصف الصفحة (ThinkCurb Centered) */}
      <header className="container-custom mb-24 flex flex-col items-center text-center">
        <h1 className="text-[15vw] md:text-[12rem] font-display font-black tracking-[-0.06em] text-slate-900 leading-none">
          Think<span className="text-blue-600">Curb</span><span className="text-slate-200">.</span>
        </h1>
        
        <p className="mt-8 text-slate-400 font-sans text-xl md:text-2xl max-w-2xl leading-relaxed tracking-tight">
          Exploring the intersection of <span className="text-slate-900 font-medium">code</span> and <span className="text-slate-900 font-medium">design</span>.
        </p>

        {/* حقل البحث ممركز أيضاً */}
        <div className="mt-16 w-full max-w-xl">
          <input 
            type="text" 
            placeholder="Search the archive..." 
            className="w-full bg-transparent border-b-2 border-slate-100 py-4 text-center text-xl font-display outline-none focus:border-blue-600 transition-all placeholder:text-slate-200"
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(POSTS_PER_PAGE);
            }}
          />
        </div>
      </header>

      {/* 2. شريط التصنيفات (Centered Index) */}
      <section className="container-custom mb-20">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 border-y border-slate-50 py-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(POSTS_PER_PAGE);
              }}
              className={`text-[10px] font-black uppercase tracking-[0.4em] transition-all relative py-2 ${
                activeCategory === cat 
                ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
                : "text-slate-300 hover:text-slate-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. الشبكة الديناميكية (60/40) */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-10 gap-10">
          {postsToShow.length > 0 ? (
            postsToShow.map((post, index) => {
              const layouts = ["md:col-span-6", "md:col-span-4", "md:col-span-4", "md:col-span-6"];
              const currentLayout = layouts[index % 4];

              return (
                <Link key={post.id || index} href={`/blog/${post.id}`} className={`${currentLayout} group`}>
                  <article className="h-full bg-slate-50/50 rounded-[3rem] p-12 lg:p-16 flex flex-col justify-between transition-all duration-700 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl">
                    <div>
                      <div className="flex justify-between items-center mb-16">
                        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                          {post.category}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-blue-600 transition-colors" />
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-display leading-[1.05] mb-8 text-slate-900 group-hover:text-blue-600 transition-colors duration-500">
                        {post.title}
                      </h2>
                    </div>
                    <div>
                      <p className="text-slate-500 font-sans leading-relaxed mb-10 line-clamp-2 text-lg">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:gap-8 transition-all">
                        <span>Read Case</span>
                        <span className="h-[1px] w-12 bg-slate-200 group-hover:bg-blue-600 group-hover:w-24 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })
          ) : (
            <div className="col-span-10 py-40 text-center italic text-slate-200 text-3xl font-light">
              No entries match your search.
            </div>
          )}
        </div>

        {/* 4. زر الترقيم (Load More) */}
        {hasMore && (
          <div className="mt-32 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="group flex flex-col items-center gap-6"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover:text-blue-600 transition-all">
                Load More Insights
              </span>
              <div className="w-px h-16 bg-slate-100 group-hover:h-24 group-hover:bg-blue-600 transition-all duration-700" />
            </button>
          </div>
        )}
      </section>
    </div>
  );
}