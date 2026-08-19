import sureshTimbersImage from '../assets/suresh_timbers.jpeg';
import interioLogo from '../assets/interio_logo.png';
import doozaWordmark from '../assets/dooza-wordmark-dark.webp';
import doozaIcon from '../assets/dooza-icon.webp';

const Ventures = () => {
  return (
    <div className="ventures-shell min-h-screen bg-white">
      <section id="ventures" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="venture-heading text-center mb-12 sm:mb-16">
            <p className="section-kicker">The work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">My Ventures</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              Building businesses and creating value through innovation and strategic thinking
            </p>
          </div>

          <div className="venture-stack space-y-12 sm:space-y-16">
            <article className="venture-panel timber-panel">
              <div className="venture-grid">
                <div className="venture-intro">
                  <span className="venture-index">01</span>
                  <h3>Suresh Timbers</h3>
                  <p className="venture-meta">Digital marketing and sales · Started in 2021 at age 16</p>
                  <div className="venture-stat"><strong>$130K</strong><span>monthly sales now</span></div>
                </div>
                <div className="venture-image"><img src={sureshTimbersImage} alt="Suresh Timbers Business" /></div>
              </div>
              <div className="venture-story">
                <p>When I was 16, I took over digital marketing for my father&apos;s company, Suresh Timbers. At the time, sales were around $10,000/month. I made a bold bet, scaled the ad budget and launched multiple high-production video shoots. But for the first three months, nothing worked. Zero sales. Everyone turned against me, my own team, my father, even the company wanted to pull the plug. The pressure was intense. I was still a teenager, carrying the weight of the business on my shoulders. But I didn&apos;t quit. I doubled down, waited, and finally got results the following month. That early failure, rejection, and eventual comeback built something deeper in me, resilience under pressure.</p>
              </div>
            </article>

            <article className="venture-panel interio-panel">
              <div className="venture-grid venture-grid-reverse">
                <div className="venture-image logo-image"><img src={interioLogo} alt="Interio Square Logo" /></div>
                <div className="venture-intro">
                  <span className="venture-index">02</span>
                  <h3>Interio Square</h3>
                  <p className="venture-meta">Interior design · Founded in 2023 at age 18</p>
                  <div className="venture-stat"><strong>~$2M</strong><span>yearly sales now</span></div>
                </div>
              </div>
              <div className="venture-story">
                <p>Interio Square was my second and hardest venture. I started it with confidence, but quickly realized it was far tougher than I imagined. I had to handle both sales and production without proper systems, no software, no showroom, and not even machinery, we outsourced almost everything. It was mistake after mistake. I was trying to bootstrap it from scratch and got punched in the gut over and over again. Originally, it was just supposed to be a summer trial before I left to study in France. But I couldn&apos;t walk away, I didn&apos;t have the heart to shut it down. So I dropped out. After months of relentless grind, the business finally turned a corner. We became profitable, and today Interio Square is nearing $2M in yearly sales. It now funds my next company, an AI venture tackling U.S. healthcare billing.</p>
              </div>
            </article>

            <article className="venture-panel dooza-panel">
              <div className="venture-grid">
                <div className="venture-intro">
                  <span className="venture-index">03</span>
                  <h3>Dooza</h3>
                  <p className="venture-meta">Forward-deployed AI engineering · Founded in 2024</p>
                  <a className="venture-link" href="https://www.dooza.ai" target="_blank" rel="noreferrer">dooza.ai ↗</a>
                </div>
                <div className="venture-image dooza-image">
                  <img className="dooza-icon" src={doozaIcon} alt="Dooza icon" />
                  <img className="dooza-wordmark" src={doozaWordmark} alt="Dooza" />
                </div>
              </div>
              <div className="venture-story">
                <p>Dooza is my most recent and most ambitious venture. We embed with businesses, find the work that repeats, and deploy AI employees that handle it. Before starting Dooza, I booked an Airbnb in Bangalore, locked myself in, and taught myself AI and coding. After a month, I wasn&apos;t a genius, but I had enough confidence to start building. Since then, we&apos;ve already pivoted once. I believe this will be the biggest company I&apos;ve ever built. Let&apos;s see where it takes me.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ventures;
