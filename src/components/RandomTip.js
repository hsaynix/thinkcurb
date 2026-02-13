"use client";
import { useState, useEffect } from 'react';

const techTips = [
  { topic: 'Performance', tip: 'Use `priority` on the Hero image in Next.js to boost your LCP score.' },
  { topic: 'SEO', tip: 'JSON-LD structured data helps Google understand your content better than Meta tags alone.' },
  { topic: 'React', tip: '`useMemo` is only for expensive calculations. Overusing it can actually slow down simple renders.' },
  { topic: 'CSS', tip: '`content-visibility: auto` can significantly improve rendering performance for long pages.' },
  { topic: 'Security', tip: 'Always use `rel="noopener noreferrer"` when using `target="_blank"` to prevent tab-nabbing.' }
];

export default function RandomTip() {
  const [tip, setTip] = useState(null);

  useEffect(() => {
    // Pick a random tip on mount
    const randomIdx = Math.floor(Math.random() * techTips.length);
    setTip(techTips[randomIdx]);
  }, []);

  if (!tip) return null;

  return (
    <div className="bg-brand-dark text-white p-6 rounded-3xl border border-white/10 font-mono text-[11px] shadow-2xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        <span className="opacity-40 ml-2">thinkcurb_insights.sh</span>
      </div>
      <p className="text-brand-blue mb-1 uppercase font-black tracking-widest">[{tip.topic}]</p>
      <p className="text-slate-300 leading-relaxed">$ {tip.tip}</p>
    </div>
  );
}