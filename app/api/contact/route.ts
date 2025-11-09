import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Send email using Resend
    try {
      const emailSubject = subject || "New Contact Form Submission";
      const emailTo = process.env.EMAIL_TO || "info@uniquetechsolution.uk";
      const emailFrom = process.env.EMAIL_FROM || "info@uniquetechsolution.uk";

      await resend.emails.send({
        from: emailFrom,
        to: emailTo,
        replyTo: email,
        subject: `${emailSubject} - From ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>

            <div style="margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || "N/A"}</p>
            </div>

            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p style="margin: 0;"><strong>Message:</strong></p>
              <p style="margin: 10px 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
              <p>This email was sent from the contact form on uniquetechsolution.uk</p>
              <p>Submitted on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `,
      });

      console.log("Contact form submission sent successfully:", {
        name,
        email,
        subject: subject || "No subject",
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        {
          message: "Message sent successfully",
          success: true,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Failed to send email:", emailError);
      return NextResponse.json(
        { error: "Failed to send email. Please try again later." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    }
  );
}
