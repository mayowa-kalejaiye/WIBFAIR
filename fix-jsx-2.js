const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

content = content.replace(/onClick="([^"]*)"/g, (match, p1) => {
    return `onClick={() => { ${p1} }}`;
});

content = content.replace(/\bautoplay\b/g, 'autoPlay');
content = content.replace(/\bplaysinline\b/g, 'playsInline');
content = content.replace(/\btabindex\b/g, 'tabIndex');

fs.writeFileSync('app/page.tsx', content);
console.log('Fixed JSX properties');
