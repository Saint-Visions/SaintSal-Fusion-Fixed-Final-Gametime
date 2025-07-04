import { ConsoleLayoutComponent } from "../../components/console/ConsoleLayout";
import { DashboardComponent } from "../../components/console/Dashboard";
import { DualChatInterfaceComponent } from "../../components/console/DualChatInterface";
import { DeploymentStatusComponent } from "../../components/console/DeploymentStatus";
import { AnalyticsPanelComponent } from "../../components/console/AnalyticsPanel";
import { CommandCenterComponent } from "../../components/console/CommandCenter";

export default function AIConsolePage() {
  return (
    <div className="min-h-screen bg-black">
      <ConsoleLayoutComponent>
        <div className="space-y-8">
          <DashboardComponent />
          <DualChatInterfaceComponent />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <DeploymentStatusComponent />
            <AnalyticsPanelComponent />
            <CommandCenterComponent />
          </div>
        </div>
      </ConsoleLayoutComponent>
    </div>
  );
}
