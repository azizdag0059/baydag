"use client";

import { useState, useEffect } from "react";
import { Sparkles, Bot } from "lucide-react";

export default function FloatingAIWidget() {
  const [visible, setVisible] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after scrolling past 200px
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);

    // Listen for AI unread messages
    const handleUnreadUpdate = (event: Event) => {
      const customEvent = event as CustomEvent<{ count?: number; increment?: boolean }>;
      if (customEvent.detail.count !== undefined) {
        setUnreadCount(customEvent.detail.count);
      } else if (customEvent.detail.increment) {
        setUnreadCount((prev) => prev + 1);
      }
    };

    window.addEventListener("ai-unread-count", handleUnreadUpdate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("ai-unread-count", handleUnreadUpdate);
    };
  }, []);

  const scrollToAI = () => {
    setUnreadCount(0);
    const aiSection = document.getElementById("ai-assistant");
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: "smooth" });
      const input = aiSection.querySelector("input");
      if (input) {
        setTimeout(() => input.focus(), 600);
      }
    }
  };

  // Show if scrolled down OR if there is an unread notification
  if (!visible && unreadCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <button
        onClick={scrollToAI}
        className="relative flex items-center justify-center w-14 h-14 bg-[#12151a] hover:bg-[#181d24] text-white border-2 border-[#ff5e14] shadow-[0_0_25px_rgba(255,94,20,0.5)] hover:shadow-[0_0_35px_rgba(255,94,20,0.8)] transition-all duration-300 hover:scale-105 active:scale-95 group"
        aria-label="Yapay Zeka Danışmanına Git"
      >
        {/* Animated Glow Border */}
        <span className="absolute inset-0 border border-[#f59e0b] animate-ping opacity-30 pointer-events-none" />

        {/* Unread Message Count Badge (No extra text) */}
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 z-30 flex h-6 w-6 items-center justify-center rounded-full bg-[#ff5e14] text-white text-xs font-black shadow-[0_0_15px_rgba(255,94,20,1)] border-2 border-[#12151a] animate-bounce">
            {unreadCount}
          </span>
        )}

        <div className="relative flex items-center justify-center">
          <Bot className="w-6 h-6 text-[#ff5e14] group-hover:text-[#f59e0b] transition-colors" />
          {unreadCount === 0 && (
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b] absolute -top-2.5 -right-2.5 animate-bounce" />
          )}
        </div>
      </button>
    </div>
  );
}
