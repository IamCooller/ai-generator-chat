import AppSidebar from "@/components/sidebar";

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<main className="h-svh flex">
				<AppSidebar />
				{children}
			</main>
		</>
	);
}
