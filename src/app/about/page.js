export default function About() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section ناعم */}
      <section className="pt-32 pb-20 bg-brand-light/30 border-b border-brand-blue/5">
        <div className="max-w-4xl mx-auto px-6 text-right">
          <span className="text-brand-blue font-bold text-sm tracking-widest uppercase mb-4 block">قصتنا</span>
          <h1 className="text-5xl md:text-7xl font-black text-brand-dark leading-tight">
            نعيد صياغة <br /> <span className="text-brand-blue">المستقبل التقني</span> العربي.
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-brand-dark">رؤيتنا</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              بدأت **ThinkCurb** كمبادرة لتبسيط هندسة البرمجيات المعقدة. نحن نؤمن أن المحتوى العربي يستحق أن يكون مرجعاً عالمياً في الدقة والأداء.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-brand-light rounded-3xl border border-brand-blue/5">
              <div className="text-3xl font-black text-brand-blue mb-2">99%</div>
              <div className="text-xs font-bold text-gray-400 uppercase">دقة الكود</div>
            </div>
            <div className="p-6 bg-brand-blue text-white rounded-3xl">
              <div className="text-3xl font-black mb-2">+50</div>
              <div className="text-xs font-bold opacity-80 uppercase">درس تقني</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}