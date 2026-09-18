"use client";

import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Sparkles, Bot, User, MessageSquare, Flame, RefreshCw, CornerDownLeft } from "lucide-react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistantSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content: "Selamlar! Ben **Baydağ Demir** Yapay Zeka Atölye Danışmanıyım. Çelik merdiven, lazer kesim korkuluk, villa kapısı veya asma kat projeniz için malzeme, statik gereksinimler ve süreç hakkında sorularınızı yanıtlayabilirim. Aklınızdaki projeyi anlatın, birlikte planlayalım!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || loading) return;

    const newMessages: ChatMessage[] = [...messages, { role: "user", content: textToSend }];
    setMessages(newMessages);
    if (!userText) setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/ai-consultant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Bağlantı sırasında bir sorun oluştu. Doğrudan WhatsApp Keşif Hattımız üzerinden ustamızla iletişime geçebilirsiniz.",
          },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Bağlantı kurulamadı. Doğrudan 0534 874 87 13 numaralı telefonumuzdan bize ulaşabilirsiniz.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    "Dubleks villam için ahşap basamaklı çelik merdiven yaptırmak istiyorum.",
    "5 metre motorlu sürgülü bahçe kapısı için hangi profil ve motoru önerirsiniz?",
    "100 m² dükkan içine çelik asma kat platformu statik hesabı nasıl yapılır?",
    "Teras ve balkon için lazer kesim korkuluk paslanmaya dayanır mı?",
  ];

  const lastUserRequest = messages.filter((m) => m.role === "user").pop()?.content || "Özel Demir Doğrama Projesi";
  const whatsappUrl = `https://wa.me/905348748713?text=${encodeURIComponent(
    `Merhaba Baydağ Demir, web sitenizdeki AI Atölye Danışmanı ile görüştüm. Projem: "${lastUserRequest}". Yerinde keşif ve fiyat teklifi almak istiyorum.`
  )}`;

  return (
    <section id="ai-assistant" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0f12] relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#181d24] border border-[#f59e0b]/50 text-[#f59e0b] text-xs font-black uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-[#f59e0b] animate-spin" />
            <span>YAPAY ZEKA ATÖLYE DANIŞMANI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
            PROJENİZİ <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ff5e14]">YAPAY ZEKA İLE</span> PLANLAYIN
          </h2>
          <p className="text-sm sm:text-base text-[#9ca3af] max-w-2xl mx-auto">
            Ölçülerinizi veya aklınızdaki fikri belirtin; malzeme seçimi, profil kalınlıkları ve statik gereksinimler hakkında anında usta tavsiyesi alın.
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className="bg-[#12151a] border-2 border-[#28303d] shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Chat Header Bar */}
          <div className="bg-[#181d24] border-b border-[#28303d] p-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#ff5e14]/20 border border-[#ff5e14] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#ff5e14]" />
              </div>
              <div>
                <span className="text-sm font-bold text-white uppercase block">
                  Baydağ Demir • Usta Danışman
                </span>
                <span className="text-[10px] text-[#10b981] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#10b981] rounded-full animate-ping" />
                  Tekirdağ Atölye Bilgi Tabanı Aktif
                </span>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-[#059669] text-white px-4 py-2 text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Görüşmeyi WhatsApp'a Aktar</span>
            </a>
          </div>

          {/* Messages Area */}
          <div className="p-4 sm:p-6 h-[420px] overflow-y-auto space-y-4 bg-[#0d0f12]/80">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 bg-[#181d24] border border-[#ff5e14]/60 flex items-center justify-center shrink-0 mt-1">
                    <Flame className="w-4 h-4 text-[#ff5e14]" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-4 text-xs sm:text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#ff5e14] text-white font-medium border border-[#ff5e14]"
                      : "bg-[#181d24] text-gray-200 border border-[#28303d] prose prose-invert prose-p:my-1.5 prose-ul:my-1.5 prose-li:my-0.5 prose-strong:text-white prose-strong:font-bold"
                  }`}
                >
                  {msg.role === "user" ? (
                    msg.content
                  ) : (
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                        strong: ({ node, ...props }) => <strong className="text-[#ff5e14] font-bold" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-5 my-2 space-y-1" {...props} />,
                        li: ({ node, ...props }) => <li className="text-gray-200" {...props} />,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )}
                </div>

                {msg.role === "user" && (
                  <div className="w-8 h-8 bg-[#28303d] border border-white/20 flex items-center justify-center shrink-0 mt-1">
                    <User className="w-4 h-4 text-gray-200" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start">
                <div className="w-8 h-8 bg-[#181d24] border border-[#ff5e14]/60 flex items-center justify-center shrink-0">
                  <RefreshCw className="w-4 h-4 text-[#ff5e14] animate-spin" />
                </div>
                <div className="bg-[#181d24] border border-[#28303d] p-4 text-xs text-gray-400 font-mono flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#ff5e14] animate-bounce" />
                  <span>Atölye şefi hesaplamaları yapıyor...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Presets */}
          <div className="p-3 bg-[#12151a] border-t border-[#1f242d] overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  disabled={loading}
                  className="px-3 py-1.5 bg-[#181d24] hover:bg-[#202731] border border-[#28303d] hover:border-[#ff5e14]/60 text-[11px] text-[#8b9bb0] hover:text-white transition-colors text-left"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="p-3 sm:p-4 bg-[#181d24] border-t border-[#28303d]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Örn: 15 basamaklı villa için omurgalı merdiven profil tavsiyesi..."
                disabled={loading}
                className="flex-1 bg-[#0d0f12] border border-[#28303d] px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#ff5e14] transition-colors"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-[#ff5e14] hover:bg-[#e04e0b] disabled:opacity-50 text-white px-6 py-3 text-xs uppercase font-black tracking-wider flex items-center gap-2 transition-all duration-200"
              >
                <span>Gönder</span>
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
