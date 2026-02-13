"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "../components/Footer"; 

export default function HomeContent({ initialPosts = [] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  const POSTS_PER_PAGE = 6; 
  const [visibleCount, setVisibleCount] = useState(POSTS_PER_PAGE);

  const categories = ["All", ...new Set(initialPosts.map(post => post.category).filter(Boolean))];

  const filteredPosts = initialPosts.filter(post => {
    const matchesSearch = post.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const postsToShow = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  const handleLoadMore = () => setVisibleCount(prev => prev + 4);
  const actualCategories = categories.filter(c => c !== "All");

  return (
    <>
      <div className="flex flex-col pb-20 md:pb-32 pt-20 md:pt-40 bg-white min-h-screen">
        
        {/* 1. Hero Section: Fluid Typography */}
        <section className="px-6 md:container-custom mb-20 md:mb-32 flex flex-col items-center text-center">
          <div className="w-full max-w-7xl">
            {/* الحجم يتدرج من الخط الصغير للموبايل إلى الضخم للديسكتوب */}
            <h1 className="text-[18vw] sm:text-[15vw] md:text-[10rem] lg:text-[13rem] xl:text-[15rem] font-display leading-[0.8] tracking-[-0.05em] text-slate-900 mb-8 md:mb-12">
              Think<br />
              <em className="italic pr-2 md:pr-4">Curb</em>
              <span className="text-blue-600">.</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-3xl font-sans text-slate-400 mx-auto max-w-3xl leading-relaxed tracking-tight px-4">
              Exploring the intersection of <span className="text-slate-900 font-medium">code</span> and <span className="text-slate-900 font-medium">design</span>.
            </p>
          </div>

          {/* 2. Search Bar: Adaptive Width */}
          <div className="mt-16 md:mt-24 w-full max-w-[90%] md:max-w-4xl mx-auto">
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Search laboratory..." 
                className="w-full bg-transparent border-b-2 md:border-b-[3px] border-slate-100 py-6 md:py-10 text-xl sm:text-2xl md:text-5xl font-display text-center outline-none focus:border-blue-600 transition-all placeholder:text-slate-200"
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
              />
              <div className="absolute right-0 bottom-6 md:bottom-10 text-slate-200 group-focus-within:text-blue-600 transition-colors hidden sm:block">
                <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Categories: Scrollable on Mobile */}
        <section className="px-6 md:container-custom mb-16 md:mb-24">
          <div className="flex flex-nowrap md:flex-wrap gap-6 md:gap-10 items-center justify-start md:justify-center border-y border-slate-50 py-8 md:py-10 overflow-x-auto no-scrollbar mask-fade-edges">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 sticky left-0 bg-white pr-4">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(POSTS_PER_PAGE);
                }}
                className={`font-sans text-[11px] md:text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all relative py-2 ${
                  activeCategory === cat 
                  ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
                  : "text-slate-400 hover:text-slate-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* 4. Grid System: Responsive Columns */}
        <section className="px-6 md:container-custom">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8 md:gap-12">
            {postsToShow.length > 0 ? (
              postsToShow.map((post, index) => {
                // تخطيط ذكي: عمود كامل على الموبايل، وتوزيع 60/40 على الديسكتوب
                const layouts = ["md:col-span-6", "md:col-span-4", "md:col-span-4", "md:col-span-6"];
                const currentLayout = layouts[index % 4];

                return (
                  <Link key={post.id || index} href={`/blog/${post.id}`} className={`${currentLayout} group w-full`}>
                    <article className="h-full bg-slate-50/40 rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-16 flex flex-col justify-between transition-all duration-700 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl">
                      <div>
                        <div className="flex justify-between items-center mb-10 md:mb-16">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                            {post.category}
                          </span>
                          <div className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-blue-600 transition-colors" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display leading-[1.1] mb-6 md:mb-8 text-slate-900 group-hover:text-blue-600 transition-colors duration-500">
                          {post.title}
                        </h2>
                      </div>
                      <div>
                        <p className="text-slate-500 font-sans text-base md:text-lg leading-relaxed mb-8 md:mb-10 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-[10px] md:text-[11px] font-black uppercase tracking-widest text-slate-900 group-hover:gap-8 transition-all">
                          <span>Explore Case</span>
                          <span className="h-[1px] w-8 md:w-12 bg-slate-200 group-hover:bg-blue-600 group-hover:w-24 transition-all" />
                        </div>
                      </div>
                    </article>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-slate-200 font-display italic text-2xl md:text-4xl">No research files found.</p>
              </div>
            )}
          </div>

          {/* 5. Load More: Minimalist */}
          {hasMore && (
            <div className="mt-20 md:mt-32 flex justify-center">
              <button 
                onClick={handleLoadMore}
                className="group flex flex-col items-center gap-4 md:gap-6"
              >
                <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 group-hover:text-blue-600 transition-all">
                  Load More Insights
                </span>
                <div className="w-px h-12 md:h-16 bg-slate-100 group-hover:h-24 group-hover:bg-blue-600 transition-all duration-500" />
              </button>
            </div>
          )}
        </section>
      </div>

      <Footer categories={actualCategories} />
    </>
  );
}