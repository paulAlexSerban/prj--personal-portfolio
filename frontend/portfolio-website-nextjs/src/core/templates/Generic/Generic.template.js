import Head from "next/head";
import config from "./config";
import { useId } from "react";

function Generic({
    title,
    keywords,
    description,
    children,
    content,
    pageProperties,
}) {
    const ID = useId();
    return <div data-next-cmp={`${config.name}-${ID}`}>Elements template</div>;
}

Generic.defaultProps = { ...config.defaultProps };

export default Generic;