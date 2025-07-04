# 🎨 SAINTSAL™ EMPIRE — FINAL VISUAL SPECIFICATION

## 🏛️ Brand Identity

| Element             | Value                                                     |
| ------------------- | --------------------------------------------------------- |
| **Primary Font**    | Inter (weights: 400, 500, 700) — ALL CAPS allowed for nav |
| **Primary Color**   | #FFC700 → "Empire Gold"                                   |
| **Secondary Color** | #10161C → "Deep Space Black"                              |
| **Accent Colors**   | #FFFFFF (white), #333333 (gray shadows, borders)          |
| **Logo**            | logo-main.png (Gold Circuit SaintSal™)                   |
| **Favicon**         | favicon-512.png (uploaded to /public)                     |

## 🧱 Layout & UI Structure

| Element          | Description                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------- |
| **Sidebar**      | bg-[#10161C] with gold highlight border on active items, emoji-aligned, collapsible logic     |
| **Main Panels**  | EmpireCard, EmpireSection, EmpireGrid components used across all dashboards                   |
| **Hero Layout**  | Center-aligned box on dark blurred photo (ai-brain.webp)                                      |
| **Buttons**      | Gold (bg-[#FFC700]), rounded-xl, text-black                                                   |
| **CTA**          | "Start Cooking" button on homepage                                                            |
| **Shadow Logic** | shadow-lg, border-glow for active components                                                  |
| **Tagline**      | "SaintSal™ doesn't just answer. It adapts. It empowers. It becomes yours... **GOTTA GUY™**" |

## 🧠 UX Logic

| Feature                   | Description                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **🔊 Voice Readiness**    | Voice toggle (Web Speech API) active in /console and /chat                                                                  |
| **🧩 Modular Components** | Entire UI structured around:<br/>• EmpireContainer.tsx<br/>• EmpireCard.tsx<br/>• EmpireSection.tsx<br/>• ConsoleLayout.tsx |
| **🪪 Auth Awareness**     | Sidebar and admin panels auto-hide based on Supabase roles                                                                  |
| **📱 Responsive Layouts** | Fully mobile-responsive, with sidebar collapsing on small screens                                                           |

## 🧾 Builder.io Alignment

| Model                      | Routing                                                  |
| -------------------------- | -------------------------------------------------------- |
| **page**                   | Used for each route (/dashboard, /chat, etc.)            |
| **sections**               | Used for modular slices like hero, CTA, testimonial      |
| **builder-registry.ts**    | Routes + components mapped                               |
| **✅ All routes imported** | as of last push to saint-sal-fusion-fixed-final-gametime |

## 📸 Assets Summary

| Asset Name           | Path                         |
| -------------------- | ---------------------------- |
| logo-main.png        | /public/logo-main.png        |
| favicon-512.png      | /public/favicon-512.png      |
| ai-brain.webp        | /public/ai-brain.webp        |
| background-slide.png | /public/background-slide.png |

## 🔐 LOCK THIS INTO ALL FUTURE BUILDS

- ✅ Save as: VISUAL_SPEC.md
- ✅ Store inside /docs folder or /design-system/ repo
- ✅ Sync this spec with all Builder.io team members and clone launches

---

## 📋 Navigation Structure

### Main Sidebar Navigation (FigmaSidebar.tsx)

- 🏛️ Empire Command Center → `/dashboard`
- 🧠 AI Saint Companion → `/console`
- 📊 Business Operations → `/operations`
- 📝 Sacred Knowledge → `/notes`
- ⚡ AI Power Arsenal → `/tools`
- 🎨 Vision Generator → `/generator`
- 🤝 PartnerTech.ai Hub → `/partnertech`
- 🚪 Client Gateway → `/portal`
- 👑 Empire Profile → `/account`

### Empire Network Links

- 🎓 SaintVisions Institution → https://saintvisions.com (Coming Soon)
- 📈 SaintVision Brokerage → https://saintvisiongroup.com (Active)

### Public Routes (No Sidebar)

- `/login` - Full screen login form
- `/signup` - Full screen signup form

### Core Component Architecture

```typescript
// Core Empire Components
import { EmpireContainer } from "./components/layout/EmpireContainer";
import { EmpireSection } from "./components/layout/EmpireSection";
import { EmpireGrid } from "./components/layout/EmpireGrid";
import { EmpireCard } from "./components/empire/EmpireCard";
import { ConsoleLayout } from "./components/console/ConsoleLayout";
```

**VISUAL SPEC LOCKED ✅ - DO NOT MODIFY WITHOUT APPROVAL**
