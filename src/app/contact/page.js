/**
 * Contact Page Component
 * Designed for High-End Blogs & AdSense Compliance
 */
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* الجانب الأيسر: معلومات التواصل */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter mb-8 leading-[1.1]">
              Let’s build the <span className="text-slate-400">future</span> together.
            </h1>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed max-w-md">
              Have a question about AI, web development, or just want to say hi? 
              I'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  ✉️
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Me</p>
                  <p className="font-bold text-slate-900">hello@thinkcurb.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                  🌍
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</p>
                  <p className="font-bold text-slate-900">Digital Nomad / Planet Earth</p>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيمن: نموذج المراسلة (Artistic Form) */}
          <div className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Subject</label>
                <select className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all appearance-none">
                  <option>General Inquiry</option>
                  <option>Collaboration</option>
                  <option>Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell me more about your project..."
                  className="w-full bg-white border border-slate-200 rounded-2xl px-5 py-4 text-sm outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-blue-600 transition-all active:scale-[0.98] shadow-xl shadow-slate-200">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}