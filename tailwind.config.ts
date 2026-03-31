import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['PPMori', 'sans-serif']
			},
			cursor: {
				site: `url('/cursors/cursor.svg') 1 2, auto`,
				pointer: `url('/cursors/select_cursor.svg') 4 5, pointer`,
				text: `url('/cursors/text_highlight_cursor.svg') 16 1, text`
			},
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
