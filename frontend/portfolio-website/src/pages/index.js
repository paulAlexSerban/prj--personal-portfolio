import GenericTemplate from "@/core/templates/Generic.template";
import { decodeFromBase64, encodeToBase64 } from "@/core/utils/base64";
import content from "@/content/pages/_app.json";
import Head from "next/head";

export default function Index({ siteProps }) {
    const { title, socialMediaLinks, icons } = siteProps;

    const handleMouseEnter = (el) => {
        el.href = decodeFromBase64(el.getAttribute("href"));
    };

    const handleMouseLeave = (el) => {
        el.href = encodeToBase64(el.getAttribute("href"));
    };

    return (
        <>
            <Head>
                <title>{siteProps.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>
            <GenericTemplate>
                <header>
                    <h1>
                        <span>paulserban.eu</span>
                    </h1>
                </header>
                <main>
                    <h2>
                        <span>Website is under construction!</span> <br />
                        <span>Come back soon!</span>
                    </h2>
                </main>
                <footer>
                    <h3>Find me on:</h3>
                    <ul>
                        {socialMediaLinks.map((link) => {
                            const { label, href, isEncoded } = link;
                            return (
                                <li key={label}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onMouseEnter={isEncoded ? (e) => handleMouseEnter(e.target) : null}
                                        onMouseLeave={isEncoded ? (e) => handleMouseLeave(e.target) : null}
                                        onTouchStart={isEncoded ? (e) => handleMouseEnter(e.target) : null}
                                        onTouchEnd={isEncoded ? (e) => handleMouseLeave(e.target) : null}
                                    >
                                        {label}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </footer>
            </GenericTemplate>
        </>
    );
}

export async function getStaticProps() {
    content?.socialMediaLinks.map((link) => (link.isEncoded ? (link.href = encodeToBase64(link.href)) : link.href));

    return {
        props: {
            siteProps: content,
        },
    };
}
