import { ActiveLinkPagination } from "./ActiveLinkPagination";

export const Pagination = ({ numberOfPages }: { numberOfPages: number }) => {
	return (
		<nav>
			<ul aria-label="pagination" className=" flex items-center justify-center gap-8">
				{Array.from({ length: numberOfPages }).map((_, i) => (
					<ActiveLinkPagination key={i} href={`${i + 1}`}>
						{i + 1}
					</ActiveLinkPagination>
				))}
			</ul>
		</nav>
	);
};
