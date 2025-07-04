export function AnalyticsPanelComponent() {
  return (
    <div className="empire-card">
      <h3 className="text-xl font-bold text-white mb-6">Analytics Overview</h3>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-500">2,847</div>
            <div className="text-gray-400 text-sm">Queries Today</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500">0.8s</div>
            <div className="text-gray-400 text-sm">Avg Response</div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-400">GPT-4 Requests</span>
            <span className="text-white font-semibold">1,432</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Azure Cognitive</span>
            <span className="text-white font-semibold">891</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">CRM Syncs</span>
            <span className="text-white font-semibold">524</span>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <div className="flex items-center gap-2 text-green-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold">
              Premium Infrastructure
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
