const fs = require('fs');
let content = fs.readFileSync('app/page.tsx', 'utf8');

const stubs = `
  const toggleMobileMenu = () => {};
  const toggleVolume = () => {};
  const loadMoreProjects = () => {};
  const clearFilters = () => {};
  const closeModal = () => {};
  const navigateProject = () => {};
`;

content = content.replace('export default function Home() {', 'export default function Home() {' + stubs);
content = content.replace(/tabIndex="([^"]*)"/g, 'tabIndex={0}');

fs.writeFileSync('app/page.tsx', content);
console.log('Fixed JSX stubs');
