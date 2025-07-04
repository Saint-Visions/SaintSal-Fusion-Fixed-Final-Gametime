import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Upgrade from "./pages/upgrade";
import Chat from "./pages/chat";
import Dashboard from "./pages/dashboard";
import Builder from "./pages/builder";
import Crm from "./pages/crm";

export default function App() {
  return (
    <div className="flex min-h-screen w-full bg-black">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/crm" element={<Crm />} />
        </Routes>
      </main>
    </div>
  );
}
