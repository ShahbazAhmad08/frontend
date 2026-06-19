#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import COLORS from theme.js
const themePath = path.join(__dirname, '../src/constants/theme.js');
const themeContent = fs.readFileSync(themePath, 'utf-8');

// Extract COLORS object from theme.js
const colorMatch = themeContent.match(/export const COLORS = \{([\s\S]*?)\}/);
if (!colorMatch) {
  console.error('Could not find COLORS export in theme.js');
  process.exit(1);
}

// Parse colors
const colors = {};
const colorLines = colorMatch[1].split('\n');
colorLines.forEach(line => {
  const match = line.match(/(\w+):\s*"(#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3})"/);
  if (match) {
    const [, key, value] = match;
    colors[key] = value;
  }
});

// Generate CSS variables
let cssVariables = ':root {\n  /* Theme Colors as CSS Custom Properties */\n';
Object.entries(colors).forEach(([key, value]) => {
  const cssVar = `--color-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
  cssVariables += `  ${cssVar}: ${value.toLowerCase()};\n`;
});
cssVariables += '}\n';

// Generate utility classes
const utilityClasses = `
/* Utility Classes for Grid Patterns */
.grid-pattern-dark {
  background-image:
    linear-gradient(to right, var(--color-dark-light) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-dark-light) 1px, transparent 1px);
  background-size: 4rem 4rem;
}

.grid-pattern-slate {
  background-image:
    linear-gradient(to right, var(--color-slate-600) 1px, transparent 1px),
    linear-gradient(to bottom, var(--color-slate-600) 1px, transparent 1px);
  background-size: 2rem 2rem;
}

.mask-radial-top {
  mask-image: radial-gradient(
    ellipse 60% 50% at 50% 0%,
    black 70%,
    transparent 100%
  );
}

.mask-radial-bottom {
  mask-image: radial-gradient(
    ellipse 60% 50% at 50% 100%,
    black 60%,
    transparent 100%
  );
}
`;

// Write globals.css
const globalsPath = path.join(__dirname, '../src/globals.css');
const globalsCss = cssVariables + utilityClasses;
fs.writeFileSync(globalsPath, globalsCss, 'utf-8');

console.log('✅ globals.css generated from theme.js');
