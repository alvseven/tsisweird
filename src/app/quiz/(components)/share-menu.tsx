"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Share, Check, Copy, ChevronDown } from "lucide-react";
import { XIcon } from "@/app/(components)/icons/x";
import { WhatsAppIcon } from "@/app/(components)/icons/whatsapp";
import { LinkedInIcon } from "@/app/(components)/icons/linkedin";
import { cn } from "@/lib/utils";

type ShareMenuProps = {
  shareText: string;
  shareUrl: string;
};

export function ShareMenu({ shareText, shareUrl }: ShareMenuProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setOpen(false);
    }, 1500);
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
    setOpen(false);
  };

  const shareOnWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${shareUrl}`)}`,
      "_blank"
    );
    setOpen(false);
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
    setOpen(false);
  };

  const menuItems = [
    {
      label: copied ? "Copied!" : "Copy to clipboard",
      icon: copied ? (
        <Check className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5 shrink-0" />
      ),
      onClick: copyToClipboard,
    },
    {
      label: "Share on X",
      icon: <XIcon className="w-3.5 h-3.5 shrink-0" />,
      onClick: shareOnTwitter,
    },
    {
      label: "Share on WhatsApp",
      icon: <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />,
      onClick: shareOnWhatsApp,
    },
    {
      label: "Share on LinkedIn",
      icon: <LinkedInIcon className="w-3.5 h-3.5 shrink-0" />,
      onClick: shareOnLinkedIn,
    },
  ];

  return (
    <div className="relative" ref={menuRef}>
      <button
        className={cn(
          "inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm",
          "bg-white/[0.05] border border-white/[0.08] text-slate-300 font-sans",
          "hover:bg-white/[0.08] hover:text-slate-100 transition-all duration-150"
        )}
        onClick={() => setOpen(!open)}
      >
        <Share className="w-3.5 h-3.5" />
        Share
        <ChevronDown
          className={cn(
            "w-3.5 h-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.97 }}
            transition={{ duration: 0.12 }}
            className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-[#151937] border border-white/[0.08] rounded-xl shadow-2xl overflow-hidden w-max z-50"
          >
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={item.onClick}
                className="flex items-center gap-2.5 w-full px-4 py-2.5 text-xs text-slate-300 hover:bg-white/[0.06] hover:text-slate-100 transition-colors duration-150 font-roboto-mono whitespace-nowrap"
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
