import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || process.env.AZURE_OPENAI_API_KEY,
  baseURL: process.env.AZURE_OPENAI_ENDPOINT
    ? `${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${process.env.AZURE_DEPLOYMENT_NAME}`
    : undefined,
  defaultQuery: process.env.AZURE_OPENAI_ENDPOINT
    ? { "api-version": "2024-02-15-preview" }
    : undefined,
  defaultHeaders: process.env.AZURE_OPENAI_ENDPOINT
    ? {
        "api-key": process.env.AZURE_OPENAI_API_KEY,
      }
    : undefined,
});

export async function POST(req: NextRequest) {
  try {
    const { messages, assistant = "saintvision" } = await req.json();

    // Determine system prompt based on assistant type
    const systemPrompts = {
      saintvision: `You are SaintVision AI, part of the SaintSal™ Empire. You are a cognitive knowledge partner that provides intelligent, strategic insights. You embody the motto "Yeah... I GOTTA GUY™" - you're the expert they need. Be professional, insightful, and always focused on building empires and scaling businesses.`,
      empire: `You are Empire AI, the strategic execution partner in the SaintSal™ system. You focus on actionable plans, scaling operations, and dominating markets. You're direct, results-oriented, and built for enterprise-level execution. Help users build their empire with concrete strategies.`,
    };

    const systemMessage = {
      role: "system" as const,
      content:
        systemPrompts[assistant as keyof typeof systemPrompts] ||
        systemPrompts.saintvision,
    };

    // Create streaming response
    const stream = await openai.chat.completions.create({
      model: process.env.AZURE_DEPLOYMENT_NAME || "gpt-4o",
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 1000,
      stream: true,
    });

    // Create readable stream for response
    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ content })}\n\n`),
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 },
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
