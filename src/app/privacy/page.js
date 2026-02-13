/**
 * Privacy Policy Page (LTR)
 * Mandatory for Google AdSense Approval
 */
export default function PrivacyPage() {
  return (
    <article dir="ltr" className="min-h-screen bg-white pt-32 pb-20 text-left">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header Section */}
        <header className="mb-16 border-b border-slate-100 pb-10">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">
            Security & Data
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            Privacy Policy
          </h1>
          <p className="text-slate-500 font-medium">
            Last Updated: <span className="text-slate-900">February 13, 2026</span>
          </p>
        </header>

        {/* content */}
        <div className="space-y-12 text-slate-600 leading-relaxed">
          
          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-600"></span>
              1. Information We Collect
            </h2>
            <p>
              We collect information directly from you when you subscribe to our newsletter or fill out a contact form. This may include your name and email address.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-600"></span>
              2. Cookies and Web Beacons
            </h2>
            <p>
              Like any other website, <strong>ThinkCurb</strong> uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.
            </p>
          </section>

          {/* CRITICAL FOR ADSENSE */}
          <section className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-600"></span>
              3. Google DoubleClick DART Cookie
            </h2>
            <p className="text-sm">
              Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-600"></span>
              4. Third Party Privacy Policies
            </h2>
            <p>
              ThinkCurb's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-blue-600"></span>
              5. Consent
            </h2>
            <p>
              By using our website, you hereby consent to our Privacy Policy and agree to its terms.
            </p>
          </section>

        </div>

        {/* Minimalist Footer Link */}
        <div className="mt-20 py-10 border-t border-slate-100 flex justify-between items-center">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">ThinkCurb Legal</p>
          <a href="/contact" className="text-xs font-black uppercase text-blue-600 hover:underline">
            Request Data Deletion →
          </a>
        </div>

      </div>
    </article>
  );
}