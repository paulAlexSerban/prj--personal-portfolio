import { useId } from "react";

import { base, container, footer } from "@/styles/organisms/postsOverview.module.scss";
import { Link } from "@/core/atoms/typography/all";
  
import PostList from "@/core/molecules/PostList.molecule";

export default function PostsOverview({ blogList, category, parentPage, showViewAllButton = true, cols = 3  }) {
    const ID = useId();

    return (
        <>
            {blogList && (
                <article id={ID} className={base}>
                    <div className={container}>
                        <PostList list={blogList} category={category} cols={cols}/>
                    </div>
                    {category && showViewAllButton &&  (
                        <div className={footer}>                        <Link
                            label={`View all ${category.category_name}`}
                            href={`/blog/${category.category_url}`}
                            isInternal={true}
                        ></Link></div>

                    )}
                </article>
            )}
        </>
    );
}
