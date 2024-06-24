import { defineConfig } from "vite";

import { viteStaticCopy } from "vite-plugin-static-copy";

import stylelint from "vite-plugin-stylelint";

export default defineConfig({
	plugins: [
		stylelint({
			fix: true,
			include: ["./src/assets/**/*.{css,scss}"],
		}),

		viteStaticCopy({
			targets: [
				{
					src: "src/assets/fonts/**/*.{ttf,otf,woff,woff2}",
					dest: "assets/fonts",
				},

				{
					src: "src/assets/img/**/*.{jpeg,jpg,png,webp,gif,avif}",
					dest: "assets/img",
				},

				{
					src: "src/assets/img/**/*.svg",
					dest: "assets/img/svg",
				},

				{
					src: "src/assets/vendors/**/*.{css,js}",
					dest: "assets/vendors",
				},

				{
					src: "src/assets/video/**/*.{mp4, avi, WebM}",
					dest: "assets/video",
				},
			],
		}),
	],
});
