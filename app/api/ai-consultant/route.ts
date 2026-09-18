import { NextRequest, NextResponse } from "next/server";
import { AI_SYSTEM_PROMPT } from "@/lib/ai-config";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Geçersiz mesaj formatı" }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey || apiKey.trim() === "") {
      return NextResponse.json(
        { error: "OpenRouter API anahtarı .env dosyasında bulunamadı." },
        { status: 500 }
      );
    }

    // Strip leading assistant welcome message so the conversation strictly starts with the user's first query
    let cleanMessages = [...messages];
    if (cleanMessages.length > 0 && cleanMessages[0].role === "assistant") {
      cleanMessages = cleanMessages.slice(1);
    }

    // If no user messages remain, return early
    if (cleanMessages.length === 0) {
      return NextResponse.json({ reply: "Size nasıl yardımcı olabilirim?" });
    }

    const modelName = process.env.OPENROUTER_MODEL || "meta-llama/llama-3.3-70b-instruct";

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "HTTP-Referer": "https://baydagdemir.com.tr",
        "X-Title": "Baydag Demir AI Assistant",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: modelName,
        messages: [
          { role: "system", content: AI_SYSTEM_PROMPT },
          ...cleanMessages
        ],
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter API Error:", errorText);
      return NextResponse.json(
        { error: `OpenRouter API Hatası: ${response.statusText}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "Yanıt alınamadı.";
    return NextResponse.json({ reply });
  } catch (error: any) {
    console.error("AI Consultant API Hatası:", error);
    return NextResponse.json(
      { error: error?.message || "Sunucu hatası oluştu" },
      { status: 500 }
    );
  }
}
