import GenericTemplate from "@/core/templates/Generic.template";

import Head from "next/head";
import { useSiteProps } from "@/context/SitePropsContext";
import { IndexPageProvider, IndexPageContext } from "@/context/pages/IndexPageContext"; // Correct the path accordingly
import { useContext } from "react";

function IndexPage() {
    const pageContent = useContext(IndexPageContext);
    const { title } = pageContent;
    const { icons } = useSiteProps();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>
            <GenericTemplate>
                <main>
                    <h2>
                        <span>Website is under construction!</span> <br />
                        <span>Come back soon!</span>
                    </h2>
                </main>
            </GenericTemplate>
        </>
    );
}

export default function Index() {
    return (
        <IndexPageProvider>
            <IndexPage />
        </IndexPageProvider>
    );
}
