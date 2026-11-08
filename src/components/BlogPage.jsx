const posts = [
  {
    date: '09 NOV 2026',
    title: 'The spreadsheet killed a job. Then it grew one.',
    excerpt: 'VisiCalc cut bookkeeping clerk jobs and grew accounting jobs. What that predicts for AI agents in small business, with three dated calls.',
    href: '/spreadsheet-killed-a-job-grew-one',
  },
  {
    date: '07 NOV 2026',
    title: 'AI is closer to industrialization than to any other technology',
    excerpt: 'Power and Progress by Acemoglu and Johnson, applied to AI: why it looks like industrialization, not the internet, and who gets the gains.',
    href: '/ai-is-industrialization-not-another-gadget',
  },
  {
    date: '06 NOV 2026',
    title: 'My first AI 2029 prediction came due. Here is the grade.',
    excerpt: 'The US midterms graded the first of 18 dated calls in my AI 2029 scenario: hit on the House and mixed AI super PAC results, wrong on "narrowly".',
    href: '/first-ai-2029-prediction-graded',
  },
  {
    date: '02 NOV 2026',
    title: 'Every small business will hire AI employees. I am betting my company on it.',
    excerpt: 'Why AI employees are the biggest shift for small business since the internet, the Klarna warning, and three dated predictions you can grade me on.',
    href: '/ai-employees-every-small-business',
  },
  {
    date: '19 OCT 2026',
    title: 'AI 2027 vs reality: a live tracker.',
    excerpt: 'Every dated AI 2027 prediction next to what has really happened, with sources. Calls still in their window show progress so far and the months left.',
    href: '/ai-2027-tracker',
  },
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
