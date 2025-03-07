import { defineConfig } from "tsup";

export default defineConfig([
  // CJS output
  {
    entry: {
      index: "src/index.ts",
      node: "src/node.ts",
      browser: "src/browser.ts",
    },
    format: ["cjs"],
    outDir: "dist/cjs",
    dts: false,
    sourcemap: true,
    clean: false,
    treeshake: true,
    skipNodeModulesBundle: true,
    splitting: false, // Keep this false as you had it before
  },
  // ESM output
  {
    entry: {
      index: "src/index.ts",
      node: "src/node.ts",
      browser: "src/browser.ts",
    },
    format: ["esm"],
    outDir: "dist/esm",
    dts: false,
    sourcemap: true,
    clean: false,
    treeshake: true,
    skipNodeModulesBundle: true,
    splitting: false,
  },
  // Types output
  {
    entry: {
      index: "src/index.ts",
      node: "src/node.ts",
      browser: "src/browser.ts",
    },
    format: ["cjs"],
    outDir: "dist/types",
    dts: {
      only: true,
    },
    sourcemap: false,
    clean: false,
    // Note: treeshake, skipNodeModulesBundle, and splitting don't apply to type declarations
  },
]);
