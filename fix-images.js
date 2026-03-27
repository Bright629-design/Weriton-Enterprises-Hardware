const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src', 'app')).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let modified = false;
  
  // Also check for background-image: url('images/...') which was converted to style via TSX converter
  if (content.includes('src="images/')) {
    content = content.replace(/src="images\//g, 'src="/images/');
    modified = true;
  }
  if (content.includes("url('images/")) {
    content = content.replace(/url\('images\//g, "url('/images/");
    modified = true;
  }
  if (content.includes("url(images/")) {
    content = content.replace(/url\(images\//g, "url(/images/");
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(f, content);
    console.log('Fixed', f);
  }
});
