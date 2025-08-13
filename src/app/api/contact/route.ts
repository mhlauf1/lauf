import { Resend } from "resend";

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// A simple in-memory rate limiter
let lastRequestTimestamp = 0;

export async function POST(req: Request) {
    const now = Date.now();
    // Limit requests to one every 3 seconds to prevent spam
    if (now - lastRequestTimestamp < 3000) {
        return new Response(
            JSON.stringify({ success: false, error: "Rate limit exceeded" }),
            { status: 429 }
        );
    }
    lastRequestTimestamp = now;

    try {
        const { name, email, message } = await req.json();

        // Basic validation for the incoming data
        if (!name || !email || !message || message.length > 5000) {
            return new Response(
                JSON.stringify({ success: false, error: "Invalid input" }),
                { status: 400 }
            );
        }

        // Send the email using Resend
        await resend.emails.send({
            // IMPORTANT: This "from" address must be a verified domain in your Resend account.
            from: "Lauf Contact Form <contact@lauf.co>",
            // The email address where you want to receive the notifications
            to: ["michael@lauf.co"],
            subject: `New Contact Form Submission from ${name}`,
            // The sender's email address, so you can reply directly
            replyTo: email,
            // The plain text content of the email
            text: `
New inquiry received:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
        });

        // Send a success response back to the client
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error("Resend error:", error);
        return new Response(
            JSON.stringify({ success: false, error: "Internal server error" }),
            { status: 500 }
        );
    }
}
