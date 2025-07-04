import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import FigmaSidebar from "./components/FigmaSidebar";
import Loading from "./components/loading";
import PushNotificationPrompt from "./components/PushNotificationPrompt";
import FontOverride from "./components/FontOverride";
import AIEmpireInstallPrompt from "./components/AIEmpireInstallPrompt";
import Home from "./pages/home";
import Hero from "./pages/hero";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Operations from "./pages/operations";
import PartnerTech from "./pages/partnertech";
import Setup from "./pages/setup";
import Settings from "./pages/settings";
import AdminLogs from "./pages/admin-logs";
import AdminIntegrations from "./pages/admin-integrations";
import Pricing from "./pages/pricing";
import Upgrade from "./pages/upgrade";
import Chat from "./pages/chat";
import Dashboard from "./pages/dashboard";
import Builder from "./pages/builder";
import Crm from "./pages/crm";
import EmpireLive from "./pages/empire-live";
import TestHome from "./pages/test-home";
import SimpleHome from "./pages/simple-home";
import SaintSalHome from "./pages/saintsal-home";

export default function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    // Let the loading component handle its own completion
    // Show notification prompt after loading completes
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowNotificationPrompt(true);
      }, 1000);

      // Show AI Empire install prompt after 3 seconds
      const installTimer = setTimeout(() => {
        setShowInstallPrompt(true);
      }, 3000);

      return () => {
        clearTimeout(timer);
        clearTimeout(installTimer);
      };
    }
  }, [isLoading]);

  // Temporarily disabled for Builder.io editing
  // if (isLoading) {
  //   return <Loading onComplete={() => setIsLoading(false)} />;
  // }

  const isPublicPage = ["/login", "/signup"].includes(location.pathname);

  return (
    <>
      <FontOverride />
      <Routes>
        {/* PUBLIC PAGES - Full screen, no sidebar */}
        <Route
          path="/login"
          element={
            <div className="min-h-screen w-full bg-black text-white font-sans">
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="min-h-screen w-full bg-black text-white font-sans">
              <Signup />
            </div>
          }
        />

        {/* AUTH PAGES - With sidebar and background */}
        <Route
          path="/*"
          element={
            <div className="flex min-h-screen w-full bg-black text-white font-sans">
              <EmpireSidebar />
              <main
                className="flex-1 overflow-auto"
                style={{
                  backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.8)), url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fd277f0ca010843b4bd70b0c64b3d86fd?format=webp&width=800')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundAttachment: "fixed",
                }}
              >
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/operations" element={<Operations />} />
                  <Route path="/partnertech" element={<PartnerTech />} />
                  <Route path="/setup" element={<Setup />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/admin/logs" element={<AdminLogs />} />
                  <Route
                    path="/admin/integrations"
                    element={<AdminIntegrations />}
                  />
                  <Route
                    path="/console/settings"
                    element={<AdminIntegrations />}
                  />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/upgrade" element={<Upgrade />} />
                  <Route path="/chat" element={<Chat />} />
                  <Route path="/console" element={<Chat />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/builder" element={<Builder />} />
                  <Route path="/crm" element={<Crm />} />
                  <Route path="/empire-live" element={<EmpireLive />} />
                  {/* Missing sidebar navigation routes */}
                  <Route path="/notes" element={<Dashboard />} />
                  <Route path="/tools" element={<Chat />} />
                  <Route path="/generator" element={<Chat />} />
                  <Route path="/portal" element={<Dashboard />} />
                  <Route path="/account" element={<Settings />} />
                  <Route path="/logout" element={<Login />} />
                </Routes>
              </main>
            </div>
          }
        />
      </Routes>

      {showNotificationPrompt && (
        <PushNotificationPrompt
          onClose={() => setShowNotificationPrompt(false)}
          onPermissionGranted={() => setShowNotificationPrompt(false)}
        />
      )}

      {showInstallPrompt && (
        <AIEmpireInstallPrompt
          onClose={() => setShowInstallPrompt(false)}
          onInstall={() => {
            setShowInstallPrompt(false);
            // PWA install logic would go here
            console.log("Installing SaintSal Empire...");
          }}
        />
      )}
    </>
  );
}
