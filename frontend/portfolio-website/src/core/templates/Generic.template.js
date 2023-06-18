import { Roboto } from "next/font/google";
import { base } from "@/styles/templates/generic.module.scss";
import dynamic from "next/dynamic";
import { useSiteProps } from "@/context/SitePropsContext";
import { decodeFromBase64, encodeToBase64 } from "@/core/utils/base64";

const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));

const roboto = Roboto({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    style: ["normal"],
    variable: "--text-regular",
});

function GenericTemplate({ children }) {
    const { socialMediaLinks } = useSiteProps();
    const handleMouseEnter = (el) => {
        el.href = decodeFromBase64(el.getAttribute("href"));
    };

    const handleMouseLeave = (el) => {
        el.href = encodeToBase64(el.getAttribute("href"));
    };
    return (
        <div className={[base, roboto.className].join(" ")}>
            <Header />
            {children}
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
        </div>
    );
}

export default GenericTemplate;
