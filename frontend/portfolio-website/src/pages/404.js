import Head from "next/head";
import dynamic from "next/dynamic";
import GenericTemplate from "@/core/system/templates/Generic.template";
import useSiteProps from "@/core/hooks/useSiteProps";
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));

import { SitePropsProvider } from "@/core/context/SitePropsContext";

export default function Error404() {
  const { icons, socialMediaLinks } = useSiteProps();
    return (
        <SitePropsProvider>
            <Head>
                <title>404 Error - Page not Found</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>
            <GenericTemplate>
                <HeroBanner
                    pageTitle={'404 Error - Page not Found'}
                    subheading={'The page you are looking for does not exist.'}
                />
            </GenericTemplate>
        </SitePropsProvider>
    );
}
