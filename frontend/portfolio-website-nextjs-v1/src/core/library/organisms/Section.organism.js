import { useEffect, useState} from 'react';
import { Heading } from '@/core/atoms/typography/all';
import styles, { base, header, container} from '@/styles/organisms/section.module.scss';
import { useInView } from 'react-intersection-observer';
import classNames from "classnames";

export default function Section({ children, headingTitle, sectionId, subheadingText }) {

  const [visible, setVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    if (inView) {
      setVisible(true);
    }
  }, [inView]);

  const baseClasses = classNames(base, {
    [styles['base--inactive']] : !visible
  });

  return (
    <section id={sectionId} className={baseClasses} ref={ref}>
      {headingTitle && (
        <header className={header}>
          <Heading level={2} mainText={headingTitle} hasSeparator={true} subheadingText={subheadingText} />
        </header>
      )}
      {children && <div className={container}>{children}</div>}
    </section>
  );
}
