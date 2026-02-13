export default function Privacy() {
  const sections = [
    { title: "البيانات التي نجمعها", content: "نحن نجمع فقط المعلومات الضرورية لتحسين تجربة تصفحك للموقع، مثل نوع المتصفح والصفحات المزارة." },
    { title: "الإعلانات والطرف الثالث", content: "نحن نستخدم Google AdSense لعرض الإعلانات، والتي قد تستخدم ملفات تعريف الارتباط DART لتخصيص الإعلانات لك." },
    { title: "حماية البيانات", content: "تشفير البيانات هو أولويتنا، جميع اتصالاتك مع موقعنا مؤمنة عبر بروتوكول SSL العالمي." }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24" dir="rtl">
      <div className="max-w-3xl mx-auto px-6">
        <header className="mb-20 text-right">
          <h1 className="text-5xl font-black text-brand-dark mb-6 tracking-tight">سياسة الخصوصية</h1>
          <p className="text-gray-400 font-medium italic">آخر تحديث: فبراير 2026</p>
        </header>

        <div className="space-y-12">
          {sections.map((sec, index) => (
            <div key={index} className="relative pr-10 border-r-2 border-brand-blue/10 hover:border-brand-blue transition-colors group">
              <div className="absolute top-0 right-[-6px] w-2.5 h-2.5 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <h2 className="text-2xl font-black text-brand-dark mb-4">{sec.title}</h2>
              <p className="text-gray-500 leading-relaxed text-lg">{sec.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}