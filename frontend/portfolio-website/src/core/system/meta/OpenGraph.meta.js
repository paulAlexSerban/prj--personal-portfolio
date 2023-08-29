import Head from 'next/head';
import { trimPageDescription } from '@/core/utils/TextUtils';
export default function OpenGraphMeta({ type, title, description, url, site_name, locale, image, assetsPath, siteName }) {
    return (
        <Head>
            {type && <meta property="og:type" content={type} />}
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={trimPageDescription(description)} />}
            {url && <meta property="og:url" content={url} />}
            {site_name && <meta property="og:site_name" content={site_name} />}
            {locale && <meta property="og:locale" content={locale} />}
            {image && <meta property="og:image" content={`${assetsPath}/images${image}`} />}
            {image && <meta property="og:image:secure_url" content={`${assetsPath}/images${image}`} />}
            {image && <meta property="og:image:width" content="1280" />}
            {image && <meta property="og:image:height" content="720" />}
            {siteName && <meta property="og:site_name" content={siteName} />}
        </Head>
    );
}
