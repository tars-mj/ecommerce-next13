import { type UrlObject } from "url";
import Link from "next/link";
// import { SearchField } from "./SearchField";
import { ActiveLink } from "./ActiveLink";
import { getCategories } from "@/api/categories";

export const Navbar = async () => {
	const categories = await getCategories();

	return (
		<nav className="mx-auto flex max-w-5xl items-center justify-between gap-2 py-6">
			<ul className="flex items-center gap-8" role="navigation">
				<Link href={"/"}>
					<span className=" p-2 text-3xl font-semibold text-black">Kick</span>
					<span className="bg-black p-2 text-3xl font-semibold text-white">Pulse</span>
				</Link>
				<ActiveLink
					href={"/products"}
					className="border-b-2 border-b-transparent text-lg"
					activeClassName="border-b-2 border-slate-900 text-lg font-semibold"
					exact={false}
				>
					All
				</ActiveLink>
				{categories.map((category) => (
					<ActiveLink
						key={category.id}
						href={`/categories/${category.name}` as unknown as UrlObject}
						className="border-b-2 border-b-transparent text-lg"
						activeClassName="border-b-2 border-slate-900 text-lg font-semibold"
						exact={false}
					>
						{category.name}
					</ActiveLink>
				))}
			</ul>
			{/* <SearchField /> */}
			<div>x</div>
		</nav>
	);
};
