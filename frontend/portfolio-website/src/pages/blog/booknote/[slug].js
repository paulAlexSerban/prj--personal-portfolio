import ContentRepository from "@/core/utils/ContentRepository";
import Post from "@/core/system/pages/Post.page.js";
export default Post;


export async function getStaticPaths() {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const booknotes = await contentRepository.findByType("booknotes");

    const paths = Object.values(booknotes).map((value) => {
        return {
            params: {
                slug: value.slug,
                type: "booknotes",
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }) {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const content = await contentRepository.findOne("booknotes", slug);

    const url = 'https://paulserban.eu/blog/booknote/' + slug;
    content.url = url;

    const assetsPath = process.env.ASSETS_PATH;
    content.assetsPath = assetsPath;
    return {
        props: {
            pageContent: content.content,
        },
    };
}
