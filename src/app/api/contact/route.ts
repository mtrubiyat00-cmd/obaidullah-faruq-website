import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone = "", category = "General inquiry", message, website = "", acknowledgement } = body ?? {};
    // Quietly accept honeypot submissions without forwarding them.
    if (typeof website === "string" && website.trim()) return NextResponse.json({ ok: true });
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.length > 100)
      return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
    if (!email || typeof email !== "string" || !emailPattern.test(email) || email.length > 254)
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    if (typeof phone !== "string" || phone.length > 40 || typeof message !== "string" || message.trim().length < 10 || message.length > 3000)
      return NextResponse.json({ error: "Please check your phone number and message." }, { status: 400 });
    if (acknowledgement !== "yes") return NextResponse.json({ error: "Please acknowledge the inquiry notice." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !to || !from) {
      return NextResponse.json({ error: "The contact form has not been connected to an email delivery service yet. Please use the published contact details instead." }, { status: 503 });
    }
    const safe = (value: string) => value.replace(/[\r\n]/g, " ").trim();
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from, to: [to], reply_to: safe(email),
        subject: `Website inquiry: ${safe(category)}`,
        text: `Name: ${safe(name)}\nEmail: ${safe(email)}\nPhone: ${safe(phone)}\nCategory: ${safe(String(category))}\n\nMessage:\n${message.trim()}`
      })
    });
    if (!response.ok) return NextResponse.json({ error: "The inquiry could not be delivered. Please try again later or use the published contact details." }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request. Please try again." }, { status: 400 });
  }
}
