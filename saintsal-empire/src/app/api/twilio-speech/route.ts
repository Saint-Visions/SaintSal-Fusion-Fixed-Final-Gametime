export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const transcript = formData.get("SpeechResult") as string;
    const callSid = formData.get("CallSid") as string;
    const from = formData.get("From") as string;

    // Log the speech transcript
    console.log("🎤 Twilio Speech Transcript:", {
      timestamp: new Date().toISOString(),
      callSid,
      from,
      transcript,
      length: transcript?.length || 0,
    });

    // TODO: Process speech transcript
    // - Convert to AI chat message
    // - Send to SaintVision AI for processing
    // - Return TwiML response with AI reply
    // - Log interaction to Supabase

    // Return TwiML response
    const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say voice="alice">Thank you for your message. SaintVision AI is processing your request.</Say>
    <Pause length="1"/>
    <Say voice="alice">Your transcript was: ${transcript}</Say>
</Response>`;

    return new Response(twimlResponse, {
      status: 200,
      headers: {
        "Content-Type": "text/xml",
      },
    });
  } catch (error) {
    console.error("Twilio Speech error:", error);

    const errorResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Say voice="alice">Sorry, there was an error processing your speech. Please try again.</Say>
</Response>`;

    return new Response(errorResponse, {
      status: 500,
      headers: {
        "Content-Type": "text/xml",
      },
    });
  }
}

export async function GET() {
  return new Response("Twilio Speech endpoint is active", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
