const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const appDir = path.join(__dirname, 'src', 'app');

const filesToConvert = [
    { html: 'about.html', route: 'about' },
    { html: 'blog.html', route: 'blog' },
    { html: 'contact.html', route: 'contact' },
    { html: 'faq.html', route: 'faq' },
    { html: 'finishing-security.html', route: 'finishing-security' },
    { html: 'hardware.html', route: 'hardware' },
    { html: 'products.html', route: 'products' },
    { html: 'projects.html', route: 'projects' },
    { html: 'quote-request.html', route: 'quote-request' },
    { html: 'renovation.html', route: 'renovation' },
    { html: 'testimonials.html', route: 'testimonials' },
    { html: 'why-us.html', route: 'why-us' }
];

function convertHtmlToJsx(html) {
    let jsx = html;
    
    // Extract main tag
    const mainMatch = jsx.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (!mainMatch) return null;
    jsx = mainMatch[0];

    // Replace class= with className=
    jsx = jsx.replace(/class=/g, 'className=');
    // Replace for= with htmlFor=
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // Make self-closing tags
    const voidElements = ['img', 'input', 'br', 'hr', 'meta', 'link'];
    voidElements.forEach(tag => {
        const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!/)>`, 'gi');
        jsx = jsx.replace(regex, `<${tag}$1 />`);
    });

    // Replace HTML comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

    // Replace standard style attributes (simplistic implementation)
    // E.g. style="max-height: 0px;" => style={{maxHeight: '0px'}}
    // This assumes styles are simple strings.
    jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
        const styles = p1.split(';').filter(s => s.trim()).map(s => {
            let [key, val] = s.split(':');
            key = key.trim().replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            val = val ? val.trim() : '';
            return `${key}: '${val}'`;
        }).join(', ');
        return `style={{ ${styles} }}`;
    });

    return jsx;
}

// Rename design-renovation to renovation if it exists
const designRenoPath = path.join(appDir, 'design-renovation');
const renoPath = path.join(appDir, 'renovation');
if (fs.existsSync(designRenoPath)) {
    fs.renameSync(designRenoPath, renoPath);
} else if (!fs.existsSync(renoPath)) {
    fs.mkdirSync(renoPath);
}

for (const file of filesToConvert) {
    const htmlPath = path.join(publicDir, file.html);
    if (!fs.existsSync(htmlPath)) {
        console.warn(`File ${file.html} not found in public dir!`);
        continue;
    }

    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const jsxContent = convertHtmlToJsx(htmlContent);

    if (!jsxContent) {
        console.warn(`Could not extract <main> from ${file.html}`);
        continue;
    }

    const tsxCode = `"use client";\n\nimport React from 'react';\nimport Link from 'next/link';\n\nexport default function Page() {\n    return (\n        ${jsxContent}\n    );\n}\n`;

    const routeDir = path.join(appDir, file.route);
    if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
    }

    const pagePath = path.join(routeDir, 'page.tsx');
    fs.writeFileSync(pagePath, tsxCode, 'utf8');
    console.log(`Converted ${file.html} to ${file.route}/page.tsx`);
}
