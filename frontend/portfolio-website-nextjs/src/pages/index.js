import Head from "next/head";
import LandingTemplate from "@/core/templates/Landing/Landing.template.js";

import Section from "@/core/library/organisms/Section.organism";
import Main from "@/core/library/organisms/Main.organism";
import HeroBanner from "@/core/library/organisms/HeroBanner.organism";
import ProjectOverview from "@/core/library/organisms/ProjectOverview.organism";

import { Paragraph } from "@/core/library/atoms/typography/all";

const siteNavLinks = [
    { label: "portfolio", href: `/portfolio` },
    { label: "blog", href: `/blog` },
    { label: "cv", href: `/cv` },
];

const pageNavLinks = [
    { label: "about me", href: "#about_me" },
    { label: "projects", href: "#projects" },
    { label: "skills", href: "#skills" },
    { label: "achievements", href: "#achievements" },
    { label: "contact me", href: "#contact_me" },
];

const socialMediaList = [
    { label: "LinkedIn", icon: "linkedin", href: "https://linkedin.com" },
    { label: "Github", icon: "github", href: "https://github.com" },
    { label: "Spoke", icon: "spoke", href: "https://spoke.com" },
    { label: "AngelsList", icon: "angelslist", href: "https://angelslist.com" },
];

export default function Home() {
    return (
        <div>
            <Head>
                <title>Paul Serban | JS Software Engineer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <LandingTemplate siteNavLinks={siteNavLinks} pageNavLinks={pageNavLinks}>
                <HeroBanner
                    pageTitle="Welcome!"
                    subheading="I'm Paul, a JavaScript, MERN and JAMStack software engineer with a passion for building 
                                dynamic and user-friendly web applications."
                    socialMediaList={socialMediaList}
                />
                <Main>
                    <Section headingTitle="About me" sectionId="about_me">
                        <Paragraph
                            text="I am a highly motivated and experienced web developer with a passion for 
                                creating innovative and user-friendly web applications. I have a strong background in 
                                JavaScript, MERN, and JAMStack development, as well as experience in other technologies 
                                such as HTML, CSS, and React."
                        />

                        <Paragraph
                            text="Throughout my career, I have had the opportunity to work on a variety 
                                of projects, from small business websites to large-scale e-commerce platforms. I take pride 
                                in my ability to collaborate with teams, understand client needs, and deliver high-quality 
                                solutions on time and on budget."
                        />

                        <Paragraph
                            text="When I'm not coding, you can find me reading about new technologies, 
                                experimenting with new frameworks and libraries, or mentoring other developers. I am always 
                                eager to learn and grow as a developer, and I am excited to continue building my skills 
                                and expanding my portfolio."
                        />
                    </Section>
                    <Section headingTitle="Projects" sectionId="projects">
                        <ProjectOverview />
                    </Section>
                    <Section headingTitle="Skills" sectionId="skills"></Section>
                    <Section headingTitle="Achievements" sectionId="achievements"></Section>
                    <Section headingTitle="Contact me" sectionId="contact_me"></Section>
                </Main>
            </LandingTemplate>
        </div>
    );
}
