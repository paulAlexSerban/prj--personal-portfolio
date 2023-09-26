import { base } from '@/styles/templates/generic.module.scss';
import { Roboto } from 'next/font/google';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/core/library/organisms/Header.organism'));
const Footer = dynamic(() => import('@/core/library/organisms/Footer.organism'));
const Main = dynamic(() => import('@/core/library/organisms/Main.organism'));

const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});

function GenericTemplate({ children, siteProps }) {
  const { siteNavLinks, socialMediaLinks } = siteProps;
  return (
    <div className={[base, roboto.className].join(' ')}>
      <Header siteNavLinks={siteNavLinks} />
      <Main>{children}</Main>
      <Footer socialMediaLinks={socialMediaLinks} />
    </div>
  );
}

export default GenericTemplate;
