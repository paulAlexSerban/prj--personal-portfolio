import { useId } from "react";
import PostCard from "@/core/molecules/PostCard.molecule";
import PropTypes from "prop-types";
import { base } from "@/styles/molecules/postList.module.scss";

export default function PostList({ list = [], category = {}, cols }) {
    const ID = useId();

    return (
        <ul id={ID} className={base} style={{'--column-num': cols}}>
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

PostList.propTypes = {
    post: PropTypes.shape({
		frontmatter: PropTypes.shape({
			title: PropTypes.string.isRequired,
			excerpt: PropTypes.string,
			tags: PropTypes.arrayOf(PropTypes.string),
			subheading: PropTypes.string,
			author: PropTypes.string,
		}).isRequired,
		slug: PropTypes.string.isRequired,
	}),
    category: PropTypes.shape({
		category_url: PropTypes.string.isRequired,
	}).isRequired,
}