// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

// Fully static site: no server runtime, no API routes, no client JS.
// Smallest possible attack surface — there is nothing on the server to exploit.
export default defineConfig({
  site: 'https://crackbot.in',
  output: 'static',
  // Keep whitespace as written so text next to links never loses its space.
  compressHTML: false,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // External stylesheets only, so the CSP can forbid inline styles.
    inlineStylesheets: 'never',
  },
  // Images in posts are copied as-is (no native image-processing binary in the build).
  image: { service: passthroughImageService() },
  devToolbar: { enabled: false },
  telemetry: false,
});
