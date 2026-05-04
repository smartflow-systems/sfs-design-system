import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join } from "path";

const app = express();

// Security headers
app.use(helmet());

// CORS — restrict to same origin in production; override via CORS_ORIGIN env var
const allowedOrigin = process.env.CORS_ORIGIN || false;
app.use(cors({
  origin: allowedOrigin,
  credentials: false,
}));

// Body parsing
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Rate limiting — global
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(globalLimiter);

// Stricter limit on mutation endpoints
const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

// Load config once at startup
let config;
try {
  config = JSON.parse(readFileSync("./public/site.config.json", "utf-8"));
} catch {
  config = { siteName: "SFS Design System", version: "0.1.0" };
}

// Ensure data directory exists
const dataDir = "./data";
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

// Leads database file path
const leadsFile = join(dataDir, "leads.json");

// Initialize leads file if it doesn't exist
if (!existsSync(leadsFile)) {
  writeFileSync(leadsFile, JSON.stringify({ leads: [] }, null, 2));
}

// Helper: Read leads
function readLeads() {
  try {
    const data = readFileSync(leadsFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return { leads: [] };
  }
}

// Helper: Write leads
function writeLeads(data) {
  try {
    writeFileSync(leadsFile, JSON.stringify(data, null, 2));
    return true;
  } catch {
    return false;
  }
}

// serve everything from /public
app.use(express.static("public"));

// health check with site info
app.get("/health", (_req, res) => res.json({
  ok: true,
  siteName: config.siteName,
  version: config.version,
}));
app.get("/api/health", (_req, res) => res.json({
  ok: true,
  siteName: config.siteName,
  version: config.version,
}));

// API: Submit Lead
app.post("/api/leads", writeLimiter, (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, source } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        success: false,
        message: "First name, last name, and email are required",
      });
    }

    // Sanitize string inputs — strip to reasonable length
    const clean = (val, max = 200) =>
      typeof val === "string" ? val.trim().slice(0, max) : "";

    const safeFirst = clean(firstName, 100);
    const safeLast = clean(lastName, 100);
    const safeEmail = clean(email, 254);
    const safeCompany = clean(company);
    const safePhone = clean(phone, 20);
    const safeSource = clean(source, 50) || "direct";

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(safeEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // Read existing leads
    const data = readLeads();

    // Check for duplicate email
    const existingLead = data.leads.find(lead => lead.email === safeEmail);
    if (existingLead) {
      return res.status(200).json({
        success: true,
        message: "Lead already exists",
        leadId: existingLead.id,
      });
    }

    // Create new lead
    const newLead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      firstName: safeFirst,
      lastName: safeLast,
      email: safeEmail,
      company: safeCompany,
      phone: safePhone,
      source: safeSource,
      status: "new",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // Add lead to array
    data.leads.push(newLead);

    // Save to file
    if (!writeLeads(data)) {
      throw new Error("Failed to save lead");
    }

    // Return success
    res.status(201).json({
      success: true,
      message: "Lead captured successfully",
      leadId: newLead.id,
    });

  } catch {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});

// API: Get All Leads — requires API key via Authorization header
app.get("/api/leads", (req, res) => {
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey) {
    return res.status(503).json({ success: false, message: "Admin access not configured" });
  }
  const authHeader = req.headers.authorization || "";
  if (authHeader !== `Bearer ${adminKey}`) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  try {
    const data = readLeads();
    res.json({
      success: true,
      count: data.leads.length,
      leads: data.leads,
    });
  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
    });
  }
});

// API: Stripe Checkout (placeholder - requires Stripe configuration)
const ALLOWED_PLAN_IDS = /^[a-zA-Z0-9_-]{1,50}$/;

app.post("/api/stripe/checkout", writeLimiter, async (req, res) => {
  try {
    const { planId, successUrl, cancelUrl } = req.body;

    // Validate planId format before using it in any lookup
    if (!planId || typeof planId !== "string" || !ALLOWED_PLAN_IDS.test(planId)) {
      return res.status(400).json({ success: false, message: "Invalid plan ID" });
    }

    // Load pricing data
    let pricingData;
    try {
      pricingData = JSON.parse(readFileSync("./public/pricing.json", "utf-8"));
    } catch {
      return res.status(503).json({ success: false, message: "Pricing data unavailable" });
    }

    const plan = pricingData.plans.find(p => p.id === planId);

    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    // Placeholder response until Stripe is wired up
    res.json({
      success: true,
      message: "Stripe integration pending",
      planId,
      plan: plan.name,
      price: plan.price,
      url: `/contact.html?plan=${encodeURIComponent(planId)}`,
    });

  } catch {
    res.status(500).json({
      success: false,
      message: "Failed to create checkout session",
    });
  }
});

// Global error handler — prevents Express from leaking stack traces
app.use((err, _req, res, _next) => {
  res.status(500).json({ success: false, message: "Internal server error" });
});

// port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  if (process.env.NODE_ENV !== "production") {
    process.stdout.write(`serving on ${port}\n`);
  }
});

export default app;
