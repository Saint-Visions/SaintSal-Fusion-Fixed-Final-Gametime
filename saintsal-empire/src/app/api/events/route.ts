import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

export async function POST(req: NextRequest) {
  try {
    const { event_type, user_id, details, assistant_type } = await req.json();

    // Validate required fields
    if (!event_type) {
      return NextResponse.json(
        { error: "event_type is required" },
        { status: 400 },
      );
    }

    // Log event to Supabase
    const { data, error } = await supabase.from("events").insert({
      event_type,
      user_id: user_id || "anonymous",
      details: details || {},
      assistant_type: assistant_type || "saintvision",
      timestamp: new Date().toISOString(),
      session_id: req.headers.get("x-session-id") || "unknown",
      user_agent: req.headers.get("user-agent") || "unknown",
    });

    if (error) {
      console.error("Supabase event logging error:", error);
      return NextResponse.json(
        { error: "Failed to log event" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      event_id: data?.[0]?.id,
    });
  } catch (error) {
    console.error("Event logging error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const limit = parseInt(searchParams.get("limit") || "100");
    const event_type = searchParams.get("event_type");
    const user_id = searchParams.get("user_id");

    let query = supabase
      .from("events")
      .select("*")
      .order("timestamp", { ascending: false })
      .limit(limit);

    if (event_type) {
      query = query.eq("event_type", event_type);
    }

    if (user_id) {
      query = query.eq("user_id", user_id);
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase fetch error:", error);
      return NextResponse.json(
        { error: "Failed to fetch events" },
        { status: 500 },
      );
    }

    return NextResponse.json({ events: data });
  } catch (error) {
    console.error("Events fetch error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Headers": "Content-Type, x-session-id",
    },
  });
}
