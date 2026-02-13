"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

// مكون الشعار المدمج داخلياً لسهولة الإدارة
const Logo = () => (
  <Link href="/" className="group flex items-center gap-3">
    <div className="relative w-10 h-10 flex items-center justify-center">
      {/* توهج خلفي ناعم */}
      <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      {/* أيقونة المربع التقني */}
      <div className="relative w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden border border-slate-800 transition-all duration-500 group-hover:rotate-[135deg] group-hover:rounded-[1rem] shadow-xl shadow-slate-200">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-blue-400"></div>
          <div className="absolute top-0 left-1/2 w-[0.5px] h-full bg-blue-400"></div>
        </div>
        <span className="text-blue-400 font-black text-lg group-hover:-rotate-[135deg] transition-transform duration-500">T</span>
      </div>
    </div>

    <div className="flex flex-col leading-none">
      <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
        Think<span className="text-blue-600">Curb</span>
      </span>
      <span className="text-[7px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1 group-hover:text-blue-600 transition-colors">
        Engineering Intelligence
      </span>
    </div>
  </Link>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // مراقبة التمرير لتغيير شفافية الهيدر
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl border-b border-slate-100 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        
        {/* الشعار */}
        <Logo />

        {/* أزرار التنقل (يمين) */}
        <div className="flex items-center gap-8">
          {/* رابط مخفي في الشاشات الصغيرة لجعل الهيدر بسيطاً جداً */}
         

          {/* زر التواصل الرئيسي */}
          <Link 
            href="/contact" 
            className="relative group overflow-hidden bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.4)] active:scale-95"
          >
            {/* طبقة خلفية تتحرك عند الـ Hover */}
            <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>
      </div>
    </header>
  );
}