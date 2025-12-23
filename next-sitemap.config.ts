import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://buyobot.dithari.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
};

export default config;