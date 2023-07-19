import ContentRepository from "@/core/utils/ContentRepository";
import Post from "@/core/system/pages/Post.page.js";
export default Post;


export async function getStaticPaths() {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const projects = await contentRepository.findByType("projects");

    const paths = Object.values(projects).map((value) => {
        return {
            params: {
                slug: value.slug,
                type: "projects",
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
    const content = await contentRepository.findOne("projects", slug);
    return {
        props: {
            pageContent: content.content,
        },
    };
}
