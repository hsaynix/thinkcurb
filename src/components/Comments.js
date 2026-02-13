"use client";

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <section className="mt-20 pt-20 border-t border-slate-100">
      <div className="mb-10 flex items-center gap-4">
        <h3 className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">
          // Engineering_Discussions
        </h3>
        <div className="h-[1px] flex-1 bg-slate-50" />
      </div>
      
      <Giscus
        id="comments-protocol"
        repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME" // استبدلها برابط مستودعك
        repoId="YOUR_REPO_ID"
        category="General"
        categoryId="YOUR_CATEGORY_ID"
        mapping="pathname"
        term="Welcome to the Lab!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light" // متوافق مع الثيم الأبيض والأزرق
        lang="en"
        loading="lazy"
      />
    </section>
  );
}