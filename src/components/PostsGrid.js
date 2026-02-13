"use client";
import Link from 'next/link';

export default function PostsGrid({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {posts.map((post, index) => (
        <Link key={post.id} href={`/blog/${post.id}`} className="block group">
          <div className="google-card h-full flex flex-col">
            <span className="text-[10px] font-black uppercase text-blue-600 mb-4 block">
              {post.category || "Research"}
            </span>
            <h2 className="text-2xl font-display mb-4 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-slate-500 text-sm line-clamp-3 mb-8">
              {post.excerpt}
            </p>
            <div className="mt-auto pt-6 border-t border-slate-50 font-bold text-[11px] uppercase">
              View Analysis →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}