import { useId } from "react";
import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";
import styles, {
	base,
	header,
	container,
	wrapper,
} from "@/styles/organisms/heroBanner.module.scss";

import SocialMediaList from "../molecules/SocialMediaList.molecule";
import TagList from "@/core/molecules/TagList.molecule";

export default function HeroBanner({
	pageTitle,
	subheading,
	socialMediaLinks = [],
	date,
	author,
	tags,
}) {
	const ID = useId();

	const hasSocialMediaLinks = socialMediaLinks.length > 0;
	const hasTags = tags && tags.length > 0;
	const hasContent = hasSocialMediaLinks || date || hasTags;

	return (
		<section id={ID} className={base}>
			{pageTitle && (
				<>
					<header className={header}>
						<div className={wrapper}>
							<Heading
								level="1"
								mainText={pageTitle}
								subheadingText={subheading}
							/>
						</div>
					</header>
					{hasContent && (
						<div className={container}>
							<div className={wrapper}>
								{hasSocialMediaLinks && (
									<SocialMediaList items={socialMediaLinks} />
								)}

								{date || author ? (
									<Paragraph
										text={`By ${author} ${date ? `on ${date}` : ""}`}
									/>
								) : (
									""
								)}
								{hasTags && <TagList tags={tags} />}
							</div>
						</div>
					)}
				</>
			)}
		</section>
	);
}
