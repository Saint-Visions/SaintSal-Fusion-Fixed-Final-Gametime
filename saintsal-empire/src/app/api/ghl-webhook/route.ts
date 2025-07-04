export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Log the webhook data
    console.log("🔗 Received GHL Webhook:", {
      timestamp: new Date().toISOString(),
      type: body.type || "unknown",
      contact: body.contact || {},
      opportunity: body.opportunity || {},
      appointment: body.appointment || {},
    });

    // TODO: Process webhook data
    // - Update Supabase with lead info
    // - Trigger SMS notifications via Twilio
    // - Update pipeline stages
    // - Send to analytics

    return new Response("GHL Webhook received successfully", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("GHL Webhook error:", error);
    return new Response("Webhook processing failed", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}

export async function GET() {
  return new Response("GHL Webhook endpoint is active", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
