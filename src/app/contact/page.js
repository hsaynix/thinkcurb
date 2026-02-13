export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24" dir="rtl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* الجانب الأيمن: معلومات التواصل */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h1 className="text-5xl font-black text-brand-dark mb-6">دعنا نتحدث.</h1>
              <p className="text-gray-500 text-lg">لديك مشروع؟ أو ترغب في الاستفسار عن تقنية معينة؟ فريقنا مستعد للإجابة.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">✉</div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase">البريد الإلكتروني</div>
                  <div className="text-brand-dark font-bold">hello@thinkcurb.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* الجانب الأيسر: النموذج الاحترافي */}
          <div className="lg:w-2/3 bg-brand-light/50 p-8 md:p-12 rounded-[3rem] border border-brand-blue/5">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 text-right">
                <label className="text-xs font-black text-brand-dark mr-2 uppercase">الاسم الكامل</label>
                <input type="text" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all" />
              </div>
              <div className="space-y-2 text-right">
                <label className="text-xs font-black text-brand-dark mr-2 uppercase">البريد الإلكتروني</label>
                <input type="email" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 outline-none transition-all" />
              </div>
              <div className="md:col-span-2 space-y-2 text-right">
                <label className="text-xs font-black text-brand-dark mr-2 uppercase">رسالتك التقنية</label>
                <textarea rows="5" className="w-full bg-white p-5 rounded-2xl border border-gray-100 focus:border-brand-blue outline-none transition-all"></textarea>
              </div>
              <button className="md:col-span-2 bg-brand-blue text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-dark hover:shadow-2xl hover:shadow-brand-blue/20 transition-all active:scale-[0.98]">
                إرسال الطلب الآن
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}