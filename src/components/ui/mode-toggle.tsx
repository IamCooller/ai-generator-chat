"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import { Button } from "./button";
function ModeToggle() {
	const { setTheme, theme } = useTheme();

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	};

	const IconButton = ({ item, ariaLabel, src, alt, tabIndex }: { item: string; ariaLabel: string; src: string; alt: string; tabIndex: number }) => (
		<Button
			variant="icon"
			className={` relative z-[1] rounded-full aspect-square w-full flex-center transition-colors ease-in-out ${theme !== item ? "hover:bg-neutral-200" : ""}`}
			type="button"
			aria-label={ariaLabel}
			tabIndex={tabIndex}
			onClick={() => setTheme(item)}
		>
			<Image src={src} alt={alt} width={18} height={18} />
		</Button>
	);
	return (
		<div aria-pressed={theme === "dark"} className={`  rounded-full bg-[#F8F8F8] p-[5px]  hover:cursor-pointer dark:bg-zinc-700 block`}>
			<div className={`relative flex-start flex flex-col gap-1`}>
				<IconButton item="light" ariaLabel="sun" src="/icons/sun.svg" alt="sun" tabIndex={3} />
				<IconButton item="dark" ariaLabel="moon" src="/icons/moon.svg" alt="moon" tabIndex={4} />
				<AnimatePresence>
					<motion.div
						className="flex w-full aspect-square absolute  rounded-full bg-white"
						layout
						transition={spring}
						animate={{ y: theme === "dark" ? "calc(100% + 4px)" : "0%" }}
						initial={false}
					/>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default ModeToggle;
