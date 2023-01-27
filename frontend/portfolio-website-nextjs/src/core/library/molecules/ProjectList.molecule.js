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
        title: "Natours - Nature Tours Website",
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
