import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'strawberry-moon': '#ff73a6',
				'citrouille': '#ff8e24',
				'sparky-yellow': '#ffd737',
				'canvas-grey': '#e8e6de',
				'boba-black': '#0f0f0e',
				'touched-grass': '#3bc460',
				'touch-grass': '#1a923a',
				'rams-orange': '#ff4500',
				'lilac-grey': '#e1dfe6',
				'sky-pop': '#66cffd',
				'surge-blue': '#2147d8',
				'ember': '#fe4c01'
			}
		}
	},

	plugins: []
} satisfies Config;
