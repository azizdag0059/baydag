"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Hammer, Flame, MessageSquare, Phone, Menu, X, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Dönüşüm Vitrini", href: "#before-after" },
    { name: "AI Atölye Danışmanı", href: "#ai-assistant" },
    { name: "Projelerimiz", href: "#projects" },
    { name: "Zanaat & Hakkımızda", href: "#about" },
    { name: "İletişim & Keşif", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d0f12]/95 backdrop-blur-md border-b border-[#28303d] shadow-2xl py-3.5"
          : "bg-gradient-to-b from-[#0d0f12]/95 via-[#0d0f12]/80 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative w-11 h-11 bg-[#181d24] border border-[#ff5e14]/60 flex items-center justify-center transition-all duration-300 group-hover:border-[#ff5e14] group-hover:shadow-[0_0_15px_rgba(255,94,20,0.5)]">
              <Hammer className="w-5 h-5 text-[#ff5e14] transition-transform duration-300 group-hover:rotate-12" />
              <Flame className="w-3.5 h-3.5 text-[#f59e0b] absolute -top-1.5 -right-1.5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-wider text-white uppercase">
                  BAYDAĞ
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#ff5e14] tracking-wider uppercase">
                  DEMİR
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-[#8b9bb0] tracking-widest">
                <ShieldCheck className="w-3 h-3 text-[#ff5e14]" />
                <span>Tekirdağ / Süleymanpaşa</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav - Generous Spacing & Padding */}
          <nav className="hidden xl:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-sm font-semibold text-[#d1d5db] hover:text-white px-4 py-2 hover:bg-[#181d24] border border-transparent hover:border-[#28303d] transition-all duration-200 uppercase tracking-wide relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#ff5e14] transition-all duration-300 group-hover:w-3/4" />
              </a>
            ))}
          </nav>

          {/* Tablet Nav (Between lg and xl) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#d1d5db] hover:text-white px-2.5 py-1.5 hover:bg-[#181d24] transition-colors uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/905348748713?text=Merhaba%20Bayda%C4%9F%20Demir%2C%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20ke%C5%9Fif%20ve%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff5e14] hover:bg-[#e04e0b] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-black transition-all duration-200 shadow-[0_0_20px_rgba(255,94,20,0.3)] hover:shadow-[0_0_25px_rgba(255,94,20,0.6)] border border-[#ff5e14]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ücretsiz Keşif Hattı</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-[#d1d5db] hover:text-[#ff5e14] border border-[#28303d] bg-[#181d24]"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f12] border-b border-[#28303d] px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-gray-200 hover:text-[#ff5e14] py-2 border-b border-[#1f242d]"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <a
                href="https://wa.me/905348748713?text=Merhaba%20Bayda%C4%9F%20Demir%2C%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20ke%C5%9Fif%20ve%20fiyat%20teklifi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#ff5e14] text-white py-3 text-xs uppercase tracking-wider font-black"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp İle Keşif İste</span>
              </a>
              <a
                href="tel:+905348748713"
                className="flex items-center justify-center gap-2 bg-[#181d24] border border-[#28303d] text-gray-200 py-3 text-xs uppercase tracking-wider font-semibold"
              >
                <Phone className="w-4 h-4 text-[#ff5e14]" />
                <span>Atölye: 0534 874 87 13</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
