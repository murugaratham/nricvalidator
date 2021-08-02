import typescript from "@rollup/plugin-typescript";

// rollup.config.js
export default {
  input: "src/index.ts",
  output: {
    file: "dist/js/nricvalidator.js",
    name: "nricvalidator",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    typescript({
      target: "ES5",
      declaration: true,
      outDir: "dist/js",
      rootDir: "src",
    }),
  ],
};
