import ContentRepository from "@/core/utils/ContentRepository";
import Post from "@/core/system/pages/Post.page.js";
export default Post;


export async function getStaticPaths() {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const coursework = await contentRepository.findByType("coursework");

    const paths = Object.values(coursework).map((value) => {
        return {
            params: {
                slug: value.slug,
                type: "coursework",
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
    const content = await contentRepository.findOne("coursework", slug);
    return {
        props: {
            pageContent: content.content,
        },
    };
}
