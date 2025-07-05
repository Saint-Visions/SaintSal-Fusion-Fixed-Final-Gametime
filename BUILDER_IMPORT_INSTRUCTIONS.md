# 🔥 SaintSal™ Builder.io Auto-Import Instructions

## ✅ TIMES FONT ELIMINATED!

I deleted the old `builder-registry.tsx` that was causing the Times font issue.

## 📁 STEP 1: Prepare Your JSON Files

Make sure your folder structure is:

```
📂 saintsal_full_builder_pages/
 ├─ home.json
 ├─ login.json
 ├─ signup.json
 ├─ dashboard.json
 ├─ console.json
 ├─ partnertech.json
 ├─ pricing.json
 ├─ upgrade.json
 ├─ chrome-install.json
 ├─ settings.json
 ├─ admin_clients.json
 ├─ admin_logs.json
 ├─ referral_invite.json
 ├─ checkout-success.json
 └─ setup.json
```

## 🔐 STEP 2: Get Builder.io Credentials

1. Go to: https://builder.io/account/space
2. Copy your **Private API Key**
3. Create `.env` file with:

```env
BUILDER_PRIVATE_API_KEY=your-private-key-here
BUILDER_SPACE_ID=your-public-space-id-here
VITE_BUILDER_SPACE_ID=your-public-space-id-here
```

## 🚀 STEP 3: Run the Import

```bash
# Dependencies already installed
node import-builder-pages.js
```

## 🎯 Expected Output:

```
🟡 Importing home.json → /
✅ Imported /: 200
🟡 Importing login.json → /login
✅ Imported /login: 200
🟡 Importing dashboard.json ��� /dashboard
✅ Imported /dashboard: 200
... (all 15 routes)
```

## 🔥 AFTER IMPORT:

**Test your empire:**

- Visit: https://saintsal-ui.vercel.app/
- Check: All routes work
- Verify: SaintSal™ branding loads
- Confirm: No more Times font!

**Visual editing:**

- Go to: https://builder.io/content
- Edit any page with drag & drop
- Add your SaintVision branded images
- Publish changes instantly

**🎉 YOUR SAINTAL™ EMPIRE IS LIVE!**
