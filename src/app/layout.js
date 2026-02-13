// src/app/layout.js
import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';

// نستخدم ../ للخروج من مجلد app والدخول إلى components
import Footer from '../components/Footer'; 

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-white`}>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}