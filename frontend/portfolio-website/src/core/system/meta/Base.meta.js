import Head from 'next/head';
import { trimPageDescription } from '@/core/utils/TextUtils';

export default function BaseMeta({ title, description, keywords, robots, assetsPath, author, favicon, date }) {
    const ContentSecurityPolicy = [
        "default-src 'self'",
        "img-src 'self' https: data: https://www.googletagmanager.com;",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://script.hotjar.com https://metrics.hotjar.io https://static.hotjar.com https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://www.google.com https://googleads.g.doubleclick.net https://www.gstatic.com;",
        "child-src https://www.gstatic.com;",
        "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;",
        "font-src 'self' https://fonts.gstatic.com;",
        "connect-src 'self' https://region1.google-analytics.com https://www.google-analytics.com https://googleads.g.doubleclick.net;",
    ];
    return (
        <Head>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={trimPageDescription(description)} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
            {robots && <meta name="robots" content={robots} />}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={`${assetsPath}${favicon}`} />
            {date && <meta name="date" content={date} />}
            <meta name="prerender-status-code" content="200" />
            <meta name="prerender" content="true" />
            <meta httpEquiv="Content-Security-Policy" content={ContentSecurityPolicy.join(';')} />
        </Head>
    );
}
