"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * مكون شبكة المقالات مع نظام فلترة حسب التصنيف.
 * مصمم بستايل "Clean Lab" (أبيض + أزرق سماوي).
 */
export default function PostsGrid({ allPosts, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // تصفية المقالات بناءً على التصنيف المختار
  const filteredPosts = useMemo(() => {
    return allPosts.filter(post => {
      if (selectedCategory === 'All') return true;
      return post.category?.trim().toLowerCase() === selectedCategory.trim().toLowerCase();
    });
  }, [selectedCategory, allPosts]);

  return (
    <div className="space-y-16">
      
      {/* --- FILTER NAVIGATION --- */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 border-b border-slate-100 pb-10">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-6 py-2.5 rounded-xl font-mono text-[10px] uppercase tracking-[0.2em] transition-all border ${
            selectedCategory === 'All' 
            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
            : 'bg-white border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600'
          }`}
        >
          All_Systems ({allPosts.length})
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2.5 rounded-xl font-mono text-[10px] uppercase tracking-[0.2em] transition-all border ${
              selectedCategory === cat 
              ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200' 
              : 'bg-white border-slate-200 text-slate-500 hover:border-blue-400 hover:text-blue-600'
            }`}
          >
            {cat}_
          </button>
        ))}
      </div>

      {/* --- GRID LAYOUT --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id} className="group">
            <article className="h-full flex flex-col bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden hover:shadow-2xl hover:shadow-blue-100/60 transition-all duration-500 hover:-translate-y-2">
              
              {/* Image / Thumbnail Section */}
              <div className="aspect-[16/10] relative overflow-hidden bg-slate-50">
                {post.image ? (
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center font-mono text-slate-200 text-xl font-bold italic">
                    NO_DATA_IMG
                  </div>
                )}
                
                {/* Floating Category Badge */}
                <div className="absolute top-5 left-5">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-widest text-blue-600 shadow-sm border border-blue-50">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <time className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">
                    {post.date}
                  </time>
                  <div className="h-[1px] flex-1 bg-slate-50" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.description}
                </p>

                {/* Footer of the Card */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-blue-600 flex items-center gap-2 transition-all">
                    Access Log <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="font-mono text-[9px] text-slate-300">
                    REF_{post.id.substring(0, 5).toUpperCase()}
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* --- EMPTY STATE (If no posts match) --- */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-32 bg-white rounded-[3rem] border border-dashed border-slate-200">
          <div className="inline-flex w-16 h-16 bg-blue-50 text-blue-600 rounded-full items-center justify-center mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="font-mono text-slate-400 text-sm uppercase tracking-widest">
            Null sequence: No logs found in this category.
          </p>
          <button 
            onClick={() => setSelectedCategory('All')}
            className="mt-6 text-blue-600 font-bold text-xs underline underline-offset-4 hover:text-slate-900 transition-colors"
          >
            Clear_Filters
          </button>
        </div>
      )}
    </div>
  );
}