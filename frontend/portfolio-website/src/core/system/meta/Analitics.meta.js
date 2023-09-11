import Script from 'next/script';
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import * as gtag from '../../../lib/gtag';
import { CookieContext } from '@/context/CookieContext';

export default function Analytics() {
    const { cookieSettings } = useContext(CookieContext);
    const router = useRouter();

    useEffect(() => {
        if (!cookieSettings.analytics) {
            return;
        }

        const handleRouteChange = (url) => {
            gtag.pageview(url);
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events, cookieSettings.analytics]);

    if (!cookieSettings.analytics) {
        return;
    }

    return (
        <>
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
                        gtag('config', "G-MNGBFKWWK5", {
                            page_path: window.location.pathname,
                        });`}
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
        </>
    );
}
