import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  purpose: string;
  message: string;
}

const PURPOSE_LABELS: Record<string, string> = {
  "general-enquiry": "General Enquiry",
  "download-brochure": "Download Brochure",
  "site-visit": "Site Visit",
};

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, purpose, message } = body;

  if (!name || !phone || !email || !purpose) {
    return NextResponse.json(
      { error: "Name, phone, email, and purpose are required." },
      { status: 400 }
    );
  }

  const purposeLabel = PURPOSE_LABELS[purpose] ?? purpose;

  try {
    // -- Nodemailer: sends a notification email for every new enquiry --
    // TODO: replace placeholder SMTP credentials with real values in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || "placeholder-smtp-user",
        pass: process.env.SMTP_PASS || "placeholder-smtp-pass",
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || "Bollineni Vienna <no-reply@example.com>",
      to: process.env.SMTP_TO || "sales@example.com",
      replyTo: email,
      subject: `New enquiry (${purposeLabel}) — ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nPurpose: ${purposeLabel}\nMessage: ${message || "—"}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Purpose:</strong> ${purposeLabel}</p>
        <p><strong>Message:</strong> ${message || "—"}</p>
      `,
    });

    // -- Pabbly Connect: forwards the lead into whatever workflow is wired up --
    // TODO: replace placeholder webhook URL with the real Pabbly Connect webhook
    const pabblyWebhookUrl =
      process.env.PABBLY_WEBHOOK_URL || "https://connect.pabbly.com/workflow/sendwebhookdata/placeholder";

    await fetch(pabblyWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, purpose: purposeLabel, message }),
    }).catch(() => {
      // Pabbly delivery failure shouldn't block the user-facing response —
      // the email above is the source of truth for the lead.
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting the form." },
      { status: 500 }
    );
  }
}
