import { useId } from "react";

import Header from "@/core/library/organisms/Header.organism";
import Footer from "@/core/library/organisms/Footer.organism";

import Main from "@/core/organisms/Main.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import Section from "@/core/library/organisms/Section.organism";
import CaseStudyOverview from "@/core/organisms/CaseStudyOverview.organism";
import MarkdownContainer from "@/core/molecules/MarkdownContent.molecule";

import {
	base,
	contentContainer,
} from "@/styles/templates/blogPost.module.scss";

export default function BlogPostTemplate({
	children,
	pageContent,
	siteProps,
	frontmatter,
	caseStudy,
}) {
	const ID = useId();

	const socialMediaLinks = [];
	if (frontmatter && frontmatter.repo_url) {
		socialMediaLinks.push({
			label: "GitHub Repository",
			icon: "github",
			href: frontmatter.repo_url,
		});
	}
	if (frontmatter && frontmatter.demo_url) {
		socialMediaLinks.push({
			label: "Live Demo",
			icon: "globe",
			href: frontmatter.demo_url,
		});
	}

	return (
		<div id={ID} className={base}>
			<Header siteNavLinks={siteProps.siteNavLinks} />

			<Main>
				<HeroBanner
					pageTitle={frontmatter.title}
					subheading={frontmatter.subheading}
					socialMediaLinks={socialMediaLinks}
					date={frontmatter.date}
					author={frontmatter.author}
					tags={frontmatter.tags}
				/>
				<Section sectionId={pageContent.slug}>
					<MarkdownContainer markdownContent={pageContent.content} />
				</Section>
				{caseStudy && (
					<Section
						sectionId="casestudy_section"
						headingTitle="Case Study"
						subheadingText="Research, analysis, and problem-solving cases used to tackle
                complex challenges and provide solutions encountered developing the project
                project."
					>
						<CaseStudyOverview list={caseStudy} />
					</Section>
				)}
			</Main>
			<Footer socialMediaLinks={siteProps.socialMediaLinks} />
		</div>
	);
}
