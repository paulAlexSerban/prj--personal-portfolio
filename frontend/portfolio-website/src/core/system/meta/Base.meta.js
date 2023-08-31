import Head from 'next/head';
import { trimPageDescription } from '@/core/utils/TextUtils';

export default function BaseMeta({ title, description, keywords, robots, assetsPath, author, favicon, date }) {
    return (
        <Head>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={trimPageDescription(description)} />}
            {keywords && <meta name="keywords" content={keywords} />}
            {author && <meta name="author" content={author} />}
            {robots && <meta name="robots" content={robots} />}
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href={`${assetsPath}/icons${favicon}`} />
            {date && <meta name="date" content={date} />}
            <meta name="prerender-status-code" content="200" />
            <meta name="prerender" content="true" />
        </Head>
    );
}
