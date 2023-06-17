/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://site-url-undefined.com',
  generateRobotsTxt: true, 
  priority: 0.9,
  generateIndexSitemap: false
}