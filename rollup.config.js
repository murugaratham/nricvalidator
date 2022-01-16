import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
// rollup.config.js
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/js/nricvalidator.js",
      name: "nricvalidator",
      format: "iife",
      sourcemap: true,
    },
    {
      file: "dist/js/nricvalidator.min.js",
      name: "nricvalidator",
      format: "iife",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      target: "ES5",
      declaration: true,
      outDir: "dist/js",
      rootDir: "src",
    }),
  ],
};
