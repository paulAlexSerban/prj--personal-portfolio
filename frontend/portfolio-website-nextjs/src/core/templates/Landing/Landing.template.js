import Head from "next/head";
import config from "./config";
import { useId } from "react";

function Landing({
    title,
    keywords,
    description,
    children,
    content,
    pageProperties,
}) {
    const ID = useId();
    return <div data-next-cmp={`${config.name}-${ID}`}>About</div>;
}

Landing.defaultProps = { ...config.defaultProps };

export default Landing;