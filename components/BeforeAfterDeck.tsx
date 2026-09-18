"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HardHat, 
  Home, 
  ChevronLeft, 
  ChevronRight, 
  Layers, 
  Check, 
  Clock, 
  Ruler, 
  Wrench,
  MessageSquare,
  Sparkles
} from "lucide-react";
import { PROJECTS_DATA } from "@/lib/projects-data";

export default function BeforeAfterDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"before" | "after">("after");

  const activeProject = PROJECTS_DATA[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
  };

  return (
    <section id="before-after" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0a0c0f] relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-[#ff5e14]/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#181d24] border border-[#ff5e14]/50 text-[#ff5e14] text-xs font-black uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DÖNÜŞÜM VİTRİNİ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            KABA İSKELETTEN <span className="text-[#ff5e14]">LÜKS DETAYLARA</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af]">
            İnşaat halindeki ham çelik karkas montajından, mekana değer katan tamamlanmış mimari uygulamalara uzanan zanaat yolculuğumuz.
          </p>
        </div>

        {/* 2-Column Showcase Layout Matching Image 3 Sketch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Adaptive Aspect Ratio Card Deck (3:4 portrait for stairs, 4:3 for architectural projects) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            {/* Stacked Deck Container with dynamic aspect ratio */}
            <div
              className={`relative w-full transition-all duration-500 ease-out ${
                activeProject.aspectRatio === "3/4"
                  ? "max-w-[420px] aspect-[3/4]"
                  : "max-w-[560px] aspect-[4/3]"
              }`}
            >
              {/* Back card layer 2 */}
              <div className="absolute inset-0 bg-[#151921] border border-[#28303d] rounded-3xl -rotate-2 scale-[0.97] opacity-40 pointer-events-none transition-transform duration-500" />
              {/* Back card layer 1 */}
              <div className="absolute inset-0 bg-[#181d24] border border-[#ff5e14]/30 rounded-3xl rotate-1.5 scale-[0.985] opacity-70 pointer-events-none transition-transform duration-500" />

              {/* Main Active Card */}
              <div className="relative w-full h-full bg-[#12151a] border-2 border-[#ff5e14] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] group">
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-black uppercase tracking-wider rounded-full backdrop-blur-md border ${
                      viewMode === "before"
                        ? "bg-[#181d24]/90 text-[#ff5e14] border-[#ff5e14]"
                        : "bg-[#181d24]/90 text-[#10b981] border-[#10b981]"
                    }`}
                  >
                    {viewMode === "before" ? (
                      <>
                        <HardHat className="w-3.5 h-3.5" />
                        <span>İskelet & Statik</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Tamamlanmış Lüks</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Project Counter Top Right */}
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1.5 text-xs font-bold text-white bg-black/75 rounded-full border border-white/10 backdrop-blur-md">
                    {activeProject.id} / {PROJECTS_DATA.length}
                  </span>
                </div>

                {/* Image Switch Transition */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeProject.id}-${viewMode}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    className="relative w-full h-full bg-black/40"
                  >
                    <Image
                      src={viewMode === "before" ? activeProject.beforeImage : activeProject.afterImage}
                      alt={`${activeProject.title} - ${viewMode}`}
                      fill
                      className="object-cover object-center"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f12]/90 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Bottom Caption inside card */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <p className="text-xs sm:text-sm text-gray-200 font-medium line-clamp-2">
                    {viewMode === "before" ? activeProject.beforeDescription : activeProject.afterDescription}
                  </p>
                </div>

                {/* Left/Right Navigation Arrows */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 z-30 pointer-events-none">
                  <button
                    onClick={handlePrev}
                    className="pointer-events-auto p-3 bg-black/70 hover:bg-[#ff5e14] text-white rounded-full border border-white/20 hover:border-[#ff5e14] transition-all duration-200 shadow-xl"
                    aria-label="Önceki Proje"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="pointer-events-auto p-3 bg-black/70 hover:bg-[#ff5e14] text-white rounded-full border border-white/20 hover:border-[#ff5e14] transition-all duration-200 shadow-xl"
                    aria-label="Sonraki Proje"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Toggle Switch (Directly Underneath Card as per sketch) */}
            <div className="mt-6 flex items-center justify-center gap-2 bg-[#12151a] p-1.5 rounded-full border border-[#28303d] shadow-xl">
              <button
                onClick={() => setViewMode("before")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  viewMode === "before"
                    ? "bg-[#ff5e14] text-white shadow-[0_0_20px_rgba(255,94,20,0.5)]"
                    : "text-[#8b9bb0] hover:text-white"
                }`}
              >
                <HardHat className="w-4 h-4" />
                <span>İnşaat</span>
              </button>

              <button
                onClick={() => setViewMode("after")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                  viewMode === "after"
                    ? "bg-gradient-to-r from-[#f59e0b] to-[#ff5e14] text-white shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                    : "text-[#8b9bb0] hover:text-white"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Tamamlanmış</span>
              </button>
            </div>
          </div>

          {/* Right Column: Specification Sheet + Big "Fiyat Sor" Button (As in Sketch) */}
          <div className="lg:col-span-6 bg-[#12151a] border border-[#28303d] rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between">
            <div>
              {/* Category & Location */}
              <div className="flex items-center justify-between gap-2 border-b border-[#28303d] pb-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff5e14]">
                  {activeProject.categoryLabel}
                </span>
                <span className="text-xs text-[#8b9bb0] font-medium">
                  {activeProject.location}
                </span>
              </div>

              {/* Main Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-4">
                {activeProject.title}
              </h3>

              {/* Specs Bullet Points (with nice checkmarks matching the sketch) */}
              <div className="space-y-3.5 my-6">
                {activeProject.specs.map((spec, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-200">
                    <div className="w-5 h-5 rounded-md bg-[#ff5e14]/20 border border-[#ff5e14] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#ff5e14]" />
                    </div>
                    <span className="font-medium">{spec}</span>
                  </div>
                ))}
              </div>

              {/* Material Details Box */}
              <div className="p-4 bg-[#0d0f12] border border-[#1f242d] rounded-xl text-xs text-[#8b9bb0] mb-6 space-y-1">
                <div className="text-white font-bold uppercase text-[11px]">Kullanılan Malzeme & Statik:</div>
                <div>{activeProject.materials}</div>
                <div className="pt-1 flex items-center gap-3 text-[11px] text-[#ff5e14]">
                  <span className="flex items-center gap-1"><Ruler className="w-3.5 h-3.5" /> {activeProject.dimensions}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeProject.duration}</span>
                </div>
              </div>
            </div>

            {/* Big "Fiyat Sor" Button matching the sketch */}
            <div className="pt-2">
              <a
                href={`https://wa.me/905348748713?text=Merhaba%20Bayda%C4%9F%20Demir%2C%20web%20sitenizdeki%20%22${encodeURIComponent(
                  activeProject.title
                )}"%20projeniz%20hakk%C4%B1nda%20fiyat%20ve%20ke%C5%9Fif%20bilgisi%20almak%20istiyorum.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-[#ff5e14] hover:bg-[#e04e0b] text-white py-4 rounded-xl text-sm uppercase font-black tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(255,94,20,0.4)] hover:shadow-[0_0_35px_rgba(255,94,20,0.7)]"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Bu Proje İçin Fiyat Sor</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
