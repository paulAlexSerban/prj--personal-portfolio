import { useId } from "react";
import ProjectList from "../molecules/ProjectList.molecule";

import {
	base,
	container,
	viewAllLink,
} from "@/styles/organisms/portfolioOverview.module.scss";
import { Link } from "@/core/atoms/typography/all";

/**
 * @name PortfolioOverview
 * @specs
 * - to be used on Portfolio Overview Page template and Portfolio Category Page template
 * - most important tags are available to filter
 * - on Portfolio Overview Page template it displays max 6 items and has slider behavior to view more items
 *  - first items are the pinned ones
 * - on Portfolio Category Page template it displays max 12 items and has infinite scroll behavior to view more items
 * @param {projectList} Array of projects
 * @returns {JSX.Element}
 */

export default function PortfolioOverview({
	content,
	showViewAllButton = true,
}) {
	const ID = useId();

	return (
		<>
			{content && (
				<article id={ID} className={base}>
					<div className={container}>
						<ProjectList list={content.projects} category={content.category} />
					</div>
					{content.category && showViewAllButton && (
						<Link
							className={viewAllLink}
							label={`View all ${content.category.category_name}`}
							href={`/portfolio/${content.category.category_url}`}
							isInternal={true}
						></Link>
					)}
				</article>
			)}
		</>
	);
}
