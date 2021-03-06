import typescript from "@rollup/plugin-typescript";
import generatePackageJson from "rollup-plugin-generate-package-json";
import { terser } from "rollup-plugin-terser";
// rollup.config.js
export default {
  input: "src/index.ts",
  output: [
    {
      dir: "dist/es",
      name: "nricvalidator",
      format: "es",
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    typescript({
      target: "ES5",
      declaration: true,
      outDir: "dist/es",
      rootDir: "src",
    }),
    generatePackageJson({
      outputFolder: "dist/es",
      baseContents: (pkg) => {
        pkg.main = "es/index.js";
        pkg.scripts = undefined;
        return pkg;
      },
    }),
  ],
};
