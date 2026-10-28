"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<"" | "success">("");
  function validate() {
    const e: Record<string,string> = {};
    if (!form.name) e.name = "Name is required";
    if (!form.email) e.email = "Email is required";
    if (!form.subject) e.subject = "Subject is required";
    if (!form.message) e.message = "Message is required";
    return e;
  }
  function submit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // Form submission endpoint not configured yet; mark as needing setup
      setStatus("success");
    }
  }
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-brand-navy">Need Help With a Job or Hiring? Talk to Us.</h1>
      <p className="mt-4 text-brand-body">Looking for work? Need staff for your business? Have a question about JobMee? Send us a message.</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div>
          <label className="block text-sm font-medium text-brand-navy">Full name</label>
          <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="mt-1 w-full border border-brand-border rounded-lg px-3 py-2" />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy">Email address</label>
          <input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="mt-1 w-full border border-brand-border rounded-lg px-3 py-2" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy">Phone number (optional)</label>
          <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="mt-1 w-full border border-brand-border rounded-lg px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy">Enquiry type</label>
          <select value={form.type} onChange={e=>setForm({...form,type:e.target.value})} className="mt-1 w-full border border-brand-border rounded-lg px-3 py-2">
            <option value="">Select</option>
            <option>Looking for a Job</option>
            <option>Hiring Employees</option>
            <option>Recruitment Partnerships</option>
            <option>General Questions</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy">Subject</label>
          <input value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} className="mt-1 w-full border border-brand-border rounded-lg px-3 py-2" />
          {errors.subject && <p className="text-red-600 text-sm">{errors.subject}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-brand-navy">Message</label>
          <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="mt-1 w-full border border-brand-border rounded-lg px-3 py-2" rows={4} />
          {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
        </div>
        <button type="submit" className="px-5 py-3 bg-brand-yellow text-brand-navy rounded-lg font-semibold">Send Message</button>
        {status === "success" && <p className="text-green-700">Message received. Note: backend submission endpoint still needs to be configured.</p>}
      </form>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-brand-navy">Contact Details</h2>
        <p className="mt-2 text-brand-body">Phone: <a href={`tel:${siteConfig.contactPhone}`}>{siteConfig.contactPhone}</a></p>
        <p className="text-brand-body">Email: {siteConfig.contactEmail}</p>
      </div>
    </div>
  );
}
