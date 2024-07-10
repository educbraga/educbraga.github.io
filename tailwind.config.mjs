/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				'xs': '475px',
			},
		},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
          
					"primary": "#14532d",
          
					"secondary": "#fbbf24",
          
					"accent": "#edd000",
          
					"neutral": "#343300",
          
					"base-100": "#f4f4f5",
          
					"info": "#b1d9e9",
          
					"success": "#b9dbc6",
          
					"warning": "#d7d3b0",
          
					"error": "#efc6c2",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
