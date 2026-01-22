const fs = require('fs');
const path = require('path');

const pkg = fs.readFileSync('package.json', 'utf-8');
const json = JSON.parse(pkg);

const versionTag = `@${json.version}`;
const dir = path.join('docs', versionTag);
const latest = path.resolve(path.join('docs', '@latest'));
const dist = path.join(dir, 'dist');
fs.mkdirSync(dist, { recursive: true });

console.log('[gh-pages] Copying files to %s', dir);

// Native Node.js replacement for recursive-copy using fs.cpSync (Node 16.7+)
const dirsToCopy = ['dist', 'i18n', 'images', 'lib', 'css', 'src'];
dirsToCopy.forEach(src => {
  const dest = path.join(dir, src);
  try {
    if (fs.existsSync(src)) {
      fs.cpSync(src, dest, { recursive: true });
      console.log(`Copied: ${src} -> ${dest}`);
    } else {
      console.warn(`Source not found: ${src}`);
    }
  } catch (error) {
    console.error(`Error copying ${src}:`, error.message);
    process.exit(1);
  }
});

// Only link stable versions as latest, not pre-release versions (e.g., v.*-next.*)
const isStableVersion = !json.version.includes('-next');
if (isStableVersion) {
  try {
    fs.unlinkSync(latest);
  } catch (e) {
    /* */
  }
  fs.symlinkSync(path.resolve(dir), latest, 'dir');
}

const redirect = fs.readFileSync(path.join('demo', 'redirect.js'), 'utf-8');
fs.writeFileSync(path.join('docs', 'redirect.js'), redirect, { encoding: 'utf-8' });

const index = fs.readFileSync(path.join('demo', 'redirect.html'), 'utf-8');
const updated = index.toString().replace(/\$version/, versionTag);
fs.writeFileSync(path.join('docs', 'index.html'), updated, { encoding: 'utf-8' });
fs.writeFileSync(path.join('docs', 'api.html'), updated, { encoding: 'utf-8' });
