/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://site-url-undefined.com',
    generateRobotsTxt: true,
    priority: 0.9,
    // // set true if there are more than 5000 pages in your project
    generateIndexSitemap: false,
    outDir: './out',
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};
