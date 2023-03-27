import { useId, useRef, useState, useEffect } from 'react';
import styles, { base, container, header, footer } from '@/styles/molecules/projectCard.module.scss';
import { useInView } from 'react-intersection-observer';

import { Paragraph, Heading, Link } from '@/core/atoms/typography/all';
import TagList from './TagList.molecule';
import LinkIcon from '@/core/atoms/LinkIcon.atom';

export default function ProjectCard({ project, category }) {
  const ID = useId();

  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const prjTitle = project.frontmatter.title;
  const prjSubheading = project.frontmatter.subheading;
  const prjType = project.frontmatter.type;
  const prjTags = project.frontmatter.tags.slice(0, 5);
  const prjExcerpt = project.frontmatter.excerpt;
  const prjGhRepo = project.frontmatter.repo_url;
  const prjDemo = project.frontmatter.demo_url;
  const prjSlug = `/portfolio/${category.category_url}/${project.slug}`;

  return (
    <article id={ID} className={`${base} ${!visible ? styles['base--inactive'] : ''} projectCard`} ref={ref}>
      <header className={header}>
        <Link href={prjSlug} isInternal={true}>
          <Heading level={3} mainText={prjTitle} subheadingText={prjSubheading} />
        </Link>
      </header>
      <div className={container}>
        <Paragraph text={prjExcerpt} />
        <TagList tags={prjTags} />
      </div>
      <footer className={footer}>
        <LinkIcon label={[prjTitle, 'Repo'].join(' ')} href={prjGhRepo} iconName="github" isInternal={false} />
        <LinkIcon label={[prjTitle, 'Case Study'].join(' ')} href={prjSlug} iconName="folder" isInternal={true} />
        <LinkIcon label={[prjTitle, 'View Demo'].join(' ')} href={prjDemo} iconName="globe" isInternal={false} />
      </footer>
    </article>
  );
}
