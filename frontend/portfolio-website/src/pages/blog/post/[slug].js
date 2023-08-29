import ContentRepository from "@/core/utils/ContentRepository";
import Post from "@/core/system/pages/Post.page.js";
export default Post;


export async function getStaticPaths() {
    const contentRepository = new ContentRepository();
    await contentRepository.init();
    const posts = await contentRepository.findByType("posts");

    const paths = Object.values(posts).map((value) => {
        return {
            params: {
                slug: value.slug,
                type: "posts",
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
    const content = await contentRepository.findOne("posts", slug);

    const url = 'https://paulserban.eu/blog/post/' + slug;
    content.url = url;

    const assetsPath = process.env.ASSETS_PATH;
    content.assetsPath = assetsPath;
    return {
        props: {
            pageContent: content.content,
        },
    };
}
