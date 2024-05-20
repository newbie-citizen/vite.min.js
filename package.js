import {fileURLToPath, URL} from "node:url";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default {
	js: vue,
	define: function (plugin, build, option) {
		return defineConfig ({
			plugins: plugin,
			build,
			... option,
			});
		},
	url: URL,
	path: fileURLToPath,
	}
