import { defineConfig } from "vite-plus";

export default defineConfig({
  pack: {
    entry: ["src/index.ts"],
    format: ["cjs", "esm"],
    fixedExtension: false,
    dts: true,
    clean: true,
    sourcemap: true,
    treeshake: true,
    minify: false,
  },
  lint: { options: { typeAware: true, typeCheck: true } },
});
