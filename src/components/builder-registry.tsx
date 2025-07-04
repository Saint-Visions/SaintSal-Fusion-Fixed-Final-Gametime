import React from "react";
import { builder } from "@builder.io/react";
import SaintVisionAIPricingCards from "./SaintVisionAIPricingCards";
import EmpireButton from "./core/EmpireButton";
import EmpireCard from "./core/EmpireCard";
import EmpireInput from "./core/EmpireInput";

// Initialize Builder with environment key
builder.init(import.meta.env.VITE_BUILDER_API_KEY || "your-public-api-key");

// SaintSal™ Hero Component
const SaintSalHero: React.FC<any> = (props) => (
  <section className="relative empire-gradient pt-20 pb-32 px-8">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="hero-text mb-8 leading-tight">
        {props.title || "SAINT VISION AI"}
      </h1>
      <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
        {props.subtitle || "The future of AI-powered business intelligence."}
      </p>
      <p className="text-xl text-gold font-semibold mb-12">
        {props.tagline || "Yeah... I GOTTA GUY™"}
      </p>
    </div>
  </section>
);

// Empire Stats Component
const EmpireStats: React.FC<any> = (props) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
    <div className="empire-card text-center">
      <div className="text-4xl font-black text-gold mb-4">∞</div>
      <div className="text-xl font-bold text-white mb-2">
        Unlimited Potential
      </div>
      <div className="text-gray-400">AI-powered insights without limits</div>
    </div>
    <div className="empire-card text-center">
      <div className="text-4xl font-black text-gold mb-4">24/7</div>
      <div className="text-xl font-bold text-white mb-2">Always Active</div>
      <div className="text-gray-400">Round-the-clock AI assistance</div>
    </div>
    <div className="empire-card text-center">
      <div className="text-4xl font-black text-gold mb-4">🚀</div>
      <div className="text-xl font-bold text-white mb-2">Enterprise Ready</div>
      <div className="text-gray-400">Built for scale, designed for success</div>
    </div>
  </div>
);

// PartnerTech Integration Component
const PartnerTechIntegration: React.FC<any> = (props) => (
  <section className="py-20 px-8 bg-charcoal/40">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-black text-white mb-6">
            PARTNER<span className="text-gold">TECH.AI</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {props.description ||
              "Strategic partnerships that amplify your AI capabilities."}
          </p>
        </div>
        <div className="empire-card">
          <h3 className="text-2xl font-bold text-gold mb-6">
            Integration Ready
          </h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="text-gold">⚡</span>
              Supabase + OpenAI Integration
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">🔗</span>
              Webhook Automations
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">📊</span>
              Real-time Analytics
            </li>
            <li className="flex items-center gap-3">
              <span className="text-gold">🛡️</span>
              Enterprise Security
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

// CRM Dashboard Component
const SaintSalCRM: React.FC<any> = (props) => (
  <div className="empire-card">
    <h3 className="text-2xl font-bold text-gold mb-6">Live CRM Dashboard</h3>
    <div className="aspect-video bg-charcoal/50 rounded-xl flex items-center justify-center border border-gold/20">
      <div className="text-center">
        <div className="text-4xl mb-4">📊</div>
        <p className="text-gray-400">
          CRM Dashboard for {props.userTier || "Enterprise"} users
        </p>
        <p className="text-sm text-gold mt-2">Live Supabase sync active</p>
      </div>
    </div>
  </div>
);

// Register all SaintSal™ Empire Components
builder.registerComponent(SaintVisionAIPricingCards, {
  name: "SaintVisionAI Pricing Cards",
  description: "Enterprise-grade pricing tiers with Stripe integration",
  inputs: [
    {
      name: "showFreeTier",
      type: "boolean",
      defaultValue: true,
      helperText: "Display free trial option",
    },
    {
      name: "highlightPlan",
      type: "string",
      defaultValue: "Enterprise",
      enum: ["Free Trial", "Pro", "Enterprise"],
      helperText: "Which plan to highlight as most popular",
    },
  ],
});

builder.registerComponent(SaintSalHero, {
  name: "SaintSal Hero Section",
  description: "Command deck hero with divine branding",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "SAINT VISION AI",
      helperText: "Main hero title",
    },
    {
      name: "subtitle",
      type: "longText",
      defaultValue:
        "The future of AI-powered business intelligence. Where vision meets execution.",
      helperText: "Hero subtitle description",
    },
    {
      name: "tagline",
      type: "string",
      defaultValue: "Yeah... I GOTTA GUY™",
      helperText: "Brand tagline",
    },
  ],
});

builder.registerComponent(EmpireStats, {
  name: "Empire Stats Grid",
  description: "Dynamic statistics showcase for SaintSal™ metrics",
  inputs: [
    {
      name: "showMetrics",
      type: "boolean",
      defaultValue: true,
      helperText: "Display live metrics from Supabase",
    },
  ],
});

builder.registerComponent(PartnerTechIntegration, {
  name: "PartnerTech Integration",
  description: "Strategic partnership showcase with live integrations",
  inputs: [
    {
      name: "description",
      type: "longText",
      defaultValue: "Strategic partnerships that amplify your AI capabilities.",
      helperText: "Partnership description text",
    },
  ],
});

builder.registerComponent(SaintSalCRM, {
  name: "SaintSal CRM Dashboard",
  description: "Embedded CRM interface with Supabase sync",
  inputs: [
    {
      name: "userTier",
      type: "string",
      enum: ["free", "pro", "enterprise"],
      defaultValue: "enterprise",
      helperText: "User access tier for conditional rendering",
    },
  ],
});

// Register Core Empire Components
builder.registerComponent(EmpireButton, {
  name: "Empire Button",
  description: "SaintSal™ branded button with animations and variants",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Empire Action",
      helperText: "Button text",
    },
    {
      name: "variant",
      type: "string",
      enum: ["primary", "secondary", "ghost"],
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
    {
      name: "href",
      type: "string",
      helperText: "Link URL (optional)",
    },
  ],
});

builder.registerComponent(EmpireCard, {
  name: "Empire Card",
  description: "SaintSal™ branded card container with variants",
  inputs: [
    {
      name: "variant",
      type: "string",
      enum: ["default", "glass", "glow", "premium"],
      defaultValue: "default",
    },
    {
      name: "padding",
      type: "string",
      enum: ["sm", "md", "lg", "xl"],
      defaultValue: "lg",
    },
    {
      name: "hoverable",
      type: "boolean",
      defaultValue: false,
    },
  ],
});

builder.registerComponent(EmpireInput, {
  name: "Empire Input",
  description: "SaintSal™ branded input field with variants",
  inputs: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter empire data...",
    },
    {
      name: "type",
      type: "string",
      enum: ["text", "email", "password", "number"],
      defaultValue: "text",
    },
    {
      name: "variant",
      type: "string",
      enum: ["default", "glass", "minimal"],
      defaultValue: "default",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
  ],
});

export default builder;
