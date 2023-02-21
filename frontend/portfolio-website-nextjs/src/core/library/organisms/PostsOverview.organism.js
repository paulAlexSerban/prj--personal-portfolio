import { useId } from "react";

import { base, container } from "@/styles/organisms/postsOverview.module.scss";
import { Link } from "@/core/atoms/typography/all";
import getPath from "@/core/utils/getPath";
import PostList from "@/core/molecules/PostList.molecule";

export default function PostsOverview({ blogList, category, parentPage, showViewAllButton = true  }) {
    const ID = useId();

    return (
        <>
            {blogList && (
                <article id={ID} className={base}>
                    <div className={container}>
                        <PostList list={blogList} category={category} />
                    </div>
                    {category && showViewAllButton &&  (
                        <Link
                            label={`View all ${category.category_name}`}
                            href={getPath(`/blog/${category.category_url}`)}
                            isInternal={true}
                        ></Link>
                    )}
                </article>
            )}
        </>
    );
}
