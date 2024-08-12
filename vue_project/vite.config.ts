// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";
import { templateCompilerOptions } from "@tresjs/core";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import biome from "vite-plugin-biome";

export default defineConfig({
	plugins: [vue({ ...templateCompilerOptions }), biome()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
			"@common": path.resolve(__dirname, "../common"),
		},
	},
});
