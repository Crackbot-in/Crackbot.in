// One-off: render the share image and iOS home-screen icon to PNG.
// Run manually after editing the SVGs:  node scripts/make-images.mjs
// Uses sharp, which is already installed as part of Astro; it is not a site dependency.
import sharp from 'sharp';
await sharp('scripts/og.svg').png({ compressionLevel: 9 }).toFile('public/og.png');
await sharp('scripts/touch-icon.svg').png({ compressionLevel: 9 }).toFile('public/apple-touch-icon.png');
console.log('wrote public/og.png and public/apple-touch-icon.png');
