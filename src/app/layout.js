import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

// إعداد خط Inter للعناوين والواجهات
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'ThinkCurb | Personal Blog',
    template: '%s | ThinkCurb'
  },
  description: 'A space for thoughts, stories, and ideas.',
  icons: {
    icon: '/favicon.ico', // تأكد من وجود أيقونة في مجلد public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="flex flex-col min-h-screen bg-[#fdfcfb] text-[#1a1a1a] antialiased">
        
        {/* --- HEADER البسيط --- */}
        <header className="w-full border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-3xl mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
              ThinkCurb<span className="text-blue-600">.</span>
            </Link>
            
            <nav className="flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                About
              </Link>
              {/* زر اشتراك بسيط أو تواصل */}
              <Link 
                href="#subscribe" 
                className="text-sm font-bold px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
              >
                Subscribe
              </Link>
            </nav>
          </div>
        </header>

        {/* --- CONTENT المحتوى الرئيسي --- */}
        <main className="flex-grow">
          {children}
        </main>

        {/* --- FOOTER التذييل --- */}
        <footer className="w-full border-t border-gray-100 py-16 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="mb-8">
              <Link href="/" className="text-lg font-bold">ThinkCurb</Link>
              <p className="text-sm text-gray-400 mt-2 font-serif italic">
                Writing about the things that matter.
              </p>
            </div>
            
            <div className="flex justify-center gap-6 mb-8 text-gray-400">
              {/* روابط التواصل الاجتماعي */}
              <a href="#" className="hover:text-black transition-colors text-sm">Twitter</a>
              <a href="#" className="hover:text-black transition-colors text-sm">GitHub</a>
              <a href="#" className="hover:text-black transition-colors text-sm">LinkedIn</a>
            </div>

            <p className="text-[10px] uppercase tracking-widest text-gray-300 font-bold">
              © {new Date().getFullYear()} ThinkCurb. All rights reserved.
            </p>
          </div>
        </footer>

      </body>
    </html>
  );
}