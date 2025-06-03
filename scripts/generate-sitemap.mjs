import fs from 'fs';
import path from 'path';
import { SitemapStream, streamToPromise } from 'sitemap';
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
    // 基本页面（除了首页）
    const pages = [
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
    
    // 手动处理首页
    stream.write({ url: '', changefreq: 'weekly', priority: 1.0 });
    
    // 添加其他页面
    pages.forEach(page => {
      stream.write(page);
    });
    
    // 结束流
    stream.end();
    
    const data = await streamToPromise(stream);

    // 将站点地图写入文件
    fs.writeFileSync(path.join(path.resolve(__dirname, '..'), 'public', 'sitemap.xml'), data.toString());
    
    // 读取生成的文件并修复首页 URL（确保没有尾部斜杠）
    let sitemapContent = fs.readFileSync(path.join(path.resolve(__dirname, '..'), 'public', 'sitemap.xml'), 'utf8');
    sitemapContent = sitemapContent.replace(`<loc>${siteUrl}/</loc>`, `<loc>${siteUrl}</loc>`);
    fs.writeFileSync(path.join(path.resolve(__dirname, '..'), 'public', 'sitemap.xml'), sitemapContent);
    
    console.log('站点地图生成成功，包含类别页面！首页 URL 不带尾部斜杠');
  } catch (error) {
    console.error('生成站点地图时发生错误:', error);
  }
}

generateSitemap(); 