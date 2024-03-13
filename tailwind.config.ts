import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	variants: {
		extends: {
			borderColor: ["active"],
		},
	},
	theme: {
		screens: {
			xs: "360px",
			sm: "480px", // A alteração começão a partir desse tamanho
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			primary: "#F57C00",
			secondary: "#FABD80",
			tertiary: "#442C2E",
			white: "#ffffff",
			offwhite: "#FFF3E0",
			gray: "#ECEFF1",
			yellow: "#FDD835",
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			bold: "700",
		},
		fontSize: {
			biggest: "30px",
			big: "24px",
			regular: "16px",
		},
	},
	plugins: [],
};
export default config;
