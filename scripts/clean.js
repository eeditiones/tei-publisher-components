#!/usr/bin/env node
// Native Node.js replacement for rimraf in clean script
const fs = require('fs');
const path = require('path');

const dirsToRemove = ['dist', 'css', 'images/leaflet', 'demo/build', 'docs'];

dirsToRemove.forEach(dir => {
  const fullPath = path.resolve(dir);
  try {
    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`Removed: ${dir}`);
    }
  } catch (error) {
    console.error(`Error removing ${dir}:`, error.message);
  }
});
