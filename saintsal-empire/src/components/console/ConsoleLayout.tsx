import Link from "next/link";

export function ConsoleLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="empire-gradient border-b border-yellow-500/20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white">
                SAINT<span className="text-yellow-500">SAL™</span>
              </h1>
              <p className="text-gray-400 text-sm">AI Empire Console</p>
            </div>
          </div>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              Home
            </Link>
            <Link href="/console" className="text-yellow-500 font-semibold">
              Console
            </Link>
            <Link
              href="/crm"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
            >
              CRM
            </Link>
            <div className="flex items-center gap-2 bg-yellow-500/20 px-4 py-2 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-yellow-500 text-sm font-semibold">
                LIVE
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">{children}</main>

      {/* Footer Quote */}
      <footer className="border-t border-yellow-500/20 p-6 text-center">
        <p className="text-yellow-500 font-semibold text-lg">
          "SaintSal™ AI doesn't just answer. It adapts. It empowers. It becomes
          your... GOTTA GUY™!"
        </p>
      </footer>
    </div>
  );
}
