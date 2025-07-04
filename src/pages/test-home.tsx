import React from "react";

export default function TestHome() {
  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center"
      style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
    >
      <div className="text-center max-w-4xl px-8">
        <h1
          className="text-6xl font-black text-gold mb-6"
          style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
        >
          🔥 SaintSal™ EMPIRE 🔥
        </h1>
        <p
          className="text-2xl text-gray-300 mb-8"
          style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
        >
          Your infinite empire is LIVE and operational!
        </p>
        <p
          className="text-xl text-gold font-semibold mb-8"
          style={{ fontFamily: "Inter, system-ui, -apple-system, sans-serif" }}
        >
          "Yeah... I GOTTA GUY™"
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-charcoal/80 border border-gold/20 rounded-xl p-6">
            <div className="text-3xl font-black text-gold mb-2">∞</div>
            <div className="text-lg font-bold">Infinite Scale</div>
            <div className="text-sm text-gray-400">Ready to Dominate</div>
          </div>

          <div className="bg-charcoal/80 border border-gold/20 rounded-xl p-6">
            <div className="text-3xl font-black text-green-400 mb-2">✅</div>
            <div className="text-lg font-bold">All Systems</div>
            <div className="text-sm text-gray-400">Online & Active</div>
          </div>

          <div className="bg-charcoal/80 border border-gold/20 rounded-xl p-6">
            <div className="text-3xl font-black text-blue-400 mb-2">🚀</div>
            <div className="text-lg font-bold">Performance</div>
            <div className="text-sm text-gray-400">Optimized</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/empire-live"
            className="bg-gold text-black px-8 py-4 rounded-xl font-bold hover:bg-gold/90 transition-all"
          >
            🚀 Empire LIVE
          </a>
          <a
            href="/console"
            className="border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-black transition-all"
          >
            🤖 AI Console
          </a>
          <a
            href="/dashboard"
            className="border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-black transition-all"
          >
            📊 Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
