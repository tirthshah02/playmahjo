import rss from '@astrojs/rss';

export async function GET(context) {
  const files = import.meta.glob('./**/*.md', { eager: true });

  const items = Object.entries(files)
    .filter(([, mod]) => mod.frontmatter?.date && mod.frontmatter?.title)
    .map(([path, mod]) => {
      const slug = path.replace(/^\.\//, '').replace(/\.md$/, '');
      return {
        title: mod.frontmatter.title,
        description: mod.frontmatter.description ?? '',
        pubDate: new Date(mod.frontmatter.date),
        link: `/${slug}`,
      };
    })
    .sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: 'Mahjo — The Mahjong Knowledge Hub',
    description: 'Strategy guides, rules, variants, and community content for Mahjong players.',
    site: context.site,
    items,
    customData: `<language>en-us</language>`,
  });
}
