import '@/styles/base/index.scss';
import dynamic from 'next/dynamic';
import { SitePropsProvider } from '@/core/context/SitePropsContext';
import { CookieProvider } from '@/core/context/CookieContext';
import Analytics from '@/core/system/meta/Analitics.meta';

const CookieBanner = dynamic(() => import('@/core/library/molecules/CookieBanner.molecule'), { ssr: false });
const CookieSettings = dynamic(() => import('@/core/library/molecules/CookieSettings.molecule'), { ssr: false });

function App({ Component, pageProps }) {

    return (
        <CookieProvider>
            <SitePropsProvider>
                <CookieBanner />
                <CookieSettings />
                <Component {...pageProps} />
                <Analytics />
            </SitePropsProvider>
        </CookieProvider>
    );
}

export default App;
