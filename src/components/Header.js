"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Header Component - Clean Lab Style
 * يتميز بتصميم زجاجي (Backdrop Blur) وتفاعل ذكي مع التمرير.
 */
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // مراقبة التمرير لتغيير خلفية الهيدر
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
        ? 'h-16 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-sm' 
        : 'h-24 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        
        {/* --- LOGO AREA --- */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center font-black text-white transition-all duration-500 group-hover:rotate-[15deg] group-hover:scale-110 shadow-lg shadow-blue-200">
            TC
          </div>
          <span className="font-mono text-lg font-bold tracking-tighter text-slate-900">
            Think<span className="text-blue-600">Curb.</span>
          </span>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
            <Link 
              href="/#feed" 
              className="text-slate-500 hover:text-blue-600 transition-colors relative group"
            >
              Feed_
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all group-hover:w-full" />
            </Link>
            
            <Link 
              href="/labs" 
              className="text-slate-500 hover:text-blue-600 transition-colors relative group"
            >
              Labs_
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-600 transition-all group-hover:w-full" />
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="px-6 py-2 bg-slate-900 text-white text-[10px] font-mono font-black uppercase tracking-widest rounded-full hover:bg-blue-600 transition-all shadow-md active:scale-95"
          >
            Connect.
          </Link>
        </div>

        {/* --- MOBILE TOGGLE (Simple Version) --- */}
        <div className="md:hidden">
          <button className="p-2 text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}