import { Link } from "@/core/atoms/typography/all";

import {
	base,
	list,
	listItem,
	link,
} from "@/styles/molecules/pagination.module.scss";

export default function Pagination({ currentPage, numPages }) {
	const isFirstPage = currentPage === 1;
	const isLastPage = currentPage === numPages;
	const prevPage = `/blog/posts/page/${currentPage - 1}`;
	const nextPage = `/blog/posts/page/${currentPage + 1}`;

	if (numPages === 1) {
		return <></>;
	}

	return (
		<div className={base}>
			<ul className={list}>
				{!isFirstPage && (
					<li className={listItem}>
						<Link
							href={prevPage}
							label="Previous"
							className={link}
							isInternal={true}
						/>
					</li>
				)}

				{Array.from({ length: numPages }, (_, i) => (
					<li className={listItem} key={`page-${i}`}>
						<Link
							href={`/blog/posts/page/${i + 1}`}
							key={`page-${i}`}
							label={`${i + 1}`}
							className={link}
							isInternal={true}
						></Link>
					</li>
				))}

				{!isLastPage && (
					<li>
						<Link
							href={nextPage}
							label="Next"
							className={link}
							isInternal={true}
						></Link>
					</li>
				)}
			</ul>
		</div>
	);
}
