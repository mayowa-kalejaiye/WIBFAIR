const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

const desktopNavAddition = `
          <Link href="/blog" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">Blog</Link>
          <Link href="/events" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">Events</Link>
          <Link href="/counseling" className="text-base font-medium text-gray-600 hover:text-gray-900 transition-colors duration-300">Counseling</Link>
`;

const mobileNavAddition = `
          <Link href="/blog" className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100" onClick={toggleMobileMenu}>Blog</Link>
          <Link href="/events" className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100" onClick={toggleMobileMenu}>Events</Link>
          <Link href="/counseling" className="px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-100" onClick={toggleMobileMenu}>Counseling</Link>
`;

content = content.replace(/(<a href="#contact"[^>]*>\s*Contact\s*<\/a>)/i, '$1' + desktopNavAddition);
content = content.replace(/(<a href="#contact"[^>]*onClick=\{toggleMobileMenu\}[^>]*>\s*Contact\s*<\/a>)/i, '$1' + mobileNavAddition);

// Update Shop links
content = content.replace(/href="https:\/\/selar\.com\/m\/BunmiAlabi"/g, 'href="/store"');

fs.writeFileSync('app/page.tsx', content);
console.log('Navigation links injected.');
