import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";
import "../components/builder-registry"; // Register SaintSal™ components

// Initialize Builder with SaintSal™ empire configuration
builder.init(import.meta.env.VITE_BUILDER_API_KEY || "your-public-api-key");

export default function BuilderPage() {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch Builder content with SaintSal™ context
    builder
      .get("page", {
        url: window.location.pathname,
        // Include user context for conditional rendering
        userAttributes: {
          tier: "enterprise", // Dynamic from Supabase auth
          isAuthenticated: true,
        },
      })
      .toPromise()
      .then((res) => {
        setContent(res);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Builder.io fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="empire-card text-center">
          <div className="animate-pulse text-gold text-2xl mb-4">⚡</div>
          <p className="text-white">Loading SaintSal™ Builder Interface...</p>
          <p className="text-gray-400 text-sm mt-2">
            Divine execution engine initializing
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {content ? (
        <BuilderComponent
          model="page"
          content={content}
          // Pass empire-level styling context
          data={{
            theme: "empire",
            brandColors: {
              gold: "#FFC700",
              charcoal: "#10161C",
              glowYellow: "#FDE68A",
            },
          }}
        />
      ) : (
        <div className="min-h-screen bg-black flex items-center justify-center">
          <div className="empire-card text-center max-w-2xl">
            <h1 className="text-3xl font-black text-gold mb-4">
              BUILDER COMMAND DECK
            </h1>
            <p className="text-white mb-6">
              No Builder.io content found for this route. This is your canvas
              for creating dynamic SaintSal™ experiences.
            </p>
            <p className="text-gray-400 text-sm">
              This space powers SaintSal™ — the AI agent and digital executor
              for your empire. Every visual component is wired to live systems:
              CRM sync, Supabase auth, GPT routing, Stripe billing, Azure
              functions.
            </p>
            <div className="mt-8 p-4 bg-gold/10 rounded-xl border border-gold/20">
              <p className="text-gold font-semibold">
                "This isn't a landing page — it's the frontend to an empire."
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
