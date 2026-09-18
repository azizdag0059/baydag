import { NextRequest, NextResponse } from "next/server";
import { AI_SYSTEM_PROMPT } from "@/lib/ai-config";

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Ge?ersiz mesaj format?" }, { status: 400 });
    }

    const apiKey = process.env.OPENROUTER_API_KEY;

    if (!apiKey || apiKey.trim() === "") {
      return NextResponse.json(
        { error: "OpenRouter API anahtarı .env dosyasında bulunamadı." },
        { status: 500 }
      );
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "HTTP-Referer": "https://baydagdemir.com.tr",
        "X-Title": "Baydag Demir AI Assistant",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.OPENROUTER_MODEL || "google/gemini-2.0-flash-001",
        messages: [
          { role: "system", content: AI_SYSTEM_PROMPT },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000,
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
