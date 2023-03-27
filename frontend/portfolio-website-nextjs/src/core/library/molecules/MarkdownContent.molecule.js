import { useId } from 'react';
import PropTypes from 'prop-types';
import { base } from '@/styles/molecules/markdownContainer.module.scss';
import { MDXRemote } from 'next-mdx-remote';

export default function MarkdownContainer({ markdownContent, articleId }) {
  const ID = useId();

  const components = {
    p: (props) => <p {...props} />,
  };

  return (
    <>
      {markdownContent && (
        <article id={articleId || ID} className={base}>
          <MDXRemote {...markdownContent} components={components} />
        </article>
      )}
    </>
  );
}

MarkdownContainer.propTypes = {
  markdownContent: PropTypes.string,
  articleId: PropTypes.string,
};
