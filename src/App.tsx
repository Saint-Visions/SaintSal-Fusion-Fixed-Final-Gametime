import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FigmaSidebar from "./components/FigmaSidebar";
import Loading from "./components/loading";
import PushNotificationPrompt from "./components/PushNotificationPrompt";
import FontOverride from "./components/FontOverride";
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

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showNotificationPrompt, setShowNotificationPrompt] = useState(false);

  useEffect(() => {
    // Let the loading component handle its own completion
    // Show notification prompt after loading completes
    if (!isLoading) {
      const timer = setTimeout(() => {
        setShowNotificationPrompt(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Temporarily disabled for Builder.io editing
  // if (isLoading) {
  //   return <Loading onComplete={() => setIsLoading(false)} />;
  // }

  return (
    <>
      <FontOverride />
      <div className="flex min-h-screen w-full bg-black text-white font-sans">
        <FigmaSidebar />
        <main className="flex-1 overflow-auto bg-black">
          <Routes>
            <Route path="/" element={<TestHome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/partnertech" element={<PartnerTech />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin/logs" element={<AdminLogs />} />
            <Route path="/admin/integrations" element={<AdminIntegrations />} />
            <Route path="/console/settings" element={<AdminIntegrations />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/console" element={<Chat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/crm" element={<Crm />} />
            <Route path="/empire-live" element={<EmpireLive />} />
          </Routes>
        </main>
      </div>

      {showNotificationPrompt && (
        <PushNotificationPrompt
          onClose={() => setShowNotificationPrompt(false)}
          onPermissionGranted={() => setShowNotificationPrompt(false)}
        />
      )}
    </>
  );
}
