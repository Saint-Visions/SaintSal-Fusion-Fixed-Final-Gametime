import React from "react";
import { Link } from "react-router-dom";

export default function KickassSaasShowcase() {
  return (
    <section className="min-h-screen w-full bg-black text-white py-12 px-6 md:px-20 space-y-16 relative overflow-hidden">
      {/* Professional Background */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fa87ba7594d8b4359b3abdac217653de3?format=webp&width=800")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        {/* Hero Tagline Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-gold to-yellow-400 bg-clip-text text-transparent">
            SaintSal™ AI doesn't just assist. It builds with you.
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold">
            PartnerTech.ai™ unlocks the empire.
          </h2>
          <p className="text-xl md:text-2xl text-yellow-300 font-bold">
            Activate elite automation in under a minute. Join the movement. Run
            the system. Own the results.
          </p>
          <p className="text-lg text-gray-400 italic">
            SaintSal™ + PartnerTech.ai™ = Empire Access.
          </p>
          <p className="text-2xl text-yellow-500 font-bold">
            Become a Saint. Join the elite. 🔑
          </p>
        </div>

        {/* Slide 1 - This Is Not Just AI */}
        <div className="bg-gradient-to-r from-gray-900/50 to-black/50 rounded-2xl p-8 border border-yellow-400/30 mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            This Is Not Just AI
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Side-by-side: Fake bots vs. SaintSal™ Dual AI Cognitive Assistant
          </p>
          <p className="text-lg italic text-yellow-300 font-semibold">
            "Where Execution &gt; Conversation."
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-red-900/20 border border-red-500/50 rounded-xl p-6">
              <h4 className="text-red-400 font-bold text-xl mb-4">
                ❌ Other "AI" Platforms
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Just talks, no action</li>
                <li>• "Enhances data quality" 🙄</li>
                <li>• Theory only</li>
              </ul>
            </div>
            <div className="bg-green-900/20 border border-green-500/50 rounded-xl p-6">
              <h4 className="text-green-400 font-bold text-xl mb-4">
                ✅ SAINTSAL™ Empire
              </h4>
              <ul className="space-y-2 text-white font-semibold">
                <li>• EXECUTES real actions</li>
                <li>• AI Companion handles tasks</li>
                <li>• Gets shit done 🔥</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Slide 2 - Built Different */}
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-2xl p-8 border border-yellow-400/30 mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Built Different 🔐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc pl-6 space-y-3 text-lg text-white">
              <li>HACP™ + OPATENT™ Protocol (U.S. Patent No. 10,290,222)</li>
              <li>Live Azure + OpenAI Dual Architecture</li>
              <li>15+ Months Enterprise Dev</li>
              <li>Actual GHL Integration (not claims)</li>
            </ul>
            <div className="bg-gradient-to-r from-gold/20 to-yellow-500/20 border-2 border-gold/50 rounded-xl p-6 text-center">
              <div className="text-gold font-bold text-xl">🏛️ U.S. PATENT</div>
              <div className="text-white font-black text-3xl">10,290,222</div>
              <div className="text-gold text-lg">HACP™ PROTOCOL</div>
            </div>
          </div>
        </div>

        {/* Slide 3 - Real Client Automation */}
        <div className="bg-gradient-to-r from-green-900/50 to-teal-900/50 rounded-2xl p-8 border border-yellow-400/30 mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Real Client Automation ✅
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc pl-6 space-y-3 text-lg text-white">
              <li>Push to GHL (visual confirmation)</li>
              <li>AI auto-books appointments</li>
              <li>Tracks, notifies, and logs everything</li>
              <li>Live stats: Leads, Referrals, Deals</li>
            </ul>
            <div className="bg-green-600/20 border border-green-500/50 rounded-xl p-6">
              <h4 className="text-green-400 font-bold text-xl mb-4">
                Live Dashboard
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Leads Discovered</span>
                  <span className="text-green-400 font-bold">247</span>
                </div>
                <div className="flex justify-between">
                  <span>Active Referrals</span>
                  <span className="text-green-400 font-bold">18</span>
                </div>
                <div className="flex justify-between">
                  <span>Deals Analyzed</span>
                  <span className="text-green-400 font-bold">156</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 4 - Power + Simplicity */}
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 border border-yellow-400/30 mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            Power + Simplicity 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-6">Toggle Companion Modes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                <span>
                  🟢 <strong className="text-green-400">Observer</strong> –
                  Tracks activity
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span>
                  🟡 <strong className="text-yellow-400">Advisor</strong> –
                  Suggests & fills forms
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-red-500 rounded-full"></span>
                <span>
                  🔴 <strong className="text-red-400">Executor</strong> –
                  Auto-syncs & runs workflows
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-gold rounded-full"></span>
                <span>
                  👑{" "}
                  <strong className="text-gold">Command Authority Mode</strong>{" "}
                  – Learns & optimizes live
                </span>
              </li>
            </ul>
            <div className="bg-purple-600/20 border border-purple-500/50 rounded-xl p-6 text-center">
              <p className="text-2xl italic text-purple-300 font-semibold">
                "AI that adapts to YOU."
              </p>
            </div>
          </div>
        </div>

        {/* Slide 5 - PartnerTech.ai Layout */}
        <div className="bg-gradient-to-r from-teal-900/50 to-cyan-900/50 rounded-2xl p-8 border border-yellow-400/30 mb-12">
          <h2 className="text-4xl font-bold text-yellow-400 mb-6">
            PartnerTech.ai Platform 🌿
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="list-disc pl-6 space-y-3 text-lg text-white">
              <li>Chrome Extension w/ Intent Search</li>
              <li>CRM Smart Routing</li>
              <li>SaaS Tier Pricing Integration</li>
              <li>Companion Launch Logic – Sticky DualBot Enabled</li>
            </ul>
            <div className="bg-teal-600/20 border border-teal-500/50 rounded-xl p-6">
              <h4 className="text-teal-400 font-bold text-xl mb-4">
                Platform Features
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-green-500">✅</span>
                  <span>Chrome Web Store Approved</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-500">🚀</span>
                  <span>Multi-Tenant Ready</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-500">🔒</span>
                  <span>Patent Protected</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Slide */}
        <div className="text-center mt-16 space-y-8 bg-gradient-to-r from-gold/20 via-yellow-500/30 to-gold/20 rounded-2xl p-12 border-2 border-gold/50">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-300 via-gold to-yellow-300 bg-clip-text text-transparent">
            You Ready to Start Cookin'?
          </h2>
          <p className="text-2xl text-white">
            Join Pro or Enterprise today and unleash the Dual AI Empire.
          </p>
          <p className="text-lg text-gray-300">
            Less than a minute to unlock total AI execution.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8">
            <Link
              to="/partnertech"
              className="bg-gradient-to-r from-yellow-500 to-gold text-black px-8 py-4 rounded-xl font-bold text-xl hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🔥 Start Cookin Now
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-yellow-500 text-yellow-400 px-8 py-4 rounded-xl font-bold text-xl hover:bg-yellow-900/50 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Explore Plans
            </Link>
            <Link
              to="/console"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🧠 AI Console
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
