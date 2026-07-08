// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
//
// The wrapper injects its own Nitro plugin internally — pass Nitro options through the
// top-level `nitro` key below, do NOT also add `nitro()` to vite.plugins (causes duplicate
// build passes and a "Expected entry chunk with name index" error).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// nitro/vite builds from this.
export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});