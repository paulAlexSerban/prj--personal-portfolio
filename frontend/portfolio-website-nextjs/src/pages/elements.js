import Head from "next/head";
import Generic from "@/core/templates/Generic/Generic.template.js";

import { Paragraph, Heading, Link } from "@/core/atoms/typography/all";

import Header from "@/core/library/organisms/Header.organism";
import Main from "@/core/library/organisms/Main.organism";
import Footer from "@/core/library/organisms/Footer.organism";

export default function Elements() {
    return (
        <div>
            <Head>
                <title>Elements | Paul Serban: JS Software Engineer</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Generic>
                <Header />
                <Main>
                    <Paragraph
                        text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Magna etiam tempor orci eu. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Cras ornare arcu dui vivamus arcu 
                    felis bibendum ut tristique. Sed turpis tincidunt id aliquet risus feugiat in ante. Ornare lectus sit amet est. Sodales ut etiam 
                    sit amet nisl. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Egestas dui id ornare arcu odio ut sem 
                    nulla pharetra. Massa ultricies mi quis hendrerit dolor.`}
                    />
                    <Heading mainText="Heading Level 1" level="1" />
                    <Heading mainText="Heading Level 2" />
                    <Heading mainText="Heading Level 3" level="3" />
                    <Heading mainText="Heading Level 4" level="4" />
                    <Heading mainText="Heading Level 5" level="5" />
                    <Heading mainText="Heading Level 6" level="6" />

                    <Heading
                        mainText="Heading Level 1 with subheading"
                        subheadingText="Subheading text"
                        level="1"
                    />
                    <Heading
                        mainText="Heading Level 2 with subheading"
                        subheadingText="Subheading text"
                        level="2"
                    />
                    <Heading
                        mainText="Heading Level 3 with subheading"
                        subheadingText="Subheading text"
                        level="3"
                    />
                    <Heading
                        mainText="Heading Level 4 with subheading"
                        subheadingText="Subheading text"
                        level="4"
                    />

                    <Heading
                        mainText="Heading Level 2 with subheading"
                        subheadingText="Subheading text and separator aligned to left"
                        hasSeparator={true}
                        level="2"
                    />
                    <Heading
                        mainText="Heading Level 3 with subheading and separator"
                        subheadingText="Subheading text and separator aligned to left"
                        hasSeparator={true}
                        level="3"
                    />

                    <Link label="Link text" />
                </Main>
                <Footer />
            </Generic>
        </div>
    );
}
