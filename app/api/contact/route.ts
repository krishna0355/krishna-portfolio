// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "your-real-email@yourdomain.com"; // ← set CONTACT_TO_EMAIL in .env.local

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    if (!resendApiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    const { name, email, message } = await req.json();

    // Basic validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // app/api/contact/route.ts (additions inside your POST handler)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

if (!name || !email || !message) {
  return NextResponse.json({ error: "All fields are required." }, { status: 400 });
}
if (name.trim().length > 20) {
  return NextResponse.json({ error: "Name must be ≤ 20 characters." }, { status: 400 });
}
if (!emailRegex.test(email.trim())) {
  return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
}

    // Send email via Resend
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // keep for testing until a custom domain is verified
      to: toEmail,                   // your inbox
      subject: `New message from ${name}`,
      replyTo: email,
      text: message,
    });

    if (result.error) {
      console.error("Resend API error:", result.error);
      return NextResponse.json(
        { error: "Failed to send message." },
        { status: 502 }
      );
    }

    // Success — Resend returns { data: { id }, error: null }
    return NextResponse.json({
      ok: true,
      id: result.data?.id ?? null,
    });
  } catch (err) {
    console.error("❌ Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}
