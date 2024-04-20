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
			primary: "#c1121f",
			secondary: "#FABD80",
			tertiary: "#442C2E",
			black: "#000",
			brown: "#A35709",
			white: "#ffffff",
			offwhite: "#FFF3E0",
			gray: "#ECEFF1",
			yellow: "#FDD835",
			red: "#f22",
		},
		fontWeight: {
			regular: "400",
			medium: "500",
			bold: "700",
		},
		fontSize: {
			biggest: "30px",
			big: "21px",
			regular: "17px",
			small: "15px",
			smaller: "13px",
		},
	},
	plugins: [],
};
export default config;
