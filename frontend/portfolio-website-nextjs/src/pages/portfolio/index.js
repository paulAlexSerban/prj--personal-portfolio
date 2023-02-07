import Head from "next/head";
import { useId } from "react";
import PortfolioOverviewTemplate from "@/core/templates/PortfolioOverview.template.js";
import getContent from "@/core/utils/content/getContent";

export default function Portfolio({ siteProps, pageContent }) {
    const ID = useId();
    const pageTitle = ["Portfolio", "|", siteProps.title].join(" ");
    return (
        <div id={ID}>
            <Head>
                <title>{pageTitle}</title>
                <meta
                    name="description"
                    content={pageContent.pageDescription}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href={siteProps.icons.favicon} />
            </Head>
            <PortfolioOverviewTemplate
                siteProps={siteProps}
                pageContent={pageContent}
            ></PortfolioOverviewTemplate>
        </div>
    );
}

export async function getStaticProps({}) {
    const publishedProjects = getContent().projects.filter(
        (project) => project.frontmatter.status === "published"
    );

    const publishedCoursework = getContent().courseworks.filter(
        (courseworks) => courseworks.frontmatter.status === "published"
    );

    return {
        props: {
            pageContent: {
                pageDescription:
                    "A gallery of Web Development Projects and Coursework",
                socialMediaLinks: [
                    {
                        label: "Github",
                        icon: "github",
                        href: "https://github.com",
                    },
                    {
                        label: "CodePen",
                        icon: "codepen",
                        href: "https://codepen.io",
                    },
                    {
                        label: "HackerRank",
                        icon: "hackerrank",
                        href: "https://www.hackerrank.com",
                    },
                    {
                        label: "CodeWars",
                        icon: "codewars",
                        href: "https://codewars.com",
                    },
                    {
                        label: "HackTheBox",
                        icon: "hackthebox",
                        href: "https://hackthebox.com",
                    },
                    {
                        label: "TryHackMe",
                        icon: "tryhackme",
                        href: "https://tryhackme.com",
                    },
                ],
                main: {
                    heroBanner: {
                        pageTitle: "Explore My Expertise:",
                        subheading:
                            "A gallery of Web Development Projects and Coursework",
                    },
                    section_1: {
                        title: "Projects",
                        section_id: "projects",
                        subheading:
                            "In my free time, I pursue personal and hobby projects that allow me to showcase my skills and unleash my creativity. These projects not only bring me enjoyment, but also demonstrate my versatility, initiative, and dedication to continuously developing my abilities.",
                        children: {
                            portfolioOverview: {
                                projects: publishedProjects,
                                parentPage: "portfolio_overview",
                                category: {
                                    category_url: "projects",
                                    category_name: "projects",
                                },
                            },
                        },
                    },
                    section_3: {
                        title: "Coursework",
                        section_id: "coursework",
                        subheading:
                            "Academic or educational projects assigned as part of a course or program that demonstrate my ability to apply knowledge and techniques.",
                        children: {
                            portfolioOverview: {
                                projects: publishedCoursework,
                                parentPage: "portfolio_overview",
                                category: {
                                    category_url: "courseworks",
                                    category_name: "courseworks",
                                },
                            },
                        },
                    },
                },
            },
        },
    };
}
