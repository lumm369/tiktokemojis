/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tiktokemojis.cc',
  generateRobotsTxt: true,
  trailingSlash: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://tiktokemojis.cc/sitemap.xml',
    ],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private', '/admin'],
      },
    ],
  },
  exclude: ['/private', '/admin'],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
}; 