import { Roboto } from "next/font/google";
import { base } from "@/styles/templates/generic.module.scss";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/core/library/organisms/Header.organism"));
const Main = dynamic(() => import("@/core/library/organisms/Main.organism"));
const Footer = dynamic(() => import("@/core/library/organisms/Footer.organism"));
const roboto = Roboto({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    style: ["normal"],
    variable: "--text-regular",
});

function GenericTemplate({ children }) {
    return (
        <div className={[base, roboto.className].join(" ")}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </div>
    );
}

export default GenericTemplate;
