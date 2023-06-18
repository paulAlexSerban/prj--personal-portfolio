import { Roboto } from "next/font/google";
import { base } from "@/styles/templates/generic.module.scss";

const roboto = Roboto({
    display: "swap",
    subsets: ["latin"],
    weight: ["400", "700", "900"],
    style: ["normal"],
    variable: "--text-regular",
});

function GenericTemplate({ children }) {
    return <div className={[base, roboto.className].join(" ")}>{children}</div>;
}

export default GenericTemplate;
