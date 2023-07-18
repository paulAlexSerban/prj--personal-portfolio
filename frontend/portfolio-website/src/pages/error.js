import Head from "next/head";
import dynamic from "next/dynamic";
import GenericTemplate from "@/core/system/templates/Generic.template";
import useSiteProps from "@/core/hooks/useSiteProps";
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));

export default function Error() {
  const { icons } = useSiteProps();
    return (
        <>
            <Head>
                <title>Error</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>
            <GenericTemplate>
                <HeroBanner
                    pageTitle={'Error'}
                    subheading={'An error has occurred.'}
                />
            </GenericTemplate>
        </>
    );
}
