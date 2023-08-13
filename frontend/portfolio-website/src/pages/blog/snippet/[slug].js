import ContentRepository from "@/core/utils/ContentRepository";
import Post from "@/core/system/pages/Post.page.js";
export default Post;


export async function getStaticPaths() {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const snippets = await contentRepository.findByType("snippets");

    const paths = Object.values(snippets).map((value) => {
        return {
            params: {
                slug: value.slug,
                type: "snippets",
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
    const content = await contentRepository.findOne("snippets", slug);
    return {
        props: {
            pageContent: content.content,
        },
    };
}
