import profile from '../assets/Sibi_pic.jpeg';

const HeroSection = () => {
  return (
    <div className="hero-shell min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section id="home" className="hero-section min-h-screen flex items-center justify-center pt-4 sm:pt-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <p className="section-kicker">Founder · Operator · Builder</p>
          {/* Profile Picture */}
          <div className="mb-6 sm:mb-8">
            <img
              src={profile}
              alt="Sibi Narendran"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full object-cover shadow-lg border-2 border-blue-100"
            />
          </div>

          {/* Text Content */}
          <div>
            {/* Main Introduction */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 px-2">
              Sibi Narendran
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 px-2">
              Ordinary guy with extra ordinary abilities.
            </p>
            <p className="hero-note">Building businesses from Chennai, India.</p>
            <a className="hero-blog-button" href="/blog">Read the blog <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
