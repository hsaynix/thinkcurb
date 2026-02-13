/**
 * Terms of Service Page
 * Ready for Google AdSense compliance
 */
export default function TermsPage() {
  return (
    <article className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            Terms of Service
          </h1>
          <p className="text-slate-500 font-medium">
            Last updated: February 13, 2026
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using <strong>ThinkCurb</strong>, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials on ThinkCurb's website 
              for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>You may not modify or copy the materials.</li>
              <li>You may not use the materials for any commercial purpose.</li>
              <li>You may not attempt to decompile or reverse engineer any software contained on the site.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
            <p>
              The materials on ThinkCurb's website are provided on an 'as is' basis. ThinkCurb makes no 
              warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
            <p>
              In no event shall ThinkCurb or its suppliers be liable for any damages arising out of the 
              use or inability to use the materials on ThinkCurb's website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and 
              you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>

        {/* Contact Note */}
        <div className="mt-16 p-8 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
          <p className="text-sm font-bold text-slate-900 mb-2">Have questions about our terms?</p>
          <a href="/contact" className="text-blue-600 font-black uppercase text-xs tracking-widest hover:underline">
            Contact Support →
          </a>
        </div>
      </div>
    </article>
  );
}