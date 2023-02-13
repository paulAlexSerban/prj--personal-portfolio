import { useId } from "react";
import PostCard from "@/core/molecules/PostCard.molecule";

import { base } from "@/styles/molecules/postList.module.scss";

export default function PostList({ list = [], category = {} }) {
    const ID = useId();

    return (
        <ul id={ID} className={base}>
            {list.map((post, index) => {
                return (
                    <li key={index}>
                        <PostCard post={post} category={category} />
                    </li>
                );
            })}
        </ul>
    );
}
