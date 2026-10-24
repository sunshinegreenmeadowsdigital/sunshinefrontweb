const fs = require('fs');
const path = require('path');

const publicDir = path.resolve('public');
const srcDir = path.resolve('src');
let missing = 0;
let checked = 0;

function walk(dir) {
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      walk(full);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const regex = /['"](\/assets\/[^'"]+)['"]/g;
      let m;
      while ((m = regex.exec(content)) !== null) {
        checked++;
        const rel = m[1].replace(/^\//, '');
        const assetPath = path.resolve(publicDir, rel);
        if (!fs.existsSync(assetPath)) {
          console.log(`[MISSING] in ${path.relative(srcDir, full)}: ${rel}`);
          missing++;
        }
      }
    }
  });
}

walk(srcDir);
console.log(`Scanned all source files. Found ${checked} asset references. Total missing: ${missing}`);
