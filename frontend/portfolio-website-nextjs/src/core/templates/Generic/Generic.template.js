import Head from "next/head";
import config from "./config";
import { useId } from "react";

function GenericTemplate({
    title,
    keywords,
    description,
    children,
    content,
    pageProperties,
}) {
    const ID = useId();
    return <div id={ID}>{children}</div>;
}

GenericTemplate.defaultProps = { ...config.defaultProps };

export default GenericTemplate;
