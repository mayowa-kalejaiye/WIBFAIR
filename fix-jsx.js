const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Extract style blocks
let styles = '';
content = content.replace(/<style[^>]*>([\s\S]*?)<\/style>/g, (match, p1) => {
    styles += p1 + '\n';
    return '';
});

// Append styles to globals.css
fs.appendFileSync('app/globals.css', '\n/* Extracted from legacy index.html */\n' + styles);

// Remove any remaining body/html tags that sneaked in
content = content.replace(/<\/?body[^>]*>/gi, '');
content = content.replace(/<\/?html[^>]*>/gi, '');
content = content.replace(/<\/?head[^>]*>/gi, '');

fs.writeFileSync('app/page.tsx', content);
console.log('Fixed styles and body tags');
