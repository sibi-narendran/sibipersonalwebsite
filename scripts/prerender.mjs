// Post-build: write crawlable HTML (head tags + static text) for each SPA route,
// so Google and AI engines (which often skip JavaScript) can read the site.
// React's createRoot replaces the static #root content on load.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const SITE = 'https://www.sibinarendran.com';
const DIST = 'dist';
const base = readFileSync(join(DIST, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const person = {
  '@type': 'Person',
  '@id': `${SITE}/#sibi`,
  name: 'Sibi Narendran',
  url: SITE,
  image: `${SITE}/sibi-narendran.jpeg`,
  jobTitle: 'Founder',
  description: 'Founder of Dooza, an AI-native company that builds AI employees for small businesses. Entrepreneur from Chennai, India.',
  worksFor: { '@type': 'Organization', name: 'Dooza', url: 'https://dooza.ai' },
  founder: [
    { '@type': 'Organization', name: 'Dooza', url: 'https://dooza.ai' },
    { '@type': 'Organization', name: 'Interio Square' },
  ],
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Loyola College, Chennai' },
    { '@type': 'CollegeOrUniversity', name: 'IESEG School of Management' },
  ],
  homeLocation: { '@type': 'Place', name: 'Chennai, India' },
  knowsAbout: ['Artificial intelligence', 'AI agents', 'Entrepreneurship', 'Small business automation'],
  sameAs: [
    'https://www.linkedin.com/in/sibi-narendran-1a5a19150/',
    'https://x.com/sibinarendran',
    'https://github.com/sibi-narendran',
  ],
};

const wrap = (inner) => `<main style="max-width:760px;margin:0 auto;padding:32px 20px;font-family:'DM Sans',system-ui,sans-serif;color:#0f172a;background:#f8f7f2;line-height:1.6">${inner}</main>`;
const nav = `<nav><a href="/">Sibi Narendran</a> · <a href="/blog">Blog</a> · <a href="/ai-2027-tracker">AI 2027 tracker</a> · <a href="/ai-2029">AI 2029</a> · <a href="https://dooza.ai">Dooza</a></nav>`;

const routes = [
  {
    path: '/',
    title: 'Sibi Narendran: Founder of Dooza, AI Entrepreneur from Chennai',
    description: 'Sibi Narendran is the founder of Dooza, an AI-native company building AI employees for small businesses. He scaled Suresh Timbers and Interio Square before turning to AI.',
    type: 'profile',
    jsonld: [
      { '@context': 'https://schema.org', '@type': 'ProfilePage', url: `${SITE}/`, mainEntity: person },
      { '@context': 'https://schema.org', '@type': 'WebSite', url: `${SITE}/`, name: 'Sibi Narendran', author: { '@id': `${SITE}/#sibi` } },
    ],
    body: wrap(`${nav}
<h1>Sibi Narendran</h1>
<p><strong>Founder of <a href="https://dooza.ai">Dooza</a>.</strong> Ordinary guy with extra ordinary abilities. Building businesses from Chennai, India.</p>
<h2>Ventures</h2>
<h3>Dooza (founded 2024)</h3>
<p>Dooza is an AI-native company that builds AI employees for small businesses. Before starting it, Sibi booked an Airbnb in Bangalore, locked himself in and taught himself AI and coding.</p>
<h3>Interio Square (founded 2023, at 18)</h3>
<p>An interior design business he bootstrapped with no showroom, no software and no machinery. He dropped out of his studies in France to run it. It is nearing $2M in yearly sales.</p>
<h3>Suresh Timbers (from 2021, at 16)</h3>
<p>He took over digital marketing for his father's company at 16, when sales were around $10,000 a month. Three months of zero results, then the bet paid off: about $130K in monthly sales now.</p>
<h2>Interesting events</h2>
<ul>
<li>Cold-emailed Sridhar Vembu, the billionaire CEO of Zoho. He replied within an hour and invited Sibi to his house for a two-hour talk on AI and technology moats.</li>
<li>Met Su Venkatesan, Member of Parliament and author of Vel Pari, on a flight, and told him AI would soon write better literature than he does.</li>
<li>Jeppe Søe, a Member of Parliament of Denmark, was already using Dooza and booked a support call with him.</li>
<li>Sold $3,000 of furniture to the MD of DiaSorin India after one flight conversation, at 17.</li>
</ul>
<h2>Education</h2>
<p>BBA at Loyola College, Chennai and IESEG School of Management, France. Dropped out in the first semester in France to return to India and scale his business.</p>
<h2>Writing</h2>
<ul>
<li><a href="/ai-2027-tracker">AI 2027 vs reality: a live tracker</a></li>
<li><a href="/blog/text-first-agi">We may not need a 3D world to begin building AGI</a></li>
<li><a href="/ai-2029">AI 2029: a scenario written in October 2026</a></li>
</ul>
<p>Contact: <a href="https://www.linkedin.com/in/sibi-narendran-1a5a19150/">LinkedIn</a> · <a href="https://x.com/sibinarendran">X</a></p>`),
  },
  {
    path: '/blog',
    title: 'Blog: Ideas Worth Testing | Sibi Narendran',
    description: 'Writing by Sibi Narendran, founder of Dooza, on AI, intelligence, systems and building companies.',
    type: 'website',
    jsonld: [{ '@context': 'https://schema.org', '@type': 'Blog', url: `${SITE}/blog`, name: 'Sibi Narendran blog', author: person }],
    body: wrap(`${nav}
<h1>Blog</h1><p>Ideas worth testing. Writing on intelligence, systems, and building companies.</p>
<ul>
<li><a href="/ai-2027-tracker">AI 2027 vs reality: a live tracker</a> (19 Oct 2026). Every dated AI 2027 prediction next to what has really happened, with sources.</li>
<li><a href="/blog/text-first-agi">We may not need a 3D world to begin building AGI</a> (22 Aug 2026). Today's LLMs can be training wheels; a persistent text world could be where continuously learning agents develop.</li>
</ul>`),
  },
  {
    path: '/blog/text-first-agi',
    title: 'We May Not Need a 3D World to Begin Building AGI | Sibi Narendran',
    description: 'A working thesis: before simulating physics, build a persistent text world where AI agents have memory, goals, actions and consequences. By Sibi Narendran.',
    type: 'article',
    jsonld: [{ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'We may not need a 3D world to begin building AGI', url: `${SITE}/blog/text-first-agi`, datePublished: '2026-08-22', author: person, publisher: { '@type': 'Organization', name: 'Dooza', url: 'https://dooza.ai' } }],
    bodyFromComponent: 'src/components/TextFirstAgi.jsx',
  },
];

// Pull readable text from a JSX component (headings and paragraphs) for the static copy.
function jsxToHtml(file) {
  const src = readFileSync(file, 'utf8');
  const out = [];
  const re = /<(h1|h2|h3|p|li)\b[^>]*>([\s\S]*?)<\/\1>/g;
  let m;
  while ((m = re.exec(src))) {
    let t = m[2].replace(/\{['"`]\s*['"`]\}/g, ' ').replace(/<[^>]+>/g, '').replace(/\{[^}]*\}/g, '').replace(/\s+/g, ' ').trim();
    if (t) out.push(`<${m[1]}>${t}</${m[1]}>`);
  }
  return wrap(`${nav}\n${out.join('\n')}`);
}

for (const r of routes) {
  const url = SITE + (r.path === '/' ? '/' : r.path);
  const head = [
    `<meta name="description" content="${esc(r.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${r.type}" />`,
    `<meta property="og:title" content="${esc(r.title)}" />`,
    `<meta property="og:description" content="${esc(r.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${SITE}/sibi-narendran.jpeg" />`,
    `<meta name="twitter:card" content="summary" />`,
    `<meta name="twitter:site" content="@sibinarendran" />`,
    `<meta name="author" content="Sibi Narendran" />`,
    ...r.jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`),
  ].join('\n    ');
  const body = r.bodyFromComponent ? jsxToHtml(r.bodyFromComponent) : r.body;
  const html = base
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(r.title)}</title>\n    ${head}`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (!html.includes('application/ld+json') || !html.includes(body.slice(0, 40))) throw new Error('prerender failed for ' + r.path);
  const file = r.path === '/' ? join(DIST, 'index.html') : join(DIST, r.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log('prerendered', r.path, html.length);
}
