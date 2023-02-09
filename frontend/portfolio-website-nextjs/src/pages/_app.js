import "@/styles/base/base.scss";
// import "../styles/_99_devTools/devTools.scss";

export default function App({ Component, pageProps }) {
    pageProps.siteProps = {
        icons: {
            favicon: "/favicon.ico",
        },
        title: "Paul Serban | JS Software Engineer",
        socialMediaLinks: [
            {
                label: "LinkedIn",
                icon: "linkedin_v2",
                href: "https://www.linkedin.com/in/paulalexs/",
            },
            {
                label: "GitHub",
                icon: "github",
                href: "https://github.com/paulAlexSerban",
            },
            {
                label: "Email",
                icon: "email",
                href: "mailto:hzdkv@example.com",
            },
        ],
        siteNavLinks: [
            { label: "portfolio", href: `/portfolio` },
            { label: "blog", href: `/blog` },
        ],
    };
    return <Component {...pageProps} />;
}
