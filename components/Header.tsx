"use client";
import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="JobMee" width={120} height={40} className="h-8 w-auto" onError={(e) => { const t = e.target as HTMLImageElement; t.style.display = "none"; const s = t.parentElement?.querySelector("span"); if (s) (s as HTMLElement).style.display = "inline"; }} />
          <span className="font-bold text-xl text-brand-navy" style={{ display: "none" }}>JobMee</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-brand-navy">
          <Link href="/" className="hover:text-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-1">Home</Link>
          <Link href="/about" className="hover:text-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-1">About</Link>
          <Link href="/contact" className="hover:text-brand-yellow focus:outline-none focus:ring-2 focus:ring-brand-yellow rounded px-1">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-brand-yellow text-brand-navy rounded-lg font-semibold hover:opacity-90">Find a Job</a>
          <a href={siteConfig.employerFormUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-brand-navy text-brand-navy rounded-lg font-semibold hover:bg-brand-navy hover:text-white">Hire Employees</a>
        </div>
        <button className="md:hidden text-brand-navy text-2xl" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 border-t border-brand-border">
          <Link href="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="py-2">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
          <a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-brand-yellow text-brand-navy rounded-lg font-semibold text-center">Find a Job</a>
          <a href={siteConfig.employerFormUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-brand-navy text-brand-navy rounded-lg font-semibold text-center">Hire Employees</a>
        </div>
      )}
    </header>
  );
}
