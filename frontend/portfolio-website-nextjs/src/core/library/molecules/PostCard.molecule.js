import { useId, useEffect, useState } from 'react';
import { Paragraph, Heading, Link } from '@/core/atoms/typography/all';
import TagList from './TagList.molecule';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';

import styles,{ base, footer, cardLink } from '@/styles/molecules/postCard.module.scss';

export default function PostCard({ post, category }) {
  const ID = useId();
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const { title: postTitle, excerpt: postExcerpt, tags: postTags, subheading: postSubheading } = post.frontmatter;
  const postSlug = `/blog/${category.category_url}/${post.slug}`;

  return (
    <article id={ID} className={`${base} ${!visible ? styles['base--inactive'] : ''}`} ref={ref}>
      <Link
        href={postSlug}
        isInternal={true}
        ariaLabel={['Link to', postTitle, postSubheading].join(' - ')}
        className={cardLink}
      >
        <header>
          <Heading level={3} mainText={postTitle} subheadingText={postSubheading} />
        </header>
        {postExcerpt && (
          <main>
            <Paragraph text={postExcerpt} />
          </main>
        )}
      </Link>

      <footer className={footer}>
        <TagList tags={postTags} />
      </footer>
    </article>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      subheading: PropTypes.string,
      author: PropTypes.string,
    }).isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  category: PropTypes.shape({
    category_url: PropTypes.string.isRequired,
  }).isRequired,
};
