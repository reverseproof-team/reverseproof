import adapter from '@sveltejs/adapter-cloudflare';
import preprocess from 'svelte-preprocess';
// import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			prependData: '@import "src/globals.scss";'
		}
	}),

	kit: {
		adapter: adapter(),
		csrf: {
			checkOrigin: true
		}
	},
	vitePlugin: {
		experimental: {
			inspector: true
		}
	}
};

export default config;
