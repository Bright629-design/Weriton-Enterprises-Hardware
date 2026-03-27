const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(filePath));
        } else {
            if (filePath.endsWith('.tsx')) {
                results.push(filePath);
            }
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src', 'app'));
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    // Fix internal links ending with .html
    const htmlLinkRegex = /href="([^"]+)\.html(#.*?)?"/g;
    if (htmlLinkRegex.test(content)) {
        content = content.replace(htmlLinkRegex, (match, p1, p2) => {
            if (p1 === 'index') p1 = '';
            // if product.html?id=... we should handle it (wait product.html is not an app router)
            if (p1.startsWith('http') || p1.startsWith('mailto') || p1.startsWith('tel')) return match;
            return `href="/${p1}${p2 || ''}"`.replace('//', '/'); // Ensure avoiding double slashes
        });
        modified = true;
    }

    // Convert <a ...> to <Link ...>
    if (content.includes('<a ') || content.includes('</a>')) {
        content = content.replace(/<a (\s*[^>]*?)>/g, '<Link $1>');
        content = content.replace(/<\/a>/g, '</Link>');
        modified = true;
    }
    
    // Convert <i> to <span className="lucide..."> to avoid hydration errors or react warnings maybe?
    // Actually wait, 'i' tags are perfectly fine in React. 
    
    // If it uses <Link> but doesn't have an import, add it
    if (content.includes('<Link ') && !content.includes("import Link from 'next/link")) {
        content = content.replace(/"use client";\s*/g, '"use client";\nimport Link from \'next/link\';\n');
        // if no use client
        if (!content.includes('"use client"')) {
            content = "import Link from 'next/link';\n" + content;
        }
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(file, content);
        console.log('Fixed links in', file);
    }
});
