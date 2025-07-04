export function DeploymentStatusComponent() {
  return (
    <div className="empire-card">
      <h3 className="text-xl font-bold text-white mb-6">Deployment Status</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg border border-green-500/30">
          <div>
            <div className="text-white font-semibold">Production</div>
            <div className="text-green-400 text-sm">
              Vercel • saintvision.ai
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-bold text-sm">LIVE</span>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <div>
            <div className="text-white font-semibold">Azure Functions</div>
            <div className="text-blue-400 text-sm">Webhook Pipeline</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-400 font-bold text-sm">ACTIVE</span>
          </div>
        </div>

        <div className="text-center pt-4">
          <div className="text-gray-400 text-sm">Last Updated</div>
          <div className="text-yellow-500 font-semibold">2 minutes ago</div>
        </div>
      </div>
    </div>
  );
}
