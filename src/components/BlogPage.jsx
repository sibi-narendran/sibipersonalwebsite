const posts = [
  {
    date: '22 AUG 2026',
    title: 'We may not need a 3D world to begin building AGI.',
    excerpt: 'Today’s LLMs can be training wheels. A persistent text world could be where continuously learning agents develop through memory, action, and consequences.',
    href: '/blog/text-first-agi',
  },
];

const BlogPage = () => (
  <div className="blog-index">
    <header className="blog-index__header">
      <a className="blog-index__brand" href="/">Sibi Narendran<span>.</span></a>
      <a className="blog-index__back" href="/">← Portfolio</a>
    </header>
    <main className="blog-index__content">
      <p className="section-kicker">Blog</p>
      <h1>Ideas worth testing.</h1>
      <p className="blog-index__intro">Writing on intelligence, systems, and building companies.</p>
      <div className="blog-post-list">
        {posts.map((post) => (
          <article className="blog-card" key={post.href}>
            <p>{post.date}</p>
            <h2><a href={post.href}>{post.title}</a></h2>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <a className="blog-card__read" href={post.href}>Read article →</a>
          </article>
        ))}
      </div>
    </main>
  </div>
);

export default BlogPage;
