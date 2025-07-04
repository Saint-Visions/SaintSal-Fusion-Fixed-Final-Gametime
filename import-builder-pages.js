// import-builder-pages.js
const fs = require("fs");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const folderPath = "./saintsal_full_builder_pages";

const ROUTE_MAP = {
  "home.json": "/",
  "login.json": "/login",
  "signup.json": "/signup",
  "dashboard.json": "/dashboard",
  "console.json": "/console",
  "partnertech.json": "/partnertech",
  "pricing.json": "/pricing",
  "upgrade.json": "/upgrade",
  "chrome-install.json": "/chrome-install",
  "settings.json": "/settings",
  "admin_clients.json": "/admin/clients",
  "admin_logs.json": "/admin/logs",
  "referral_invite.json": "/referral/invite",
  "checkout-success.json": "/checkout-success",
  "setup.json": "/setup",
};

const run = async () => {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);
    const content = fs.readFileSync(filePath, "utf8");

    const urlPath = ROUTE_MAP[file];
    if (!urlPath) {
      console.warn(`Skipping unknown file: ${file}`);
      continue;
    }

    console.log(`🟡 Importing ${file} → ${urlPath}`);

    try {
      const res = await axios.post(
        `https://builder.io/api/v1/write/page?apiKey=${process.env.BUILDER_PRIVATE_API_KEY}`,
        {
          data: {
            ...JSON.parse(content),
            model: "page",
            url: urlPath,
          },
        },
      );

      console.log(`✅ Imported ${urlPath}: ${res.status}`);
    } catch (err) {
      console.error(
        `❌ Error importing ${urlPath}:`,
        err.response?.data || err.message,
      );
    }
  }
};

run();
