import '@/styles/base/index.scss';
import dynamic from 'next/dynamic';
import { SitePropsProvider } from '@/core/context/SitePropsContext';
import { CookieProvider } from '@/core/context/CookieContext';
import Script from 'next/script';
import * as gtag from '../lib/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const CookieBanner = dynamic(() => import('@/core/library/molecules/CookieBanner.molecule'), { ssr: false });
const CookieSettings = dynamic(() => import('@/core/library/molecules/CookieSettings.molecule'), { ssr: false });

function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);
    return (
        <CookieProvider>
            <SitePropsProvider>
                <CookieBanner />
                <CookieSettings />
                <Component {...pageProps} />
                <Script
                    strategy="afterInteractive"
                    src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_MEASUREMENT_ID}`}
                />
                <Script
                    id="google-analytics"
                    strategy="afterInteractive"
                    onLoad={() => {
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                            dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', gtag.GA_MEASUREMENT_ID, {
                            page_path: window.location.pathname,
                        });
                    }}
                />
            </SitePropsProvider>
        </CookieProvider>
    );
}

export default App;
