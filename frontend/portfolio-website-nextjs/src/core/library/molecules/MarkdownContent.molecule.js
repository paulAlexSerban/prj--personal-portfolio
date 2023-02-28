import { useId } from 'react';
import PropTypes from 'prop-types';
import { base } from '@/styles/molecules/markdownContainer.module.scss';
import MarkdownIt from 'markdown-it';
import attrs from 'markdown-it-attrs';
const hljs = require('highlight.js/lib/core');
import bracketed from 'markdown-it-bracketed-spans';

hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});
markdown.use(require('markdown-it-highlightjs/core'), { hljs });
markdown.use(attrs);
markdown.use(bracketed);
markdown.enable(['link']);

export default function MarkdownContainer({ markdownContent, articleId }) {
  const ID = useId();

  return (
    <>
      {markdownContent && (
        <article
          id={articleId || ID}
          className={base}
          dangerouslySetInnerHTML={{
            __html: markdown.render(markdownContent),
          }}
        ></article>
      )}
    </>
  );
}

MarkdownContainer.propTypes = {
  markdownContent: PropTypes.string,
  articleId: PropTypes.string,
};
