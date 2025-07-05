import { Builder, builder } from "@builder.io/react";

// Import all Empire components
import { EmpireButton } from "./components/core/EmpireButton";
import { EmpireCard } from "./components/core/EmpireCard";
import { EmpireInput } from "./components/core/EmpireInput";
import { EmpireBadge } from "./components/core/EmpireBadge";
import { StatusPanel } from "./components/core/StatusPanel";
import { IntegrationStatusNotes } from "./components/core/IntegrationStatusNotes";
import { PreferenceDropdown } from "./components/core/PreferenceDropdown";

import { EmpireContainer } from "./components/layout/EmpireContainer";
import { EmpireSection } from "./components/layout/EmpireSection";
import { EmpireGrid } from "./components/layout/EmpireGrid";

import { EmpireHero } from "./components/sections/EmpireHero";
import { EmpireFeatureGrid } from "./components/sections/EmpireFeatureGrid";
import { EmpireCTA } from "./components/sections/EmpireCTA";
import { EmpireStats } from "./components/sections/EmpireStats";

// Import Clean Sidebar
import EmpireSidebarClean from "./components/EmpireSidebarClean";

// Register Core Components
Builder.registerComponent(EmpireButton, {
  name: "EmpireButton",
  inputs: [
    { name: "children", type: "text", defaultValue: "Click me" },
    {
      name: "variant",
      type: "string",
      enum: ["primary", "secondary", "outline"],
      defaultValue: "primary",
    },
    {
      name: "size",
      type: "string",
      enum: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    { name: "href", type: "url" },
    { name: "disabled", type: "boolean", defaultValue: false },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireCard, {
  name: "EmpireCard",
  inputs: [
    { name: "children", type: "blocks", defaultValue: [] },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireInput, {
  name: "EmpireInput",
  inputs: [
    { name: "label", type: "string" },
    { name: "placeholder", type: "string" },
    {
      name: "type",
      type: "string",
      enum: ["text", "email", "password", "number"],
      defaultValue: "text",
    },
    { name: "required", type: "boolean", defaultValue: false },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireBadge, {
  name: "EmpireBadge",
  inputs: [
    { name: "children", type: "text", defaultValue: "Badge" },
    {
      name: "variant",
      type: "string",
      enum: ["gold", "green", "red", "orange", "gray"],
      defaultValue: "gold",
    },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(StatusPanel, {
  name: "StatusPanel",
  inputs: [
    { name: "title", type: "string", defaultValue: "Integration Status" },
    {
      name: "status",
      type: "string",
      enum: ["connected", "disconnected", "warning", "pending"],
      defaultValue: "connected",
    },
    { name: "description", type: "string" },
    { name: "children", type: "blocks", defaultValue: [] },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(PreferenceDropdown, {
  name: "PreferenceDropdown",
  inputs: [
    { name: "label", type: "string", defaultValue: "Select Option" },
    {
      name: "options",
      type: "list",
      subFields: [
        { name: "value", type: "string" },
        { name: "label", type: "string" },
      ],
    },
    { name: "value", type: "string" },
    { name: "className", type: "string" },
  ],
});

// Register Layout Components
Builder.registerComponent(EmpireContainer, {
  name: "EmpireContainer",
  inputs: [
    { name: "children", type: "blocks", defaultValue: [] },
    {
      name: "maxWidth",
      type: "string",
      enum: ["sm", "md", "lg", "xl", "2xl", "7xl", "full"],
      defaultValue: "7xl",
    },
    {
      name: "padding",
      type: "string",
      enum: ["none", "sm", "md", "lg"],
      defaultValue: "lg",
    },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireSection, {
  name: "EmpireSection",
  inputs: [
    { name: "children", type: "blocks", defaultValue: [] },
    {
      name: "background",
      type: "string",
      enum: ["black", "gradient", "charcoal", "transparent"],
      defaultValue: "transparent",
    },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireGrid, {
  name: "EmpireGrid",
  inputs: [
    { name: "children", type: "blocks", defaultValue: [] },
    { name: "cols", type: "number", enum: [1, 2, 3, 4, 6], defaultValue: 3 },
    {
      name: "gap",
      type: "string",
      enum: ["sm", "md", "lg", "xl"],
      defaultValue: "md",
    },
    { name: "className", type: "string" },
  ],
});

// Register Section Components
Builder.registerComponent(EmpireHero, {
  name: "EmpireHero",
  inputs: [
    { name: "title", type: "string", defaultValue: "SaintSal™ EMPIRE" },
    { name: "subtitle", type: "string" },
    {
      name: "description",
      type: "string",
      defaultValue:
        "The future of AI-powered business intelligence. Where vision meets execution.",
    },
    { name: "tagline", type: "string", defaultValue: "Yeah... I GOTTA GUY™" },
    {
      name: "primaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string" },
        { name: "href", type: "url" },
      ],
    },
    {
      name: "secondaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string" },
        { name: "href", type: "url" },
      ],
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "svg", "webp"],
    },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireFeatureGrid, {
  name: "EmpireFeatureGrid",
  inputs: [
    { name: "title", type: "string" },
    { name: "subtitle", type: "string" },
    {
      name: "features",
      type: "list",
      subFields: [
        { name: "icon", type: "string" },
        { name: "title", type: "string" },
        { name: "description", type: "string" },
        { name: "color", type: "color" },
      ],
    },
    { name: "cols", type: "number", enum: [1, 2, 3, 4, 6], defaultValue: 3 },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireCTA, {
  name: "EmpireCTA",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Ready to Build Your Empire?",
    },
    { name: "description", type: "string" },
    {
      name: "primaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string" },
        { name: "href", type: "url" },
      ],
    },
    {
      name: "secondaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string" },
        { name: "href", type: "url" },
      ],
    },
    {
      name: "background",
      type: "string",
      enum: ["gradient", "charcoal", "black"],
      defaultValue: "gradient",
    },
    { name: "className", type: "string" },
  ],
});

Builder.registerComponent(EmpireStats, {
  name: "EmpireStats",
  inputs: [
    { name: "title", type: "string" },
    {
      name: "stats",
      type: "list",
      subFields: [
        { name: "value", type: "string" },
        { name: "label", type: "string" },
        { name: "description", type: "string" },
        { name: "icon", type: "string" },
      ],
    },
    { name: "cols", type: "number", enum: [1, 2, 3, 4, 6], defaultValue: 3 },
    { name: "className", type: "string" },
  ],
});

// Register Clean Sidebar
Builder.registerComponent(EmpireSidebarClean, {
  name: "EmpireSidebar",
  inputs: [],
});

// Initialize Builder.io
if (typeof window !== "undefined") {
  builder.init(
    import.meta.env.VITE_BUILDER_API_KEY || "configure-builder-api-key",
  );
}
