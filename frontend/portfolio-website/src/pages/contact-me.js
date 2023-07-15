import Head from "next/head";
import dynamic from "next/dynamic";
import GenericTemplate from "@/core/templates/Generic.template";
import useSiteProps from "@/core/hooks/useSiteProps";
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));

export default function ContactMe() {
  const { icons, socialMediaLinks } = useSiteProps();
    return (
        <>
            <Head>
                <title>Contact Me | Dragon Jon Doe</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>
            <GenericTemplate>
                <HeroBanner
                    pageTitle={'Contact Me!'}
                    subheading={'My contact page will be here soon!'}
                />
            </GenericTemplate>
        </>
    );
}
