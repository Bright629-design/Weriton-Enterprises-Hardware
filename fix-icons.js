const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            results = results.concat(walk(filePath));
        } else if (filePath.endsWith('.tsx')) {
            results.push(filePath);
        }
    });
    return results;
}

// Convert kebab-case to PascalCase (e.g. chevron-down -> ChevronDown)
function toPascalCase(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

const files = walk(path.join(__dirname, 'src', 'app')).concat(walk(path.join(__dirname, 'src', 'components')));

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    let iconsToImport = new Set();

    // Regex to match <i data-lucide="icon-name" ...></i> or <i data-lucide="icon-name" ... />
    const iconRegex = /<i\s+data-lucide="([^"]+)"([^>]*)>(.*?)(?:<\/i>)?/g;
    
    // Some TSX files might have self closing <i> without closing tags, match robustly
    // Actually the robust way: replace data-lucide="xyz" with proper Lucide react component
    if (content.includes('data-lucide=')) {
        content = content.replace(/<i\s+data-lucide="([^"]+)"([^>]*)>(?:<\/i>)?/g, (match, iconName, attributes) => {
            const componentName = toPascalCase(iconName);
            iconsToImport.add(componentName);
            // Reconstruct the tag replacing 'i' with the component and preserving other attributes like className
            // Remove lingering class/className standard attributes if needed? No, standard attributes can just pass down
            return `<${componentName} ${attributes} />`;
        });
        modified = true;
    }

    if (modified && iconsToImport.size > 0) {
        // Add imports at the top
        const imports = `import { ${Array.from(iconsToImport).join(', ')} } from 'lucide-react';\n`;
        // Insert after "use client" if it exists, otherwise at the top
        if (content.includes('"use client";')) {
            content = content.replace(/"use client";\s*/, `"use client";\n${imports}`);
        } else {
            content = imports + content;
        }
        fs.writeFileSync(file, content);
        console.log(`Fixed icons in ${file}: added ${Array.from(iconsToImport).join(', ')}`);
    }
});
