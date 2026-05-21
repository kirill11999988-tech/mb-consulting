import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, contact, niche, problem } = await req.json();

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json({ error: "Telegram env missing" }, { status: 500 });
    }

    const text = `
🦁 Новая заявка MB Consulting

Имя: ${name || "—"}
Контакт: ${contact || "—"}
Ниша: ${niche || "—"}
Проблема: ${problem || "—"}
`;

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Telegram failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}