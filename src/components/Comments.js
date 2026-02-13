"use client";

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <section className="mt-20 pt-10 border-t border-gray-100">
      {/* عنوان قسم التعليقات بستايل المدونة العادي الأنيق */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          Comments & Discussion
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Join the conversation using your GitHub account.
        </p>
      </div>
      
      <Giscus
        id="comments-protocol"
        repo="hsaynix/thinkcurb"           // المستودع الخاص بك
        repoId="R_kgDORPiUeg"             // المعرف المستخرج
        category="General"                // القسم المختار
        categoryId="DIC_kwDORPiUes4C2XHM" // معرف القسم المستخرج
        mapping="pathname"                // ربط التعليقات بعنوان كل مقال
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"            // وضع صندوق الكتابة في الأسفل
        theme="preferred_color_scheme"    // يتغير تلقائياً حسب وضع جهاز القارئ
        lang="en"
        loading="lazy"
      />
    </section>
  );
}