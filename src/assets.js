// Automatically discover and load all image and video assets from src/assets
const imageModules = import.meta.glob('./assets/*.{jpeg,jpg,png,webp,svg}', { eager: true, import: 'default' });
const videoModules = import.meta.glob('./assets/*.mp4', { eager: true, import: 'default' });

// Sort all image files alphabetically so their sequence matches the catalog order
export const allImages = Object.entries(imageModules)
  .filter(([path]) => !path.includes('react.svg'))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([_, src]) => src);

export const allVideos = Object.entries(videoModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([_, src]) => src);

// Export named convenience mappings corresponding to the mock design order
export const bestSellingAssets = [
  allImages[0], // Product 1: Happy Diamonds Horse
  allImages[1], // Product 2: Happy Diamonds Fish (Rose Gold)
  allImages[2], // Product 3: Happy Diamonds Fish (White Gold)
  allImages[3], // Product 4: Happy Gold Ring / Rope Bracelet
];

export const collectionAssets = [
  allImages[4], // Category 1: Watches
  allImages[5], // Category 2: Jewelry / Rings
  allImages[6], // Category 3: Accessories / Perfume
  allImages[7], // Category 4: Luxury Dress
];

export const craftsmanshipAsset = allImages[8]; // Timeless Craftsmanship stone display
export const sustainabilityAsset = allImages[9]; // Sustainability banner woman with earring
export const faqsAsset = allImages[10];           // FAQs antique silver jewelry casket
export const heroVideo = allVideos[0];           // Video asset for Hero
