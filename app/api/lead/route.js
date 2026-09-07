import { NextResponse } from "next/server";

// This route is a stub — currently it just validates and logs the lead.
// When you're ready to wire up email delivery, plug in your provider here.
// Two common options:
//
// 1) Resend (recommended, simple):
//    npm install resend
//    import { Resend } from "resend";
//    const resend = new Resend(process.env.RESEND_API_KEY);
//    await resend.emails.send({
//      from: "leads@yourdomain.com",
//      to: process.env.LEAD_EMAIL_TO,
//      subject: `New Lead: ${body.service}`,
//      html: `<p>Name: ${body.name}</p><p>Phone: ${body.phone}</p>...`,
//    });
//
// 2) Nodemailer with Gmail/SMTP:
//    npm install nodemailer
//    const transporter = nodemailer.createTransport({ ...smtp creds... });
//    await transporter.sendMail({ ... });
//
// Remember to store credentials in .env.local (never commit them).

export async function POST(request) {
  try {
    const body = await request.json();

    const required = ["name", "phone", "address", "service", "issue"];
    const missing = required.filter((f) => !body?.[f]);
    if (missing.length > 0) {
      return NextResponse.json(
        { ok: false, error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // TODO: send email / save to DB / push to CRM here.
    console.log("New service lead received:", body);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
