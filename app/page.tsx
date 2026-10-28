import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Utensils, Sparkles, Calendar, Car, Truck, ShoppingBag, Briefcase, Wrench, Code, ArrowRight, MapPin, MessageCircle, Search } from "lucide-react";
import HeroIllustration from "@/components/HeroIllustration";

const categories = [
  { icon: Utensils, title: "Restaurant & Hotel Jobs", desc: "Waiters, chefs, cooks, kitchen helpers, housekeeping." },
  { icon: Sparkles, title: "Cleaning & Housekeeping", desc: "Home and office cleaners, housekeeping workers." },
  { icon: Calendar, title: "Events & Temporary Work", desc: "Event assistants, setup crews, catering staff." },
  { icon: Car, title: "Parking & Facility Services", desc: "Parking attendants, valet, facility assistants." },
  { icon: Truck, title: "Delivery & Logistics", desc: "Delivery personnel, warehouse assistants, loaders." },
  { icon: ShoppingBag, title: "Retail & Sales", desc: "Shop assistants, sales staff, cashiers." },
  { icon: Briefcase, title: "Office & Administration", desc: "Office assistants, receptionists, data entry." },
  { icon: Wrench, title: "Technical & Skilled Trades", desc: "Electricians, plumbers, mechanics, technicians." },
  { icon: Code, title: "IT & Professional Careers", desc: "Software developers, designers, engineers." },
];

const trending = ["Waiter / Restaurant Staff","Cook / Chef","Housekeeping Staff","Cleaner","Delivery Executive","Driver","Security Guard","Parking Attendant","Event Staff","Retail Sales Assistant","Office Assistant","Electrician","Plumber","Technician","Software Developer","IT Support Executive"];

const locations = ["Kozhikode","Kochi","Malappuram","Thrissur","Kannur","Thiruvananthapuram"];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden md:block"><HeroIllustration /></div>
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-cream text-brand-navy text-xs font-semibold tracking-widest">JOBS & OPPORTUNITIES IN KERALA</span>
          <h1 className="mt-6 text-5xl md:text-7xl font-bold text-brand-navy leading-tight">
            Your Next Opportunity<span className="text-brand-yellow">.</span><br />Starts Here<span className="text-brand-yellow">.</span>
          </h1>
          <p className="mt-4 text-brand-body text-lg">Discover jobs. Connect with employers. Build your future, closer to home.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-brand-yellow text-brand-navy rounded-full font-semibold hover:opacity-90 transition">Find a Job →</a>
            <a href={siteConfig.employerFormUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-brand-navy text-brand-navy rounded-full font-semibold hover:bg-brand-navy hover:text-white transition">Hire Employees ↗</a>
          </div>
          <div className="mt-10 bg-white border border-brand-border rounded-2xl shadow-sm p-3 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-3 items-end">
              <input placeholder="Job title or keyword" className="border border-brand-border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow" />
              <input placeholder="Location" className="border border-brand-border rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow" />
              <a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 bg-brand-yellow text-brand-navy rounded-lg font-semibold text-center">Search Jobs →</a>
            </div>
          </div>
          <p className="mt-4 text-xs text-brand-body">Local opportunities. Real connections. Across Kerala.</p>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy">Find Work Across Different Industries</h2>
          <p className="mt-2 text-brand-body">From everyday service jobs to specialist careers, explore different types of work in one place.</p>
          <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map(c => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-white p-5 rounded-xl border border-brand-border hover:border-brand-yellow hover:-translate-y-1 transition shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center text-brand-navy"><Icon size={20} /></div>
                  <h3 className="mt-3 font-semibold text-brand-navy">{c.title}</h3>
                  <p className="mt-1 text-sm text-brand-body">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trending roles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy">Explore Popular Job Roles</h2>
          <p className="mt-2 text-brand-body">Find work that matches your skills and experience.</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {trending.map(t => (
              <a key={t} href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 rounded-lg border border-brand-border hover:border-brand-yellow hover:shadow-sm transition">
                <span className="text-sm font-medium text-brand-navy">{t}</span>
                <ArrowRight size={16} className="text-brand-body" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-brand-border">
            <h3 className="text-2xl font-bold text-brand-navy">Looking for a Job?</h3>
            <p className="mt-2 text-brand-body">Tell us what kind of work you want, where you want to work, and what skills you bring.</p>
            <a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-5 py-2.5 bg-brand-yellow text-brand-navy rounded-lg font-semibold">Find a Job</a>
          </div>
          <div className="bg-brand-navy text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold">Need Staff for Your Business?</h3>
            <p className="mt-2 text-white/80">Tell us about your vacancy and the people you need for your team.</p>
            <a href={siteConfig.employerFormUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-5 py-2.5 bg-brand-yellow text-brand-navy rounded-lg font-semibold">Hire Employees</a>
          </div>
        </div>
      </section>

      {/* Kerala */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-brand-navy">Explore Opportunities Across Kerala</h2>
          <p className="mt-2 text-brand-body">From busy hospitality businesses in Kochi to retail and professional workplaces in Kozhikode and beyond.</p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
            {locations.map(l => (
              <a key={l} href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer" className="p-4 border border-brand-border rounded-lg text-center font-medium text-brand-navy hover:border-brand-yellow hover:shadow-sm transition flex items-center justify-center gap-2"><MapPin size={16} className="text-brand-yellow" />{l}</a>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp */}
      <section className="py-12 bg-brand-cream">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <MessageCircle className="mx-auto text-brand-yellow" size={32} />
          <h2 className="mt-3 text-2xl font-bold text-brand-navy">Stay Connected With JobMee</h2>
          <p className="mt-2 text-brand-body">Join our community to stay connected with JobMee and see the updates shared with members.</p>
          <a href={siteConfig.whatsappCommunityUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 px-5 py-2.5 bg-green-500 text-white rounded-lg font-semibold hover:opacity-90">Join Our WhatsApp Community</a>
        </div>
      </section>
    </div>
  );
}
