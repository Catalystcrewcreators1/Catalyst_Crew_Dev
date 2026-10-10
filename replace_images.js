const fs = require('fs');
const path = require('path');

const files = [
  'src/data/projects.ts',
  'src/data/events.ts',
  'src/data/blog.ts',
  'src/components/ui/BrandPromiseSection.tsx',
  'src/components/ui/CircularCarousel.tsx'
];

const avatars = [
  '"/Ashwin.png"',
  '"/Vansh.png"',
  '"/Aryan.jpg"',
  '"/Riddhima.jpg"',
  '"/Aviral.jpg"',
  '"/Manikant.jpg"'
];

const covers = [
  '"/poster1x1.png"',
  '"/hero_showcase.webp"',
  '"/catalyst-crew-logo.png"'
];

let avatarIndex = 0;
let coverIndex = 0;

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // replace all avatars first
  content = content.replace(/avatar:\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, () => {
    const replacement = `avatar: ${avatars[avatarIndex % avatars.length]}`;
    avatarIndex++;
    return replacement;
  });

  // replace projects images
  content = content.replace(/image:\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, () => {
    const replacement = `image: ${covers[coverIndex % covers.length]}`;
    coverIndex++;
    return replacement;
  });

  // BrandPromiseSection mapping
  content = content.replace(/"builders,":\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, `"builders,": "/Ashwin.png"`);
  content = content.replace(/"innovators,":\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, `"innovators,": "/Aryan.jpg"`);
  content = content.replace(/"creators":\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, `"creators": "/poster1x1.png"`);
  content = content.replace(/"high-agency,":\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, `"high-agency,": "/Vansh.png"`);
  content = content.replace(/"shipping":\s*"https:\/\/images\.unsplash\.com\/[^"]+"/g, `"shipping": "/hero_showcase.webp"`);

  // CircularCarousel unused function
  content = content.replace(/const photo = id => `https:\/\/images\.unsplash\.com\/\${id}\?w=900&q=80&auto=format&fit=max&sat=-100`;/g, '');

  fs.writeFileSync(fullPath, content);
  console.log(`Updated ${file}`);
});
