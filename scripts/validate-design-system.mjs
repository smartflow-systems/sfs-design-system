import { existsSync, readFileSync } from "node:fs";

const requiredFiles = [
  "README.md",
  "server.js",
  "site.config.json",
  "tailwind.preset.js",
  "src/sfs-variables.css",
  "src/sfs-complete-theme.css",
  "src/sfs-circuit-flow.js",
  "src/sfs-theme-config.json",
  "src/components/SFSHamburgerMenu.tsx",
  "public/theme/sfs-complete-theme.css",
  "public/theme/sfs-circuit-flow.js",
  "public/theme/sfs-sidebar.css",
  "public/theme/sfs-sidebar.js",
];

const missing = requiredFiles.filter((path) => !existsSync(new URL(`../${path}`, import.meta.url)));

if (missing.length > 0) {
  console.error(`Missing design-system file(s): ${missing.join(", ")}`);
  process.exit(1);
}

for (const jsonFile of ["site.config.json", "src/sfs-theme-config.json", "sfs-currency-config.json"]) {
  JSON.parse(readFileSync(new URL(`../${jsonFile}`, import.meta.url), "utf8"));
}

console.log(`Design system OK: ${requiredFiles.length} files verified.`);
