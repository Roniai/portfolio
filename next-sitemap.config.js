/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://fehizoroniaina-indrafo.vercel.app',
  generateRobotsTxt: true, // génère robots.txt automatiquement
  changefreq: 'weekly',
  priority: 1.0,

  // Si tu veux, tu peux déclarer la seule page
  additionalPaths: async (config) => [
    { loc: '/', lastmod: new Date().toISOString() }
  ],
};