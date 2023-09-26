import { useState, useEffect } from 'react';
import styles, { base, container, header, footer } from '@/styles/molecules/card.module.scss';
import { useInView } from 'react-intersection-observer';
import { Paragraph, Heading, Link } from '@/core/atoms/typography/all';
import TagList from './TagList.molecule';
import LinkIcon from '@/core/atoms/LinkIcon.atom';
import classNames from 'classnames';

export default function Card({ content, category, section }) {


  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const classes = classNames(base, {
    [styles['base--inactive']]: !visible
  })

  const prjTitle = content.frontmatter.title;
  const prjSubheading = content.frontmatter.subheading;
  const prjType = content.frontmatter.type;
  const prjTags = content.frontmatter.tags.slice(0, 5);
  const prjExcerpt = content.frontmatter.excerpt;
  const prjGhRepo = content.frontmatter.repo_url;
  const prjDemo = content.frontmatter.demo_url;
  const prjSlug = `/${section}/${category.category_url}/${content.slug}`;

  return (
    <article className={classes} ref={ref}>
      <header className={header}>
        <Link href={prjSlug} isInternal={true}>
          <Heading level={3} mainText={prjTitle} subheadingText={prjSubheading} />
        </Link>
      </header>
      <div className={container}>
        <Paragraph text={prjExcerpt} />
      </div>
      {(prjDemo || prjGhRepo || prjTags) && <footer className={footer}>
      <TagList tags={prjTags} />
        {prjGhRepo && <LinkIcon label={[prjTitle, 'Repo'].join(' ')} href={prjGhRepo} iconName="github" isInternal={false} />}
        {(prjSlug && prjGhRepo) && <LinkIcon label={[prjTitle, 'Case Study'].join(' ')} href={prjSlug} iconName="folder" isInternal={true} />}
        {prjDemo && <LinkIcon label={[prjTitle, 'View Demo'].join(' ')} href={prjDemo} iconName="globe" isInternal={false} />}
      </footer>}
    </article>
  );
}
