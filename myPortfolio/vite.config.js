import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import ts from 'rollup-plugin-typescript2';


export default defineConfig({
	plugins: [sveltekit(),
	ts({ tsconfig: './.svelte-kit/tsconfig.json' }),]
});
