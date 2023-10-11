"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type ActiveLinkPaginationProps = {
	href: string;
	children: React.ReactNode;
};

export const ActiveLinkPagination = ({ href, ...props }: ActiveLinkPaginationProps) => {
	const pathname = usePathname();

	const isActive = pathname.endsWith(href.toString()) || false;
	return (
		<Link
			{...props}
			href={href}
			className={
				isActive ? "border-2 border-slate-900 px-4 py-2 text-lg font-semibold" : "px-4 py-2 text-lg"
			}
			aria-current={isActive ? isActive : undefined}
			role={"link"}
		/>
	);
};
