export default function Terms() {
  const terms = [
    {
      id: "01",
      title: "قبول الشروط",
      content: "بمجرد دخولك واستخدامك لمنصة ThinkCurb، فإنك تقر بموافقتك الكاملة على هذه الشروط. إذا كنت لا توافق على أي جزء منها، يرجى التوقف عن استخدام الموقع."
    },
    {
      id: "02",
      title: "حقوق الملكية الفكرية",
      content: "جميع المحتويات البرمجية، المقالات، والتصاميم هي ملك حصري لـ ThinkCurb. يُمنع منعاً باتاً نسخ أو إعادة توزيع المحتوى لأغراض تجارية دون إذن كتابي مسبق."
    },
    {
      id: "03",
      title: "إخلاء المسؤولية التقنية",
      content: "الأكواد والدروس المقدمة هي لأغراض تعليمية. نحن نبذل قصارى جهدنا لضمان دقتها، ولكننا غير مسؤولين عن أي أضرار ناتجة عن استخدامها بشكل غير صحيح في بيئات الإنتاج."
    },
    {
      id: "04",
      title: "روابط الطرف الثالث",
      content: "قد يحتوي موقعنا على روابط لمواقع خارجية. نحن لا نتحكم في محتوى هذه المواقع ولا نتحمل مسؤولية سياسات الخصوصية أو الممارسات الخاصة بها."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-32 pb-24" dir="rtl">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header الصفحة */}
        <header className="mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-light rounded-full mb-6">
            <span className="w-2 h-2 bg-brand-blue rounded-full"></span>
            <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Legal Document</span>
          </div>
          <h1 className="text-5xl font-black text-brand-dark mb-6 tracking-tight">شروط وأحكام <br/> الاستخدام</h1>
          <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
            يرجى قراءة هذه الشروط بعناية قبل البدء في استخدام المنصة لضمان فهم حقوقك وواجباتك كمستخدم.
          </p>
        </header>

        {/* شبكة الشروط */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {terms.map((item) => (
            <div key={item.id} className="p-10 bg-brand-light/40 border border-brand-blue/5 rounded-[2.5rem] hover:border-brand-blue/20 transition-all group">
              <div className="text-brand-blue font-black text-xs mb-4 opacity-40 group-hover:opacity-100 transition-opacity tracking-widest">
                SECTION {item.id}
              </div>
              <h2 className="text-xl font-black text-brand-dark mb-4">{item.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.content}
              </p>
            </div>
          ))}
        </div>

        {/* التحديث الأخير */}
        <div className="mt-20 p-8 border-t border-gray-100 flex justify-between items-center">
          <p className="text-xs text-gray-400 font-medium">آخر تحديث لهذه الاتفاقية: 13 فبراير 2026</p>
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-brand-blue rounded-full opacity-20"></div>
            <div className="w-2 h-2 bg-brand-blue rounded-full opacity-40"></div>
            <div className="w-2 h-2 bg-brand-blue rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </div>
  );
}