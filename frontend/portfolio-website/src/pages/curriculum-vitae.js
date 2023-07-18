import Head from "next/head";
import dynamic from "next/dynamic";
import GenericTemplate from "@/core/system/templates/Generic.template";
import useSiteProps from "@/core/hooks/useSiteProps";
const HeroBanner = dynamic(() => import("@/core/library/organisms/HeroBanner.organism"));

export default function CurriculumVitae() {
  const { icons, socialMediaLinks } = useSiteProps();
    return (
        <>
            <Head>
                <title>Curriculum Vitae | Dragon Jon Doe</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href={icons.favicon} />
            </Head>
            <GenericTemplate>
                <HeroBanner
                    pageTitle={'Curriculum Vitae'}
                    subheading={'My Curriculum Vitae will be available soon!'}
                />
            </GenericTemplate>
        </>
    );
}
