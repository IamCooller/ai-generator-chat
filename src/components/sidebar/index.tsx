import React, { JSX } from "react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import Image from "next/image";
import ModeToggle from "../ui/mode-toggle";
import { ScrollArea } from "../ui/scroll-area";

// Интерфейс описания иконки
interface IconData {
	src: string;
	alt: string;
	size: number;
	containerClassName?: string;
	buttonClassName?: string;
	imageClassName?: string;
	disableHover?: boolean;
}

const Sidebar = () => {
	// Словарь иконок
	const icons: Record<string, IconData> = {
		planet: {
			src: "/icons/earth.svg",
			alt: "planet",
			size: 24,
		},

		chat: {
			src: "/icons/bubbles-sparkles.svg",
			alt: "chat",
			size: 20,
		},
		message: {
			src: "/icons/message.svg",
			alt: "message",
			size: 20,
		},
		favorites: {
			src: "/icons/star.svg",
			alt: "favorites",
			size: 20,
		},
		tag: {
			src: "/icons/tag.svg",
			alt: "tag",
			size: 20,
		},
		bold: {
			src: "/icons/bold.svg",
			alt: "bold",
			size: 20,
		},
		underline: {
			src: "/icons/underline.svg",
			alt: "underline",
			size: 20,
		},
		italic: {
			src: "/icons/italic.svg",
			alt: "italic",
			size: 20,
		},
		function: {
			src: "/icons/function.svg",
			alt: "function",
			size: 20,
		},
		code: {
			src: "/icons/code.svg",
			alt: "code",
			size: 20,
		},
		link: {
			src: "/icons/link.svg",
			alt: "link",
			size: 20,
		},
		translate: {
			src: "/icons/translate.svg",
			alt: "translate",
			size: 20,
		},
		audio: {
			src: "/icons/audio.svg",
			alt: "audio",
			size: 20,
		},
		smart: {
			src: "/icons/smart.svg",
			alt: "smart",
			size: 20,
		},
		delete: {
			src: "/icons/delete.svg",
			alt: "delete",
			size: 20,
			buttonClassName: "border border-[#B5B5B5]",
			containerClassName: "mt-[43px]",
		},
	};

	// Функция для отрисовки кнопки с иконкой
	const renderButton = (iconKey: string, tabIndex?: number): JSX.Element | null => {
		const icon = icons[iconKey];
		if (!icon) return null;

		const { src, alt, size, containerClassName, buttonClassName, imageClassName, disableHover } = icon;

		return (
			<div key={iconKey} className={`relative overflow-hidden p-px rounded-xl group flex items-center justify-center ${containerClassName ?? ""}`}>
				<Button
					variant="icon"
					size="icon"
					aria-label={iconKey}
					title={iconKey}
					tabIndex={tabIndex}
					className={`group-hover:bg-neutral-100 relative rounded-xl bg-white z-[1] ${buttonClassName ?? ""}`}
				>
					<Image src={src} width={size} height={size} alt={alt} className={imageClassName ?? ""} />
				</Button>
				{!disableHover && <div className="glow inset-0 w-full h-full z-[-1] absolute rotate-45 pointer-events-none opacity-0 group-hover:opacity-100" />}
			</div>
		);
	};

	return (
		<aside className="h-full w-fit">
			<ScrollArea className="h-full px-[18px]">
				{/* --- Группа 1 (первая), отступ сверху --- */}
				<div className="flex flex-col pt-[75px]">{renderButton("planet", 0)}</div>

				{/* --- Разделитель между группами --- */}
				<Separator className="my-3" />

				{/* --- Группа 2 --- */}
				<div className="flex flex-col gap-[19px]">
					<Button
						variant="icon"
						size="icon"
						aria-label={"person"}
						title={"person"}
						tabIndex={1}
						className={`group-hover:bg-neutral-100 relative bg-white z-[1] rounded-full overflow-hidden `}
					>
						<Image src={"/menu/person.png"} width={40} height={40} alt={"person"} />
					</Button>
					{/* Отдельный элемент (без массива) */}
					<ModeToggle />
				</div>

				{/* --- Разделитель между группами --- */}
				<Separator className="my-3" />

				{/* --- Группа 3 --- */}
				<div className="flex flex-col">
					{renderButton("chat", 2)}
					{renderButton("message", 3)}
					{renderButton("favorites", 4)}
					{renderButton("tag", 5)}
				</div>

				{/* --- Разделитель между группами --- */}
				<Separator className="my-3" />

				{/* --- Группа 4 --- */}
				<div className="flex flex-col">
					{renderButton("bold", 6)}
					{renderButton("underline", 7)}
					{renderButton("italic", 8)}
					{renderButton("function", 9)}
					{renderButton("code", 10)}
					{renderButton("link", 11)}
				</div>

				{/* --- Разделитель между группами --- */}
				<Separator className="my-3" />

				{/* --- Группа 5 --- */}
				<div className="flex flex-col">
					{renderButton("translate", 12)}
					{renderButton("audio", 13)}
				</div>

				{/* --- Разделитель между группами --- */}
				<Separator className="my-3" />

				{/* --- Группа 6 --- */}
				<div className="flex flex-col">{renderButton("smart", 14)}</div>

				{/* --- Группа 7 (последняя), отступ снизу --- */}
				<div className="flex flex-col pb-[42px]">{renderButton("delete", 15)}</div>
			</ScrollArea>
		</aside>
	);
};

export default Sidebar;
