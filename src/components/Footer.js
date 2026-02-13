"use client"; // 👈 هذا السطر هو الحل! يخبر Next.js أن هذا المكون يحتوي على تفاعل (Interactivity)

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // وظيفة العودة للأعلى
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-50/50 to-transparent -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 group">
              THINK<span className="text-blue-600 group-hover:text-blue-500 transition-colors">CURB</span>
            </Link>
            <p className="text-slate-500 mt-6 max-w-sm leading-relaxed text-sm font-medium">
              A premium space dedicated to modern engineering, AI architectural patterns, and high-end web development insights.
            </p>
            
            <div className="mt-8 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative"></span>
              </span>
             
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Explore</h4>
            <ul className="space-y-4">
              {['AI', 'Coding', 'Architecture'].map((item) => (
                <li key={item}>
                  <Link href={`/?category=${item}`} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-900 mb-6">Platform</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Privacy Policy', href: '/privacy' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              © {currentYear} ThinkCurb.
            </p>
          </div>

          {/* الزر الذي كان يسبب المشكلة أصبح يعمل الآن */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-900 hover:text-blue-600 transition-all focus:outline-none"
          >
            Back to top
            <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}