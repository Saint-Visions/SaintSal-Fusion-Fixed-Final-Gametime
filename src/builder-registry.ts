import { Builder } from "@builder.io/sdk-react"
import {
  SaintVisionAIPricingCards,
  Sidebar,
  EmpireButton,
  EmpireCard,
  EmpireInput,
  EmpireBadge,
  EmpireHero,
  EmpireFeatureGrid,
  EmpireCTA,
  EmpireStats,
  EmpireContainer,
  EmpireSection,
  EmpireGrid,
  PreferenceDropdown,
  IntegrationStatusNotes,
  StatusPanel,
  ConsoleLayout,
  Dashboard,
  GHLEmbed
} from "./components"

// Register SaintVisionAIPricingCards component
Builder.registerComponent(SaintVisionAIPricingCards, {
  name: "SaintVisionAIPricingCards",
  inputs: [
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "black",
      helperText: "Background color for the pricing cards container"
    },
    {
      name: "borderColor",
      type: "string",
      defaultValue: "yellow-500",
      helperText: "Border color for pricing cards (Tailwind class)"
    },
    {
      name: "titleColor",
      type: "string",
      defaultValue: "yellow-400",
      helperText: "Color for plan titles (Tailwind class)"
    },
    {
      name: "buttonColor",
      type: "string",
      defaultValue: "yellow-500",
      helperText: "Background color for buttons (Tailwind class)"
    },
    {
      name: "buttonTextColor",
      type: "string",
      defaultValue: "black",
      helperText: "Text color for buttons (Tailwind class)"
    },
    {
      name: "plans",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
          defaultValue: "Plan Name",
          required: true
        },
        {
          name: "price",
          type: "string",
          defaultValue: "$0/mo",
          required: true
        },
        {
          name: "features",
          type: "list",
          subFields: [
            {
              name: "feature",
              type: "string",
              defaultValue: "Feature"
            }
          ]
        },
        {
          name: "button",
          type: "string",
          defaultValue: "Get Started",
          required: true
        },
        {
          name: "link",
          type: "url",
          defaultValue: "#",
          required: true
        }
      ],
      defaultValue: [
        {
          title: "Free Trial",
          price: "$0",
          features: ["GPT Chat", "2 messages", "Basic UI"],
          button: "Get Started",
          link: "/"
        }
      ]
    }
  ]
})

// Register Sidebar component
Builder.registerComponent(Sidebar, {
  name: "Sidebar",
  inputs: [
    {
      name: "backgroundColor",
      type: "color",
      defaultValue: "#10161C",
      helperText: "Background color for the sidebar"
    },
    {
      name: "textColor",
      type: "string",
      defaultValue: "white",
      helperText: "Text color (Tailwind class)"
    },
    {
      name: "hoverColor",
      type: "string",
      defaultValue: "yellow-500",
      helperText: "Hover color for navigation items (Tailwind class)"
    },
    {
      name: "width",
      type: "string",
      defaultValue: "64",
      helperText: "Width of sidebar (Tailwind class number)"
    },
    {
      name: "navigationItems",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
          defaultValue: "Navigation Item",
          required: true
        },
        {
          name: "path",
          type: "string",
          defaultValue: "/",
          required: true
        }
      ],
      defaultValue: [
        { label: "Dashboard", path: "/dashboard" },
        { label: "Chat", path: "/chat" },
        { label: "Pricing", path: "/pricing" },
        { label: "CRM", path: "/crm" },
        { label: "Upgrade", path: "/upgrade" },
        { label: "Builder", path: "/builder" }
      ]
    }
  ]
})

// Register EmpireButton component
Builder.registerComponent(EmpireButton, {
  name: "EmpireButton",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Click me",
      required: true
    },
    {
      name: "variant",
      type: "enum",
      enum: ["primary", "secondary", "outline", "ghost", "danger"],
      defaultValue: "primary"
    },
    {
      name: "size",
      type: "enum",
      enum: ["sm", "md", "lg", "xl"],
      defaultValue: "md"
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "fullWidth",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "href",
      type: "url",
      helperText: "Optional link URL"
    },
    {
      name: "target",
      type: "string",
      defaultValue: "_self",
      helperText: "Link target (_self, _blank, etc.)"
    }
  ]
})

// Register EmpireCard component
Builder.registerComponent(EmpireCard, {
  name: "EmpireCard",
  canHaveChildren: true,
  inputs: [
    {
      name: "variant",
      type: "enum",
      enum: ["default", "bordered", "elevated", "glow"],
      defaultValue: "default"
    },
    {
      name: "padding",
      type: "enum",
      enum: ["none", "sm", "md", "lg", "xl"],
      defaultValue: "md"
    },
    {
      name: "hoverable",
      type: "boolean",
      defaultValue: false
    }
  ]
})

// Register EmpireInput component
Builder.registerComponent(EmpireInput, {
  name: "EmpireInput",
  inputs: [
    {
      name: "type",
      type: "enum",
      enum: ["text", "email", "password", "number", "tel", "url", "search"],
      defaultValue: "text"
    },
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Enter text..."
    },
    {
      name: "label",
      type: "string",
      helperText: "Optional input label"
    },
    {
      name: "size",
      type: "enum",
      enum: ["sm", "md", "lg"],
      defaultValue: "md"
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "required",
      type: "boolean",
      defaultValue: false
    },
    {
      name: "helperText",
      type: "string",
      helperText: "Helper text below input"
    }
  ]
})

// Register EmpireBadge component
Builder.registerComponent(EmpireBadge, {
  name: "EmpireBadge",
  inputs: [
    {
      name: "children",
      type: "string",
      defaultValue: "Badge",
      required: true
    },
    {
      name: "variant",
      type: "enum",
      enum: ["primary", "secondary", "success", "warning", "error", "info"],
      defaultValue: "primary"
    },
    {
      name: "size",
      type: "enum",
      enum: ["sm", "md", "lg"],
      defaultValue: "md"
    },
    {
      name: "removable",
      type: "boolean",
      defaultValue: false
    }
  ]
})

// Register EmpireHero component
Builder.registerComponent(EmpireHero, {
  name: "EmpireHero",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Build Your Empire",
      required: true
    },
    {
      name: "subtitle",
      type: "string",
      helperText: "Optional subtitle badge"
    },
    {
      name: "description",
      type: "longText",
      helperText: "Hero description text"
    },
    {
      name: "primaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string", defaultValue: "Get Started" },
        { name: "href", type: "url" },
        {
          name: "variant",
          type: "enum",
          enum: ["primary", "secondary", "outline"],
          defaultValue: "primary"
        }
      ]
    },
    {
      name: "secondaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string", defaultValue: "Learn More" },
        { name: "href", type: "url" },
        {
          name: "variant",
          type: "enum",
          enum: ["primary", "secondary", "outline"],
          defaultValue: "outline"
        }
      ]
    },
    {
      name: "backgroundImage",
      type: "file",
      allowedFileTypes: ["jpeg", "jpg", "png", "webp"]
    },
    {
      name: "size",
      type: "enum",
      enum: ["sm", "md", "lg", "xl"],
      defaultValue: "lg"
    },
    {
      name: "centered",
      type: "boolean",
      defaultValue: true
    }
  ]
})

// Register EmpireFeatureGrid component
Builder.registerComponent(EmpireFeatureGrid, {
  name: "EmpireFeatureGrid",
  inputs: [
    {
      name: "title",
      type: "string",
      helperText: "Optional section title"
    },
    {
      name: "subtitle",
      type: "string",
      helperText: "Optional section subtitle"
    },
    {
      name: "columns",
      type: "enum",
      enum: [2, 3, 4],
      defaultValue: 3
    },
    {
      name: "centered",
      type: "boolean",
      defaultValue: true
    },
    {
      name: "features",
      type: "list",
      subFields: [
        {
          name: "title",
          type: "string",
          defaultValue: "Feature Title",
          required: true
        },
        {
          name: "description",
          type: "longText",
          defaultValue: "Feature description",
          required: true
        },
        {
          name: "link",
          type: "object",
          subFields: [
            { name: "text", type: "string", defaultValue: "Learn More" },
            { name: "href", type: "url", defaultValue: "#" }
          ]
        }
      ],
      defaultValue: [
        {
          title: "Lightning Fast",
          description: "Built for speed and performance"
        },
        {
          title: "Secure & Reliable",
          description: "Enterprise-grade security"
        },
        { title: "Easy to Use", description: "Intuitive user experience" }
      ]
    }
  ]
})

// Register EmpireCTA component
Builder.registerComponent(EmpireCTA, {
  name: "EmpireCTA",
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Ready to Get Started?",
      required: true
    },
    {
      name: "description",
      type: "longText",
      helperText: "Optional CTA description"
    },
    {
      name: "primaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string", defaultValue: "Start Now" },
        { name: "href", type: "url" },
        {
          name: "variant",
          type: "enum",
          enum: ["primary", "secondary", "outline"],
          defaultValue: "primary"
        }
      ]
    },
    {
      name: "secondaryAction",
      type: "object",
      subFields: [
        { name: "text", type: "string", defaultValue: "Learn More" },
        { name: "href", type: "url" },
        {
          name: "variant",
          type: "enum",
          enum: ["primary", "secondary", "outline"],
          defaultValue: "outline"
        }
      ]
    },
    {
      name: "size",
      type: "enum",
      enum: ["sm", "md", "lg"],
      defaultValue: "md"
    },
    {
      name: "centered",
      type: "boolean",
      defaultValue: true
    }
  ]
})

// Register EmpireStats component
Builder.registerComponent(EmpireStats, {
  name: "EmpireStats",
  inputs: [
    {
      name: "title",
      type: "string",
      helperText: "Optional section title"
    },
    {
      name: "subtitle",
      type: "string",
      helperText: "Optional section subtitle"
    },
    {
      name: "columns",
      type: "enum",
      enum: [2, 3, 4],
      defaultValue: 4
    },
    {
      name: "centered",
      type: "boolean",
      defaultValue: true
    },
    {
      name: "stats",
      type: "list",
      subFields: [
        { name: "value", type: "string", defaultValue: "100+", required: true },
        {
          name: "label",
          type: "string",
          defaultValue: "Metric",
          required: true
        },
        {
          name: "description",
          type: "string",
          helperText: "Optional description"
        }
      ],
      defaultValue: [
        { value: "10K+", label: "Users", description: "Active monthly users" },
        {
          value: "99.9%",
          label: "Uptime",
          description: "Service availability"
        },
        { value: "24/7", label: "Support", description: "Always here to help" },
        { value: "50+", label: "Countries", description: "Global reach" }
      ]
    }
  ]
})

// Register EmpireContainer component
Builder.registerComponent(EmpireContainer, {
  name: "EmpireContainer",
  canHaveChildren: true,
  inputs: [
    {
      name: "size",
      type: "enum",
      enum: ["sm", "md", "lg", "xl", "full"],
      defaultValue: "lg"
    },
    {
      name: "padding",
      type: "boolean",
      defaultValue: true
    }
  ]
})

// Register EmpireSection component
Builder.registerComponent(EmpireSection, {
  name: "EmpireSection",
  canHaveChildren: true,
  inputs: [
    {
      name: "padding",
      type: "enum",
      enum: ["none", "sm", "md", "lg", "xl"],
      defaultValue: "lg"
    },
    {
      name: "containerSize",
      type: "enum",
      enum: ["sm", "md", "lg", "xl", "full"],
      defaultValue: "lg"
    },
    {
      name: "background",
      type: "enum",
      enum: ["none", "primary", "secondary", "gradient"],
      defaultValue: "none"
    }
  ]
})

// Register EmpireGrid component
Builder.registerComponent(EmpireGrid, {
  name: "EmpireGrid",
  canHaveChildren: true,
  inputs: [
    {
      name: "columns",
      type: "enum",
      enum: [1, 2, 3, 4, 5, 6, 12],
      defaultValue: 3
    },
    {
      name: "gap",
      type: "enum",
      enum: ["none", "sm", "md", "lg", "xl"],
      defaultValue: "md"
    },
    {
      name: "responsive",
      type: "boolean",
      defaultValue: true
    }
  ]
})

// Register PreferenceDropdown component
Builder.registerComponent(PreferenceDropdown, {
  name: "PreferenceDropdown",
  inputs: [
    {
      name: "value",
      type: "enum",
      enum: ["gpt-4", "gpt-3.5", "claude", "llama"],
      defaultValue: "gpt-4"
    },
    {
      name: "label",
      type: "string",
      defaultValue: "AI Model",
      helperText: "Label for the dropdown"
    },
    {
      name: "disabled",
      type: "boolean",
      defaultValue: false
    }
  ]
})

// Register IntegrationStatusNotes component
Builder.registerComponent(IntegrationStatusNotes, {
  name: "IntegrationStatusNotes",
  inputs: [
    {
      name: "status",
      type: "enum",
      enum: ["connected", "disconnected", "error", "pending"],
      defaultValue: "connected"
    },
    {
      name: "serviceName",
      type: "string",
      defaultValue: "Service",
      required: true
    },
    {
      name: "notes",
      type: "longText",
      helperText: "Additional status notes"
    }
  ]
})

// Register StatusPanel component
Builder.registerComponent(StatusPanel, {
  name: "StatusPanel",
  inputs: [
    {
      name: "systemStatus",
      type: "enum",
      enum: ["operational", "degraded", "outage", "maintenance"],
      defaultValue: "operational"
    },
    {
      name: "services",
      type: "list",
      subFields: [
        {
          name: "name",
          type: "string",
          defaultValue: "Service",
          required: true
        },
        {
          name: "status",
          type: "enum",
          enum: ["operational", "degraded", "outage"],
          defaultValue: "operational"
        }
      ],
      defaultValue: [
        { name: "API", status: "operational" },
        { name: "Database", status: "operational" }
      ]
    }
  ]
})

// Register ConsoleLayout component
Builder.registerComponent(ConsoleLayout, {
  name: "ConsoleLayout",
  canHaveChildren: true,
  inputs: [
    {
      name: "title",
      type: "string",
      defaultValue: "Console",
      helperText: "Console page title"
    },
    {
      name: "showSidebar",
      type: "boolean",
      defaultValue: true
    }
  ]
})

// Register Dashboard component
Builder.registerComponent(Dashboard, {
  name: "Dashboard",
  inputs: [
    {
      name: "metrics",
      type: "list",
      subFields: [
        {
          name: "label",
          type: "string",
          defaultValue: "Metric",
          required: true
        },
        {
          name: "value",
          type: "string",
          defaultValue: "0",
          required: true
        },
        {
          name: "trend",
          type: "enum",
          enum: ["up", "down", "stable"],
          defaultValue: "stable"
        }
      ],
      defaultValue: [
        { label: "Active Users", value: "1,234", trend: "up" },
        { label: "Requests", value: "56,789", trend: "stable" }
      ]
    }
  ]
})

// Register GHLEmbed component
Builder.registerComponent(GHLEmbed, {
  name: "GHLEmbed",
  inputs: [
    {
      name: "embedUrl",
      type: "url",
      required: true,
      helperText: "GoHighLevel embed URL"
    },
    {
      name: "height",
      type: "string",
      defaultValue: "600px",
      helperText: "Embed height (e.g., 600px, 100vh)"
    }
  ]
})

export {
  SaintVisionAIPricingCards,
  Sidebar,
  EmpireButton,
  EmpireCard,
  EmpireInput,
  EmpireBadge,
  EmpireHero,
  EmpireFeatureGrid,
  EmpireCTA,
  EmpireStats,
  EmpireContainer,
  EmpireSection,
  EmpireGrid,
  PreferenceDropdown,
  IntegrationStatusNotes,
  StatusPanel,
  ConsoleLayout,
  Dashboard,
  GHLEmbed
}
