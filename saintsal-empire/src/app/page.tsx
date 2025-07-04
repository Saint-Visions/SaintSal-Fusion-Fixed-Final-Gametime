import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative empire-gradient pt-20 pb-32 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="hero-text mb-8 leading-tight">SAINT VISION AI</h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The future of AI-powered business intelligence. Where vision meets
            execution. Where data becomes destiny.
          </p>
          <p className="text-xl text-yellow-500 font-semibold mb-12">
            Yeah... I GOTTA GUY™
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/console" className="btn-empire">
              Launch AI Console
            </Link>
            <Link
              href="/crm"
              className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 hover:text-black transition-all duration-300"
            >
              Access CRM
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="empire-card text-center">
              <div className="text-4xl font-black text-yellow-500 mb-4">∞</div>
              <div className="text-xl font-bold text-white mb-2">
                Unlimited Potential
              </div>
              <div className="text-gray-400">
                AI-powered insights without limits
              </div>
            </div>
            <div className="empire-card text-center">
              <div className="text-4xl font-black text-yellow-500 mb-4">
                24/7
              </div>
              <div className="text-xl font-bold text-white mb-2">
                Always Active
              </div>
              <div className="text-gray-400">Round-the-clock AI assistance</div>
            </div>
            <div className="empire-card text-center">
              <div className="text-4xl font-black text-yellow-500 mb-4">🚀</div>
              <div className="text-xl font-bold text-white mb-2">
                Enterprise Ready
              </div>
              <div className="text-gray-400">
                Built for scale, designed for success
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="py-20 px-8 bg-gray-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-black text-white mb-6">
                PARTNER<span className="text-yellow-500">TECH.AI</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Strategic partnerships that amplify your AI capabilities.
                Connect with the ecosystem that powers tomorrow's innovations.
              </p>
              <Link href="/crm" className="btn-empire inline-block">
                Explore Partnerships
              </Link>
            </div>
            <div className="empire-card">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">
                Integration Ready
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-yellow-500">⚡</span>
                  Supabase + OpenAI Integration
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-500">🔗</span>
                  Webhook Automations
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-500">📊</span>
                  Real-time Analytics
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-yellow-500">🛡️</span>
                  Enterprise Security
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
