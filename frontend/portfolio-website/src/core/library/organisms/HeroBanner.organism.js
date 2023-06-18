import { Paragraph, Heading, Link } from '@/core/atoms/typography';
import { base, container, wrapper } from '@/styles/organisms/heroBanner.module.scss';

// import SocialMediaList from '../molecules/SocialMediaList.molecule';
// import TagList from '@/core/molecules/TagList.molecule';

export default function HeroBanner({ pageTitle, subheading, socialMediaLinks = [], date, author, tags }) {
  const hasSocialMediaLinks = socialMediaLinks.length > 0;
  const hasTags = tags && tags.length > 0;
  const hasContent = hasSocialMediaLinks || date || hasTags;

  return (
    <>
      {pageTitle && (
        <header className={base}>
          <div className={container}>
            <div className={wrapper}>
              <Heading level={1} mainText={pageTitle} subheadingText={subheading} />
            </div>

            {hasContent && (
              <div className={wrapper}>
                {/* {hasSocialMediaLinks && <SocialMediaList items={socialMediaLinks} />} */}

                {date || author ? <Paragraph text={`By ${author} ${date ? `on ${date}` : ''}`} /> : ''}
                {/* {hasTags && <TagList tags={tags} />} */}
              </div>
            )}
          </div>
        </header>
      )}
    </>
  );
}
