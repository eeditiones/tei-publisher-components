const fs = require('fs');
const path = require('path');
var copy = require('recursive-copy');

const pkg = fs.readFileSync('package.json', 'utf-8');
const json = JSON.parse(pkg);

if (!fs.existsSync('docs')) {
    fs.mkdirSync('docs');
}
copy('dist', path.join('docs', json.version));

const index = fs.readFileSync(path.join('demo', 'redirect.html'), 'utf-8');
const updated = index.toString().replace(/\$version/, json.version);
fs.writeFileSync(path.join('docs', 'index.html'), updated, { encoding: 'utf-8' });