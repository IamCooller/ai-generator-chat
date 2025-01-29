import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
	weight: ["400", "500", "700"],
	subsets: ["latin"],
	variable: "--font-inter",
});
export const testSohne = localFont({
	src: [
		{
			path: "./TestSohne-Buch-BF663d89cd32e6a.otf",
			weight: "400",
			style: "normal",
		},

		{
			path: "./TestSohne-BuchKursiv-BF663d89cd3e887.otf",
			weight: "400",
			style: "italic",
		},

		{
			path: "./TestSohne-Kraftig-BF663d89cd37e26.otf",
			weight: "500",
			style: "normal",
		},

		{ path: "./TestSohne-Leicht-BF663d89cd4952e.otf", weight: "300", style: "normal" },
		{
			path: "./TestSohne-Dreiviertelfett-BF663d89ccc5f66.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "./TestSohne-BuchKursiv-BF663d89cd3e887.otf",
			weight: "400",
			style: "italic",
		},
	],
	variable: "--font-testsohne",
});
