/**
 * About Us Page (LTR)
 * Artistic presentation of the blog's mission.
 */
export default function AboutPage() {
  return (
    <article dir="ltr" className="min-h-screen bg-white pt-32 pb-20 text-left">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Hero Section */}
        <header className="mb-20">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">
            Our Identity
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-8 leading-[0.9]">
            We bridge the gap between <span className="text-slate-400">code</span> and <span className="text-blue-600">art.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            ThinkCurb is a digital sanctuary for developers, architects, and AI enthusiasts. 
            We provide deep insights into modern engineering while maintaining a focus on high-end design.
          </p>
        </header>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">
          <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 transition-transform hover:-translate-y-2 duration-500">
            <div className="text-3xl mb-6">🚀</div>
            <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">The Mission</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To empower the next generation of engineers with high-quality tutorials, 
              architectural patterns, and the latest trends in Artificial Intelligence.
            </p>
          </div>

          <div className="p-10 bg-blue-600 rounded-[3rem] text-white transition-transform hover:-translate-y-2 duration-500 shadow-xl shadow-blue-100">
            <div className="text-3xl mb-6">💡</div>
            <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">The Vision</h3>
            <p className="opacity-90 text-sm leading-relaxed text-blue-50">
              We believe that technical content shouldn't be boring. Our goal is to make 
              complex concepts accessible through beautiful interfaces and clear logic.
            </p>
          </div>
        </div>

        {/* Detailed Content */}
        <div className="prose prose-slate prose-lg max-w-none text-slate-600">
          <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight">Why ThinkCurb?</h2>
          <p>
            In an era dominated by AI and rapid technological shifts, staying ahead requires 
            more than just reading documentation. It requires understanding the "why" behind 
            the "how". ThinkCurb was founded in 2026 to serve as a curated guide through 
            the noise of the tech industry.
          </p>
          <p>
            Whether you are here to learn about **Generative AI**, **System Architecture**, 
            or **Next.js patterns**, you will find content that is meticulously researched 
            and artistically presented.
          </p>
        </div>

       

      </div>
    </article>
  );
}