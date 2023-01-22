import Head from "next/head";
import config from "./config";
import { useId } from "react";

function LandingTemplate({
    title,
    keywords,
    description,
    children,
    content,
    pageProperties,
}) {
    const ID = useId();
    return <div id={ID}>Landing Template</div>;
}

LandingTemplate.defaultProps = { ...config.defaultProps };

export default LandingTemplate;