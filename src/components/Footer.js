import Link from 'next/link';

/**
 * Footer Component - Clean Lab Style
 * يتم استدعاؤه في layout.js لضمان ظهوره في كل الصفحات.
 */
export default function Footer() {
  return (
    <footer className="mt-40 border-t border-slate-100 bg-white relative overflow-hidden">
      {/* لمسة جمالية: خط أزرق رفيع جداً في أعلى الفوتر */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-right from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Section 1: Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center font-black text-[12px] text-white transition-all group-hover:bg-blue-600 shadow-sm">
                TC
              </div>
              <span className="font-mono text-base font-bold tracking-tighter text-slate-900">
                Think<span className="text-blue-600">Curb.</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
              A specialized laboratory for high-performance web architecture and digital engineering logs.
            </p>
          </div>

          {/* Section 2: Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Navigation_</h4>
            <ul className="space-y-4">
              <li><Link href="/#feed" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Feed Logs</Link></li>
              <li><Link href="/labs" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Engineering Labs</Link></li>
              <li><Link href="/contact" className="text-sm font-bold text-slate-600 hover:text-blue-600 transition-colors">Connect</Link></li>
            </ul>
          </div>

          {/* Section 3: System Status & Social */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">System_Status_</h4>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Deployment:</span>
                <span className="text-[10px] font-mono font-bold text-green-600 uppercase tracking-widest">Active_V2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase">Region:</span>
                <span className="text-[10px] font-mono font-bold text-slate-900 uppercase tracking-widest">Global_Edge</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="mt-20 pt-10 border-t border-slate-50 flex flex-col md:row items-center justify-between gap-6">
          <div className="font-mono text-[10px] tracking-widest uppercase text-slate-400 font-bold">
            © 2026 ThinkCurb Labs — Built for the Next Web
          </div>
          
          <div className="flex gap-8 font-mono text-[10px] uppercase tracking-widest font-bold">
            <Link href="/privacy" className="text-slate-400 hover:text-blue-600 transition-colors">Privacy_Policy</Link>
            <Link href="/terms" className="text-slate-400 hover:text-blue-600 transition-colors">Terminals_Of_Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}