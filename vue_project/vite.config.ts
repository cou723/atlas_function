import { templateCompilerOptions } from "@tresjs/core";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import biome from "vite-plugin-biome";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue({ ...templateCompilerOptions }), biome(), tsconfigPaths()],
});
