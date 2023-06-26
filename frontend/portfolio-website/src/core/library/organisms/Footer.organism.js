import { base, container, bottom, copyrightText, domainUrl, footerNav } from "@/styles/organisms/footer.module.scss";
import { Link } from "@/core/atoms/typography";
import SocialMediaList from "../molecules/SocialMediaList.molecule";
import LinkList from "../molecules/LinkList.molecule";
import useSiteProps from "@/core/hooks/useSiteProps";

const date = new Date();
const currentYear = date.getFullYear();

export default function Footer() {
    const { socialMediaLinks } = useSiteProps();
    const hasSocialMediaLinks = socialMediaLinks.length > 0;

    return (
        <footer className={base}>
            <div className={container}>
                {hasSocialMediaLinks && <SocialMediaList items={socialMediaLinks} position="footer" />}
                <div className={footerNav}>
                    <LinkList
                        links={[
                            {
                                label: "Curriculum Vitae",
                                href: "/curriculum-vitae",
                                isEncoded: false,
                                isInternal: true,
                            },
                            {
                                label: "Contact Me",
                                href: "/contact-me",
                                isEncoded: false,
                                isInternal: true,
                            },
                            {
                                label: "Cookie Settings",
                                href: "#cookie-settings",
                                isEncoded: false,
                                isInternal: true,
                            },
                        ]}
                    />
                    <LinkList
                        links={[
                            {
                                label: "Portfolio",
                                href: "/portfolio",
                                isEncoded: false,
                                isInternal: true,
                            },
                            {
                                label: "My Projects",
                                href: "/projects",
                                isEncoded: false,
                                isInternal: true,
                            },
                            {
                                label: "Coursework",
                                href: "/coursework",
                                isEncoded: false,
                                isInternal: true,
                            },
                        ]}
                    />
                    <LinkList
                        links={[
                            {
                                label: "Blog",
                                href: "/blog",
                                isEncoded: false,
                                isInternal: true,
                            },
                            {
                                label: "Posts",
                                href: "/posts",
                                isEncoded: false,
                                isInternal: true,
                            },
                            {
                                label: "Snippets",
                                href: "/snippets",
                                isEncoded: false,
                                isInternal: true,
                            },
                            {
                                label: "Book Notes",
                                href: "/booknotes",
                                isEncoded: false,
                                isInternal: true,
                            },
                        ]}
                    />
                </div>
            </div>
            <div className={bottom}>
                <span className={copyrightText}>{currentYear} &copy; Paul Serban. All rights reserved.</span>
                <Link className={domainUrl} ariaLabel="www.paulserban.eu" isInternal={true} href="/">
                    www.paulserban.eu
                </Link>
            </div>
        </footer>
    );
}
