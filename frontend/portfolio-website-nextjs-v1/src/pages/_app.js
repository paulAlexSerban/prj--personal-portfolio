import "@/styles/base/base.scss";
import { encodeToBase64 } from "@/core/utils/string/base64";
  
// import "../styles/_99_devTools/devTools.scss";

export default function App({ Component, pageProps }) {
	pageProps.siteProps = {
		icons: {
			favicon: "favicon.svg",
		},
		title: "Paul Serban | Front-end Software Engineer",
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
				href: encodeToBase64("mailto:paul.alex.serban@gmail.com"),
				isEncoded: true,
			},
		],
		siteNavLinks: [
			{ label: "portfolio", href: "/portfolio" },
			{ label: "blog", href: "/blog"},
		],
	};
	return <Component {...pageProps} />;
}
