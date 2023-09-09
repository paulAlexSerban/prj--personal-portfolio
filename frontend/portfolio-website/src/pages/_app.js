import '@/styles/base/index.scss';
import dynamic from 'next/dynamic';
import { SitePropsProvider } from '@/core/context/SitePropsContext';
import { CookieProvider } from '@/core/context/CookieContext';


const CookieBanner = dynamic(() => import('@/core/library/molecules/CookieBanner.molecule'), { ssr: false });
const CookieSettings = dynamic(() => import('@/core/library/molecules/CookieSettings.molecule'), { ssr: false });

function App({ Component, pageProps }) {

    return (
        <CookieProvider>
            <SitePropsProvider>
                <CookieBanner />
                <CookieSettings />
                <Component {...pageProps} />
            </SitePropsProvider>
        </CookieProvider>
    );
}

export default App;
