#!/usr/bin/env node
// Native Node.js replacement for rimraf -g in clean-lib script
const fs = require('fs');
const path = require('path');

const libDir = path.resolve('lib');
if (!fs.existsSync(libDir)) {
  process.exit(0);
}

const patterns = [
  /^leaflet/,
  /^paged/,
  /^web-midi-player\.js$/,
  /^airtable\.browser\.js$/,
  /^openseadragon/
];

try {
  const files = fs.readdirSync(libDir);
  files.forEach(file => {
    const shouldRemove = patterns.some(pattern => pattern.test(file));
    if (shouldRemove) {
      const filePath = path.join(libDir, file);
      try {
        fs.rmSync(filePath, { recursive: true, force: true });
        console.log(`Removed: lib/${file}`);
      } catch (error) {
        console.error(`Error removing lib/${file}:`, error.message);
      }
    }
  });
} catch (error) {
  console.error('Error reading lib directory:', error.message);
  process.exit(1);
}
