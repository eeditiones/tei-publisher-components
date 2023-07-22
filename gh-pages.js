const fs = require('fs');
const path = require('path');
const copy = require('recursive-copy');

const pkg = fs.readFileSync('package.json', 'utf-8');
const json = JSON.parse(pkg);

const versionTag = `@${json.version}`;
const dir = path.join('docs', versionTag);
const latest = path.resolve(path.join('docs', '@latest'));
const dist = path.join(dir, 'dist');
fs.mkdirSync(dist, { recursive: true});

console.log('[gh-pages] Copying files to %s', dir);
copy('dist', dist);
copy('i18n', path.join(dir, 'i18n'));
copy('images', path.join(dir, 'images'));
copy('lib', path.join(dir, 'lib'));
copy('css', path.join(dir, 'css'));
copy('src', path.join(dir, 'src'));

try {
    fs.unlinkSync(latest);
} catch(e) { /* */ }
fs.symlinkSync(path.resolve(dir), latest, 'dir');

const redirect = fs.readFileSync(path.join('demo', 'redirect.js'), 'utf-8');
fs.writeFileSync(path.join('docs', 'redirect.js'), redirect, { encoding: 'utf-8' });

const index = fs.readFileSync(path.join('demo', 'redirect.html'), 'utf-8');
const updated = index.toString().replace(/\$version/, versionTag);
fs.writeFileSync(path.join('docs', 'index.html'), updated, { encoding: 'utf-8' });
fs.writeFileSync(path.join('docs', 'api.html'), updated, { encoding: 'utf-8' });
