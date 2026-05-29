const SITE = 'https://playmahjo.com';

const staticRoutes = [
  { url: '/',           priority: '1.0', changefreq: 'weekly'  },
  { url: '/blog/',      priority: '0.8', changefreq: 'daily'   },
  { url: '/learn/',     priority: '0.8', changefreq: 'weekly'  },
  { url: '/strategy/',  priority: '0.8', changefreq: 'weekly'  },
  { url: '/variants/',  priority: '0.8', changefreq: 'weekly'  },
  { url: '/community/', priority: '0.8', changefreq: 'weekly'  },
];

export async function GET() {
  const files = import.meta.glob('./**/*.md', { eager: true });

  const articleUrls = Object.entries(files)
    .filter(([, mod]) => mod.frontmatter?.date && mod.frontmatter?.title)
    .map(([path, mod]) => {
      const slug = path.replace(/^\.\//, '').replace(/\.md$/, '');
      return {
        url: `/${slug}/`,
        lastmod: mod.frontmatter.date,
        priority: '0.7',
        changefreq: 'monthly',
      };
    })
    .sort((a, b) => new Date(b.lastmod) - new Date(a.lastmod));

  const allUrls = [
    ...staticRoutes,
    ...articleUrls,
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ url, lastmod, priority, changefreq }) => `  <url>
    <loc>${SITE}${url}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
