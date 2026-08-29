const fs = require('fs');

let html = fs.readFileSync('_legacy/index.html', 'utf8');

// Extract body inner HTML
const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
if (!bodyMatch) {
  console.error("Could not find body tag");
  process.exit(1);
}
let bodyHtml = bodyMatch[1];

// Extract script tag content before removing it
let scriptContent = '';
const scriptMatch = bodyHtml.match(/<script>([\s\S]*?)<\/script>/i);
if (scriptMatch) {
    scriptContent = scriptMatch[1];
}
// Remove all script tags
bodyHtml = bodyHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

// JSX replacements
bodyHtml = bodyHtml.replace(/class=/g, 'className=');
bodyHtml = bodyHtml.replace(/for=/g, 'htmlFor=');
bodyHtml = bodyHtml.replace(/onclick=/gi, 'onClick=');
bodyHtml = bodyHtml.replace(/onsubmit=/gi, 'onSubmit=');

// SVG attributes
bodyHtml = bodyHtml.replace(/stroke-linecap/g, 'strokeLinecap');
bodyHtml = bodyHtml.replace(/stroke-linejoin/g, 'strokeLinejoin');
bodyHtml = bodyHtml.replace(/stroke-width/g, 'strokeWidth');
bodyHtml = bodyHtml.replace(/fill-rule/g, 'fillRule');
bodyHtml = bodyHtml.replace(/clip-rule/g, 'clipRule');
bodyHtml = bodyHtml.replace(/viewbox/gi, 'viewBox');
bodyHtml = bodyHtml.replace(/preserveaspectratio/gi, 'preserveAspectRatio');

// Self closing tags (simple regex)
const voidElements = ['img', 'input', 'br', 'hr', 'meta', 'link', 'source'];
voidElements.forEach(tag => {
    const regex = new RegExp(`<${tag}\\b([^>]*?)(?<!\\/)>`, 'gi');
    bodyHtml = bodyHtml.replace(regex, `<${tag}$1 />`);
});

// Fix styles
bodyHtml = bodyHtml.replace(/style="([^"]*)"/g, (match, p1) => {
    const styleString = p1.trim();
    if(styleString === 'display: none;') return `style={{ display: 'none' }}`;
    return `style={{}} /* TODO: convert inline style: ${styleString} */`;
});

// Any remaining unescaped comments <!-- --> inside JSX need to be {/* */}
bodyHtml = bodyHtml.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

// Construct page.tsx
const pageContent = `
"use client";
import { useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  
  useEffect(() => {
    // Add legacy script logic here later if needed
  }, []);

  return (
    <main className="bg-white text-gray-900 text-base md:text-lg leading-relaxed">
      ${bodyHtml}
    </main>
  );
}
`;

fs.writeFileSync('app/page.tsx', pageContent);
console.log('Successfully converted index.html to page.tsx');
