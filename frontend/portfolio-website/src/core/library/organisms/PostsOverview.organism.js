import CardList from "@/core/molecules/CardList.molecule";
import { Link } from "@/core/atoms/typography";
import { base, container, footer } from "@/styles/organisms/postsOverview.module.scss";

export default function PostsOverview({ content, showViewAllButton = true, columns = 3 }) {
    const { list, category, section } = content;
    return (
        <>
            {content && (
                <article className={base}>
                    <div className={container}>
                        <CardList list={list} category={category} columns={columns} section={section} />
                    </div>
                    {category && showViewAllButton && (
                        <div className={footer}>
                            <Link
                                arialabel={`View all ${category.category_name}`}
                                href={`/${section}/${category.category_url}`}
                                isInternal={true}
                            >{`View all ${category.category_name}s`}</Link>
                        </div>
                    )}
                </article>
            )}
        </>
    );
}
