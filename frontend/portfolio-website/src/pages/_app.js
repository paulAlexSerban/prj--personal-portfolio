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
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag() {
                            dataLayer.push(arguments);
                        }
                        gtag('js', new Date());
                        gtag('config', ${gtag.GA_MEASUREMENT_ID}, {
                            page_path: window.location.pathname,
                        });`}
                </Script>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`(function (w, d, s, l, i) {
                            w[l] = w[l] || [];
                            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                            var f = d.getElementsByTagName(s)[0],
                                j = d.createElement(s),
                                dl = l != 'dataLayer' ? '&l=' + l : '';
                            j.async = true;
                            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                            f.parentNode.insertBefore(j, f);
                        })(window, document, 'script', 'dataLayer', 'GTM-MJNXDWVR');`}
                </Script>
                <Script id="hotjar-script" strategy="afterInteractive">
                    {`(function (h, o, t, j, a, r) {
                            h.hj =
                                h.hj ||
                                function () {
                                    (h.hj.q = h.hj.q || []).push(arguments);
                                };
                            h._hjSettings = { hjid: 3647657, hjsv: 6 };
                            a = o.getElementsByTagName('head')[0];
                            r = o.createElement('script');
                            r.async = 1;
                            r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                            a.appendChild(r);
                        })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');`}
                </Script>
            </SitePropsProvider>

            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-MJNXDWVR"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
        </CookieProvider>
    );
}

export default App;
