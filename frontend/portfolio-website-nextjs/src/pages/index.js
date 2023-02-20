import Head from "next/head";
import { useId, useEffect, useState } from "react";
import getContent from "@/core/utils/content/getContent";
import getSkillList from "@/core/utils/content/getSkillList";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/core/library/atoms/LoadingSpinner.atom";
const LandingTemplate = dynamic(() => import("@/core/templates/Landing.template"));

export default function LandingPage({ siteProps, pageContent }) {
	const ID = useId();
	return (
		<div id={ID}>
			<LoadingSpinner />
			<Head>
				<title>{siteProps.title}</title>
				<meta name="description" content={pageContent.pageDescription} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={siteProps.icons.favicon} />
			</Head>

			<LandingTemplate siteProps={siteProps} pageContent={pageContent}></LandingTemplate>
		</div>
	);
}

export async function getStaticProps() {
	const pinnedProjects = getContent().projects.filter((project) => {
		return project.frontmatter.pinned && project.frontmatter.status === "published";
	});

	return {
		props: {
			pageContent: {
				pageDescription:
					"JavaScript software engineer portfolio featuring top-notch web development projects. Discover innovative web apps and scalable enterprise solutions.",

				mainSkills: [
					{ name: "JavaScript", iconName: "javascript" },
					// { name: "React.js", iconName: "reactjs" },
					// { name: "Node.js", iconName: "nodejs" },
					// { name: "Docker", iconName: "docker" },
					// { name: "AWS", iconName: "aws" },
				],
				main: {
					heroBanner: {
						pageTitle: "Welcome!",
						subheading:
							"I'm Paul, a highly skilled JavaScript Software Engineer proficient in Front-end development with a passion for building dynamic and user-friendly web applications.",
					},
					section_1: {
						title: "About Me",
						section_id: "about_me",
						children: {
							textArticle: {
								colWidth: 8,
								paragraphs: [
									"I am a driven and accomplished web developer with a passion for creating intuitive and innovative web applications. My expertise includes an in-depth understanding of front-end technologies, JavaScript, and JAMStack development, as well as proficiency in React and other cutting-edge technologies.",
									"Throughout my career, I have had the opportunity to work on a diverse range of projects, from small business websites to large-scale e-commerce platforms. I take pride in my ability to collaborate effectively with teams, understand the unique needs of clients, and deliver  high-quality solutions that are delivered on time and within budget.",
									"Continuous learning and growth is a core aspect of my professional journey. When I'm not coding, you can find me staying up to date with the latest technologies,experimenting with new frameworks and libraries, or designing new systems. I am always eager to learn and grow as a developer, and I am excited to continue building my  skills and expanding my portfolio.",
								],
							},
						},
					},
					section_2: {
						title: "My Projects",
						section_id: "my_projects",
						children: {
							projectsOverview: {
								projects: pinnedProjects,
								parentPage: "landing",
								category: {
									category_url: "projects",
									category_name: "projects",
								},
							},
						},
					},
					section_3: {
						title: "My Skills",
						section_id: "my_skills",
						children: {
							skillsOverview: { skills: getSkillList() },
						},
					},
					section_4: {
						title: "Contact Me",
						section_id: "contact_me",
						children: { contactSection: {} },
					},
				},
			},
		},
		revalidate: 60
	};
}
