import type { Metadata } from "next";

import "@/styles/globals.scss";
import { ThemeProvider } from "./provider";
import { inter, testSohne } from "@/styles/fonts/fonts";
import { _siteUrl } from "@/lib/constants";

const title = "";
const description = "";
export const metadata: Metadata = {
	metadataBase: new URL(_siteUrl.startsWith("http") ? _siteUrl : `https://${_siteUrl}`),
	title: {
		template: `%s | ${title}`,
		default: title,
	},
	description: description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${testSohne.className} ${inter.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
