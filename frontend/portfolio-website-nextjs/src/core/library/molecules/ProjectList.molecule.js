import { useId } from "react";
import { base, listItem } from "@/styles/molecules/projectList.module.scss";

import ProductCard from "@/core/molecules/ProjectCard.molecule";

const projectList = [
    {
        title: "Jerry Thomas",
        subtitle: "Tribute Website",
        tags: [
            "RWD",
            "a11y",
            "SEO",
            "JavaScript",
            "Sass",
            "Gulp",
            "WebPack",
            "JAMStack",
            "11ty",
            "GitHub Actions",
        ],
        description:
            "A website that pays tribute to Jerry Thomas,  American bartender and author, considered to be the 'father of American mixology.'",
    },
    {
        title: "ITaaS Agency",
        subtitle: "Landing Page",
        tags: [
            "RWD",
            "a11y",
            "SEO",
            "JavaScript",
            "Sass",
            "Gulp",
            "WebPack",
            "JAMStack",
            "Next.js",
            "GitHub Actions",
            "AWS",
        ],
        description:
            "Landing page for a business that offers IT-as-a-Service services.",
    },
    {
        title: "Boston Film Festival",
        subtitle: "Promo Website",
        tags: [
            "RWD",
            "a11y",
            "SEO",
            "JavaScript",
            "Sass",
            "Gulp",
            "WebPack",
            "JAMStack",
            "Next.js",
            "GitHub Actions",
            "Bootstrap",
        ],
    },
    {
        title: "Architecture Portfolio",
        subtitle: "Galler Website",
        tags: [
            "RWD",
            "a11y",
            "SEO",
            "JavaScript",
            "Sass",
            "Gulp",
            "WebPack",
            "JAMStack",
            "Next.js",
            "Ghost CMS",
            "GitHub Actions",
        ],
    },
    {
        title: "Real Estate",
        subtitle: "Real Estate Agency Website",
        tags: [
            "RWD",
            "a11y",
            "SEO",
            "JavaScript",
            "Sass",
            "Gulp",
            "WebPack",
            "Ghost CMS",
            "GitHub Actions",
        ],
    },
    {
        title: "Hitchhiking Tours Website",
        subtitle: "Landing Page",
        tags: [
            "RWD",
            "a11y",
            "SEO",
            "JavaScript",
            "Sass",
            "Gulp",
            "WebPack",
            "JAMStack",
            "Next.js",
            "GitHub Actions",
        ],
    },
    {
        title: "Turn Based Board Game",
        subtitle: "Browser Based Board Game",
        tags: ["JavaScript", "jQuery", "Gulp", "WebPack"],
    },
    {
        title: "FrontEnd Component Collection",
        subtitle: "Front End Style Guide",
        tags: ["RWD", "JavaScript", "Sass", "Gulp", "WebPack"],
    },
    {
        title: "Productivity Website",
        tags: ["React.js", "Next.js", "Sass", "Gulp", "WebPack"],
        subtitle: "Web Portal",
        description:
            "Web portal that includes random quote generator to inspire users, a markdown previewer to make it easy to format text, and a JavaScript calculator to perform quick calculations while working on a task",
    },
    {
        title: "Study Website",
        tags: ["React.js", "Next.js", "Sass", "Gulp", "WebPack"],
        subtitle: "Web Portal",
        description:
            "Web portal that includes a random quote generator to inspire students, a markdown previewer to help format study notes, and a JavaScript calculator to help with math and science homework",
    },
    {
        title: "Financial Planner",
        tags: ["React.js", "Next.js", "Sass", "Gulp", "WebPack"],
        subtitle: "Web Portal",
        description:
            "Web portal that includes a JavaScript calculator for budgeting, investment and retirement planning, and a markdown previewer for creating financial reports",
    },
    {
        title: "Math School Website",
        tags: ["React.js", "Next.js", "Sass", "Gulp", "WebPack"],
        subtitle: "Web Portal",
        description:
            "Web portal for for a math school that includes a JavaScript calculator for basic and advanced math operations, a markdown previewer for creating math lessons, and a random quote generator for inspiration.",
    },
    { title: "Restaurant Review SPA" },
    { title: "IMDB Clone" },
    {
        title: "BI Website",
        tags: [
            "JavaScript",
            "Data Visualization",
            "D3",
            "Algorithms",
            "Sass",
            "Gulp",
            "WebPack",
        ],
        description:
            "A business intelligence website that allows users to create and view data visualizations, including bar charts, scatterplot graphs, heat maps, choropleth maps, and treemap diagrams. This would allow companies to easily analyze and understand their data, and make data-driven decisions",
    },
];

export default function ProjectList({ list }) {
    const ID = useId();

    return (
        <ul id={ID} className={base}>
            {projectList.map((project, index) => {
                return (
                    <li className={listItem}>
                        <ProductCard
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            tags={project.tags}
                        />
                    </li>
                );
            })}
            {/* <li className={listItem}>
                <ProductCard
                    title="Email Template Collection"
                    subtitle="Style Guide"
                />
            </li> */}
        </ul>
    );
}
