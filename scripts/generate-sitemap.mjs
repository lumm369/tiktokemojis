import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
import { Readable } from 'stream';
import { fileURLToPath } from 'url';

// 获取当前文件的目录路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 站点基本URL
const siteUrl = 'https://tiktokemojis.cc';

// 类别列表（与src/data/emojis.ts中的保持一致）
const categories = [
  { id: 'proud', name: 'Proud' },
  { id: 'happy', name: 'Happy' },
  { id: 'sad', name: 'Crying' },
  { id: 'surprised', name: 'Shocked' },
  { id: 'angry', name: 'Angry' },
  { id: 'cute', name: 'Cute' },
  { id: 'smug', name: 'Smug' },
  { id: 'other', name: 'Other' }
];

async function generateSitemap() {
  try {
    // 基本页面
    const pages = [
      { url: '/', changefreq: 'weekly', priority: 1.0 },
      { url: '/about', changefreq: 'monthly', priority: 0.7 },
      { url: '/terms', changefreq: 'monthly', priority: 0.5 },
      { url: '/privacy', changefreq: 'monthly', priority: 0.5 },
      { url: '/contact', changefreq: 'monthly', priority: 0.7 },
      { url: '/all-tiktok-emojis', changefreq: 'weekly', priority: 0.9 },
      { url: '/emojis', changefreq: 'weekly', priority: 0.8 },
      { url: '/tiktok-emoji-codes', changefreq: 'weekly', priority: 0.8 },
      { url: '/tiktok-emojis-download', changefreq: 'weekly', priority: 0.8 },
      { url: '/how-to-use-tiktok-emojis', changefreq: 'weekly', priority: 0.8 },
    ];

    // 添加类别页面
    categories.forEach(category => {
      pages.push({
        url: `/emojis/category/${category.id}-tiktok-emoji`,
        changefreq: 'weekly',
        priority: 0.8
      });
    });

    // 创建站点地图流
    const stream = new SitemapStream({ hostname: siteUrl });
    const data = await streamToPromise(
      Readable.from(pages).pipe(stream)
    );

    // 将站点地图写入文件
    fs.writeFileSync(path.join(path.resolve(__dirname, '..'), 'public', 'sitemap.xml'), data.toString());
    console.log('站点地图生成成功，包含类别页面！');
  } catch (error) {
    console.error('生成站点地图时发生错误:', error);
  }
}

generateSitemap(); 