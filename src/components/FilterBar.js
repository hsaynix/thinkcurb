"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function FilterBar({ selectedCategory, currentSearch }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Local state for the input to allow fast typing
  const [searchTerm, setSearchTerm] = useState(currentSearch || '');

  // Sync local state if the URL is reset externally (e.g., clicking "Clear Filters")
  useEffect(() => {
    setSearchTerm(currentSearch || '');
  }, [currentSearch]);

  /**
   * Core function to update URL search parameters
   */
  const applyFilters = (updates) => {
    const params = new URLSearchParams(searchParams.toString());

    // Handle Category update
    if (updates.category !== undefined) {
      if (updates.category === 'All' || !updates.category) {
        params.delete('category');
      } else {
        params.set('category', updates.category);
      }
    }

    // Handle Search update
    if (updates.search !== undefined) {
      if (updates.search.trim()) {
        params.set('search', updates.search.trim());
      } else {
        params.delete('search');
      }
    }

    // Always reset to page 1 when filters change
    params.set('page', '1');

    // Push the new URL
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    applyFilters({ search: searchTerm });
  };

  const categories = ['All', 'Coding', 'AI', 'Architecture', 'Design'];

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-between items-center w-full">
      
      {/* 🏷️ Category Selection (Pills) */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 w-full md:w-auto">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat || (cat === 'All' && !selectedCategory);
          return (
            <button
              key={cat}
              onClick={() => applyFilters({ category: cat })}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap border ${
                isActive
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-100'
                  : 'bg-white border-slate-200 text-slate-500 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 🔍 Search Input Form */}
      <form 
        onSubmit={handleSearchSubmit}
        className="relative w-full md:w-80 group"
      >
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg 
            className={`h-5 w-5 transition-colors ${searchTerm ? 'text-blue-500' : 'text-slate-400'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-12 py-2.5 bg-white border border-slate-200 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
        />
        {/* Submit button inside the input for better UX */}
        {searchTerm && (
         <button 
    type="submit"
    className="absolute right-1.5 inset-y-1.5 px-3 flex items-center justify-center text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-500 rounded-lg hover:bg-blue-600 hover:text-white transition-all active:scale-95 z-10"
  >
    Search
  </button>
        )}
      </form>
    </div>
  );
}