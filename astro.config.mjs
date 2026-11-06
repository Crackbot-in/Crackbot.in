// @ts-check
import { defineConfig } from 'astro/config';

// Fully static site: no server runtime, no API routes, no client JS.
// Smallest possible attack surface — there is nothing on the server to exploit.
export default defineConfig({
  site: 'https://crackbot.in',
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    // External stylesheets only, so the CSP can forbid inline styles.
    inlineStylesheets: 'never',
  },
  devToolbar: { enabled: false },
  telemetry: false,
});
