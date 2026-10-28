"use client";
import { Code, TrendingUp, Calculator, Utensils, Palette, MapPin } from "lucide-react";

const cards = [
  { icon: Code, title: "Software Developer", loc: "Kochi", top: "8%", left: "4%", delay: 0 },
  { icon: TrendingUp, title: "Sales Executive", loc: "Kozhikode", top: "14%", right: "6%", delay: 0.8 },
  { icon: Calculator, title: "Accountant", loc: "Malappuram", top: "46%", left: "2%", delay: 1.6 },
  { icon: Utensils, title: "Hotel Staff", loc: "Kochi", top: "52%", right: "4%", delay: 2.4 },
  { icon: Palette, title: "Graphic Designer", loc: "Thrissur", bottom: "8%", left: "30%", delay: 3.2 },
];

export default function HeroIllustration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 600" fill="none">
        <path d="M100 100 Q300 50 500 200 T900 150" stroke="#FFC928" strokeWidth="1" opacity="0.3" fill="none" />
        <path d="M200 500 Q400 450 600 520 T1000 480" stroke="#192E52" strokeWidth="1" opacity="0.15" fill="none" />
        {[150,350,550,750,950].map(x => (
          <circle key={x} cx={x} cy="300" r="3" fill="#FFC928" opacity="0.4" />
        ))}
      </svg>
      {cards.map((c, i) => {
        const Icon = c.icon;
        return (
          <div key={i} className="absolute bg-white rounded-xl shadow-lg border border-brand-border px-3 py-2 flex items-center gap-2"
            style={{ top: c.top, left: c.left, right: c.right, bottom: c.bottom, animation: `float ${5 + i * 0.5}s ease-in-out ${c.delay}s infinite` }}>
            <div className="w-7 h-7 rounded-lg bg-brand-cream flex items-center justify-center text-brand-navy"><Icon size={14} /></div>
            <div>
              <div className="text-xs font-semibold text-brand-navy">{c.title}</div>
              <div className="text-[10px] text-brand-body flex items-center gap-1"><MapPin size={9} />{c.loc}</div>
            </div>
          </div>
        );
      })}
      <style jsx>{`
        @keyframes float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        @media (prefers-reduced-motion: reduce){ div{animation:none !important;} }
      `}</style>
    </div>
  );
}
