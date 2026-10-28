import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand-navy text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-bold text-xl">JobMee</div>
          <p className="text-sm mt-2 text-white/80">Connecting People. Build Opportunities.</p>
          <p className="text-sm mt-2 text-white/70">A Kerala-focused job and recruitment platform connecting job seekers with employers across different industries.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><a href={siteConfig.jobSeekerFormUrl} target="_blank" rel="noopener noreferrer">Find Jobs</a></li>
            <li><a href={siteConfig.employerFormUrl} target="_blank" rel="noopener noreferrer">Hire Employees</a></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Job Categories</h4>
          <ul className="space-y-1 text-sm text-white/80">
            <li>Hospitality</li><li>Cleaning and Housekeeping</li><li>Events</li><li>Parking and Facility Services</li>
            <li>Delivery and Logistics</li><li>Retail and Sales</li><li>Office and Administration</li>
            <li>Technical and Skilled Trades</li><li>IT and Professional Careers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-sm text-white/80">Phone: <a href={`tel:${siteConfig.contactPhone}`}>{siteConfig.contactPhone}</a></p>
          <p className="text-sm text-white/80">Email: {siteConfig.contactEmail}</p>
          <a href={siteConfig.whatsappCommunityUrl} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-4 py-2 bg-brand-yellow text-brand-navy rounded-lg font-semibold text-sm">Join Our WhatsApp Community</a>
        </div>
      </div>
      <div className="border-t border-white/10 text-center text-xs text-white/60 py-4">© {year} JobMee. All rights reserved.</div>
    </footer>
  );
}
