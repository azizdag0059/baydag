"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Phone, Menu, X, ChevronDown, Wrench, Building2, Flame } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceGroups = [
    {
      title: "Demir Doğrama & Korkuluk",
      icon: Wrench,
      items: [
        { name: "Demir Doğrama İmalatı", href: "/hizmetler/demir-dograma-tekirdag" },
        { name: "Demir & Ferforje Korkuluk", href: "/hizmetler/demir-korkuluk-tekirdag" },
        { name: "Çelik & Lazer Korkuluk", href: "/hizmetler/celik-korkuluk-tekirdag" },
        { name: "CNC Lazer Kesim Sac", href: "/hizmetler/lazer-kesim-tekirdag" },
      ],
    },
    {
      title: "Çelik Yapı, Çatı & Hangar",
      icon: Building2,
      items: [
        { name: "Çelik Konstrüksiyon", href: "/hizmetler/celik-konstruksiyon-tekirdag" },
        { name: "Çelik Çatı & Sundurma", href: "/hizmetler/celik-cati-tekirdag" },
        { name: "Çelik Hangar & Depo", href: "/hizmetler/hangar-tekirdag" },
        { name: "Çelik Asma Kat", href: "/hizmetler/asma-kat-tekirdag" },
      ],
    },
    {
      title: "Merdiven, Kapı & Yaşam",
      icon: Flame,
      items: [
        { name: "Çelik Merdiven İmalatı", href: "/hizmetler/celik-merdiven-tekirdag" },
        { name: "Çelik Villa & Bina Kapısı", href: "/hizmetler/celik-kapi-tekirdag" },
        { name: "Motorlu Bahçe Kapısı", href: "/hizmetler/bahce-kapisi-tekirdag" },
        { name: "Çelik Kanopi & Sundurma", href: "/hizmetler/canopi-tekirdag" },
        { name: "Çelik Pergola & Veranda", href: "/hizmetler/pergola-tekirdag" },
        { name: "Bungalov & Çelik Ev", href: "/hizmetler/celik-ev-tekirdag" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d0f12]/95 backdrop-blur-md border-b border-[#28303d] shadow-2xl py-3"
          : "bg-gradient-to-b from-[#0d0f12]/95 via-[#0d0f12]/80 to-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo (Top Left) */}
          <Link href="/" className="group flex items-center shrink-0" aria-label="Baydağ Demir Ana Sayfa">
            <Image
              src="/baydaglogo.svg"
              alt="Baydağ Demir Logo"
              width={175}
              height={45}
              priority
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Hizmetlerimiz Dropdown Trigger */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`inline-flex items-center gap-1 text-xs xl:text-sm font-bold uppercase tracking-wider px-3 py-2 transition-all duration-200 whitespace-nowrap ${
                  servicesDropdownOpen
                    ? "text-[#ff5e14] bg-[#181d24]"
                    : "text-[#d1d5db] hover:text-white hover:bg-[#181d24]"
                }`}
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-[#ff5e14]" : "text-gray-400"
                  }`}
                />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[720px] max-w-[90vw] animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-[#0d0f12]/98 backdrop-blur-xl border border-[#28303d] shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-5 grid grid-cols-3 gap-5">
                    {serviceGroups.map((group, gIdx) => (
                      <div key={gIdx} className="space-y-2">
                        <div className="flex items-center gap-1.5 pb-2 border-b border-[#28303d] text-[11px] font-black uppercase tracking-wider text-[#ff5e14]">
                          <group.icon className="w-3.5 h-3.5 text-[#ff5e14]" />
                          <span>{group.title}</span>
                        </div>
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => setServicesDropdownOpen(false)}
                                className="block text-xs text-[#9ca3af] hover:text-white hover:bg-[#181d24] px-2 py-1.5 transition-colors leading-tight"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#before-after"
              className="text-xs xl:text-sm font-bold text-[#d1d5db] hover:text-white px-3 py-2 hover:bg-[#181d24] transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
            >
              Dönüşüm Vitrini
            </Link>

            <Link
              href="/#projects"
              className="text-xs xl:text-sm font-bold text-[#d1d5db] hover:text-white px-3 py-2 hover:bg-[#181d24] transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
            >
              Projelerimiz
            </Link>

            <Link
              href="/rehber"
              className="text-xs xl:text-sm font-bold text-[#d1d5db] hover:text-white px-3 py-2 hover:bg-[#181d24] transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
            >
              Teknik Rehber
            </Link>

            <Link
              href="/#about"
              className="text-xs xl:text-sm font-bold text-[#d1d5db] hover:text-white px-3 py-2 hover:bg-[#181d24] transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
            >
              Hakkımızda
            </Link>

            <Link
              href="/#contact"
              className="text-xs xl:text-sm font-bold text-[#d1d5db] hover:text-white px-3 py-2 hover:bg-[#181d24] transition-all duration-200 uppercase tracking-wider whitespace-nowrap"
            >
              İletişim
            </Link>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <a
              href="https://www.instagram.com/Baydag_59"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-[#181d24] hover:bg-[#e1306c] border border-[#28303d] hover:border-[#e1306c] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 shadow-md"
              aria-label="Instagram @Baydag_59"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/905348748713?text=Merhaba%20Bayda%C4%9F%20Demir%2C%20web%20sitenizden%20ula%C5%9F%C4%B1yorum.%20Projem%20i%C3%A7in%20ke%C5%9Fif%20ve%20fiyat%20teklifi%20almak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff5e14] hover:bg-[#e04e0b] text-white px-4 py-2 text-xs uppercase tracking-wider font-black transition-all duration-200 shadow-[0_0_15px_rgba(255,94,20,0.3)] hover:shadow-[0_0_20px_rgba(255,94,20,0.5)] whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ücretsiz Keşif Hattı</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#d1d5db] hover:text-[#ff5e14] border border-[#28303d] bg-[#181d24]"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f12] border-b border-[#28303d] px-5 py-5 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {/* Mobile Hizmetlerimiz Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center justify-between w-full text-left text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#ff5e14] py-2.5 border-b border-[#1f242d]"
              >
                <span>Hizmetlerimiz</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileServicesOpen ? "rotate-180 text-[#ff5e14]" : "text-gray-400"
                  }`}
                />
              </button>

              {mobileServicesOpen && (
                <div className="pl-3 py-2 space-y-3 bg-[#12151a] border-l-2 border-[#ff5e14] my-2">
                  {serviceGroups.map((grp, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-[10px] font-black uppercase text-[#ff5e14] tracking-wider pt-1">
                        {grp.title}
                      </div>
                      <div className="grid grid-cols-1 gap-1">
                        {grp.items.map((it) => (
                          <Link
                            key={it.href}
                            href={it.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs text-[#9ca3af] hover:text-white py-1 block"
                          >
                            • {it.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#before-after"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#ff5e14] py-2.5 border-b border-[#1f242d]"
            >
              Dönüşüm Vitrini
            </Link>

            <Link
              href="/#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#ff5e14] py-2.5 border-b border-[#1f242d]"
            >
              Projelerimiz
            </Link>

            <Link
              href="/rehber"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#ff5e14] py-2.5 border-b border-[#1f242d]"
            >
              Teknik Rehber & Blog
            </Link>

            <Link
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#ff5e14] py-2.5 border-b border-[#1f242d]"
            >
              Zanaat & Hakkımızda
            </Link>

            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-wider text-gray-200 hover:text-[#ff5e14] py-2.5 border-b border-[#1f242d]"
            >
              İletişim & Keşif
            </Link>

            <div className="pt-4 flex flex-col gap-2.5">
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
                href="https://www.instagram.com/Baydag_59"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#181d24] border border-[#e1306c]/40 text-[#e1306c] hover:text-white py-2.5 text-xs uppercase tracking-wider font-bold"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram: @Baydag_59</span>
              </a>
              <a
                href="tel:+905348748713"
                className="flex items-center justify-center gap-2 bg-[#181d24] border border-[#28303d] text-gray-200 py-2.5 text-xs uppercase tracking-wider font-semibold"
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
