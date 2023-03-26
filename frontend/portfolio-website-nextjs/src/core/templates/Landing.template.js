import { base } from '@/styles/templates/landing.module.scss';
import { Roboto } from 'next/font/google';
const roboto = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal'],
  variable: '--text-regular',
});

function LandingTemplate({ children }) {
  return (
    <div className={[base, roboto.className].join(" ")}>
      {children}
    </div>
  );
}

export default LandingTemplate;
