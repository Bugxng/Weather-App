import {defineConfig} from "vite";
import {dirname, resolve} from "node:path";
import {fileURLToPath} from "node:url";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				index: resolve(dirname(fileURLToPath(import.meta.url)), "index.html"),
				cities: resolve(
					dirname(fileURLToPath(import.meta.url)),
					"cities/index.html"
				),
				history: resolve(
					dirname(fileURLToPath(import.meta.url)),
					"history/index.html"
				),
				detail: resolve(
					dirname(fileURLToPath(import.meta.url)),
					"detail/index.html"
				),
			},
		},
	},
	plugins: [tsconfigPaths()],
});
