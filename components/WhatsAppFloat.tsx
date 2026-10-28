"use client";
import { siteConfig } from "@/lib/siteConfig";
export default function WhatsAppFloat() {
  if (siteConfig.whatsappCommunityUrl === "ADD_WHATSAPP_COMMUNITY_URL") return null;
  return (
    <a href={siteConfig.whatsappCommunityUrl} target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-50" aria-label="Join WhatsApp community">
      WhatsApp
    </a>
  );
}
