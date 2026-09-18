"use client";

import { useState, useEffect } from "react";
import { Sparkles, Bot, Hammer, MessageSquare } from "lucide-react";

export default function FloatingAIWidget() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling past 200px
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAI = () => {
    const aiSection = document.getElementById("ai-assistant");
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: "smooth" });
      const input = aiSection.querySelector("input");
      if (input) {
        setTimeout(() => input.focus(), 600);
      }
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <button
        onClick={scrollToAI}
        className="relative flex items-center justify-center w-14 h-14 bg-[#12151a] hover:bg-[#181d24] text-white border-2 border-[#ff5e14] shadow-[0_0_25px_rgba(255,94,20,0.5)] hover:shadow-[0_0_35px_rgba(255,94,20,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 group"
        aria-label="Yapay Zeka Danışmanına Git"
      >
        {/* Animated Glow Border */}
        <span className="absolute inset-0 border border-[#f59e0b] animate-ping opacity-30 pointer-events-none" />

        <div className="relative flex items-center justify-center">
          <Bot className="w-6 h-6 text-[#ff5e14] group-hover:text-[#f59e0b] transition-colors" />
          <Sparkles className="w-3.5 h-3.5 text-[#f59e0b] absolute -top-2.5 -right-2.5 animate-bounce" />
        </div>
      </button>
    </div>
  );
}
