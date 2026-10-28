import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import HeroIllustration from "@/components/HeroIllustration";
import { Briefcase, FileCheck, TrendingUp, Users, Trophy, Lightbulb, Search, MapPin } from "lucide-react";

export const metadata = {
  title: "About JobMee | Jobs and Recruitment in Kerala",
  description: "Learn about JobMee, a Kerala-focused job and recruitment platform connecting job seekers with employers across hospitality, retail, cleaning, skilled trades, office work, and IT.",
};

const floats = [
  { Icon: Briefcase, color: "#FFC928", delay: 0 },
  { Icon: FileCheck, color: "#DDEBFA", delay: 0.6 },
  { Icon: TrendingUp, color: "#FFC928", delay: 1.2 },
  { Icon: Users, color: "#DDEBFA", delay: 1.8 },
  { Icon: Trophy, color: "#FFC928", delay: 2.4 },
  { Icon: Lightbulb, color: "#DDEBFA", delay: 3.0 },
];

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-brand-cream text-brand-navy text-xs font-semibold">JOBMEE</span>
              <span className="px-3 py-1 rounded-full bg-brand-cream text-brand-navy text-xs font-semibold">OUR STORY</span>
            </div>
            <h1 className="mt-4 text-4xl md:text-6xl font-bold text-brand-navy leading-tight">Opportunity should be <span className="text-brand-yellow">closer.</span></h1>
            <p className="mt-4 text-brand-body text-lg max-w-xl">Finding work shouldn't feel complicated. Finding the right people shouldn't either. JobMee brings job seekers and employers together, making opportunities easier to discover across Kerala.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-yellow text-brand-navy rounded-lg font-semibold hover:opacity-90">Explore Jobs →</a>
              <a href={siteConfig.employerFormUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-brand-navy text-brand-navy rounded-lg font-semibold hover:bg-brand-navy hover:text-white">Hire Employees ↗</a>
            </div>
          </div>
          <div className="relative w-full aspect-[4/3]">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" fill="none" aria-hidden="true">
              <path d="M -20 120 Q 120 40 220 160 T 420 120" stroke="#DDEBFA" strokeWidth="2" fill="none" />
              <path d="M -20 200 Q 100 260 220 140 T 420 200" stroke="#FFC928" strokeWidth="1.5" opacity="0.5" fill="none" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-2xl bg-brand-navy text-white flex items-center justify-center text-2xl font-bold shadow-lg" style={{ animation: "breathe 4s ease-in-out infinite" }}>JM</div>
            </div>
            {floats.map((f, i) => {
              const Icon = f.Icon;
              const positions = [
                { top: "8%", left: "10%" }, { top: "12%", right: "8%" },
                { top: "45%", left: "2%" }, { top: "50%", right: "2%" },
                { bottom: "8%", left: "20%" }, { bottom: "10%", right: "18%" },
              ][i];
              return (
                <div key={i} className="absolute bg-white rounded-xl shadow-md border border-brand-border flex items-center justify-center text-brand-navy"
                  style={{ width: 48, height: 48, ...positions, animation: `float ${4 + i * 0.5}s ease-in-out ${f.delay}s infinite`, background: f.color === "#FFC928" ? "#FFF9E8" : "#FFFFFF" }}>
                  <Icon size={22} />
                </div>
              );
            })}
            
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4">
          <span className="text-xs font-semibold tracking-widest text-brand-yellow">01 — THE PROBLEM</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-brand-navy">Good opportunities shouldn't be hard to find.</h2>
          <p className="mt-4 text-brand-body max-w-3xl">Job seekers often struggle to find relevant openings. Businesses spend valuable time searching for the right people. JobMee exists to make that connection simpler.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { icon: Search, title: "Finding the right work", desc: "Discover opportunities that match your skills, interests, and location." },
              { icon: Users, title: "Finding the right people", desc: "Connect with people who are ready to contribute to your business." },
              { icon: MapPin, title: "Opportunities closer to home", desc: "Make it easier for people and businesses across Kerala to connect." },
            ].map(c => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-white p-6 rounded-xl border border-brand-border hover:shadow-md transition">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center text-brand-navy"><Icon size={20} /></div>
                  <h3 className="mt-3 font-semibold text-brand-navy">{c.title}</h3>
                  <p className="mt-1 text-sm text-brand-body">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy">Four principles behind JobMee.</h2>
          <p className="mt-2 text-brand-body">The way we think about work, opportunity, and connection.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "01", title: "Opportunity for Everyone", desc: "Everyone deserves a fair chance to discover opportunities that match their potential." },
              { n: "02", title: "Keep It Simple", desc: "Finding work or hiring someone should feel straightforward, not overwhelming." },
              { n: "03", title: "Local Connections Matter", desc: "Help people discover opportunities closer to where they live and work." },
              { n: "04", title: "Build Trust", desc: "Create a dependable experience for both job seekers and employers." },
            ].map(v => (
              <div key={v.title} className="bg-white p-6 rounded-xl border border-brand-border hover:shadow-md transition text-left relative">
                <span className="absolute top-4 right-4 text-xs font-bold text-brand-yellow">{v.n}</span>
                <h3 className="font-semibold text-brand-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-brand-body">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark impact */}
      <section className="py-16 bg-brand-navy text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-xs font-semibold tracking-widest text-brand-yellow">04 — OUR IMPACT</span>
          <h2 className="mt-3 text-4xl font-bold">Every connection starts with an opportunity.</h2>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">We're working to make job discovery and recruitment simpler for people and businesses across Kerala.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Job Discovery" },
              { n: "02", t: "Recruitment" },
              { n: "03", t: "Local Opportunities" },
              { n: "04", t: "Better Connections" },
            ].map(m => (
              <div key={m.t} className="border-t border-white/20 pt-4">
                <div className="text-3xl font-bold text-brand-yellow">{m.n}</div>
                <div className="mt-1 text-sm text-white/80">{m.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-brand-cream text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy">Your next opportunity starts here.</h2>
          <p className="mt-3 text-brand-body">Whether you're looking for your next job or searching for the right people, JobMee is here to help you take the next step.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 bg-brand-yellow text-brand-navy rounded-lg font-semibold">Find a Job →</a>
            <a href={siteConfig.employerFormUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-3 border border-brand-navy text-brand-navy rounded-lg font-semibold hover:bg-brand-navy hover:text-white">Hire Employees →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
