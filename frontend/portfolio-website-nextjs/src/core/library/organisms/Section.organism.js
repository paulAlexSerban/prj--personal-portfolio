import { useId, useEffect, useRef, useState, useCallback } from 'react';
import { Heading } from '@/core/atoms/typography/all';
import styles, { base, header, container, footer } from '@/styles/organisms/section.module.scss';
import { useInView } from 'react-intersection-observer';

export default function Section({ children, headingTitle, sectionId, subheadingText }) {
  const ID = useId();
  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  return (
    <section id={sectionId} className={`${base} ${!visible ? styles['base--inactive'] : ''}`} ref={ref}>
      {headingTitle && (
        <header className={header}>
          <Heading level={2} mainText={headingTitle} hasSeparator={true} subheadingText={subheadingText} />
        </header>
      )}
      {children && <div className={container}>{children}</div>}
    </section>
  );
}
