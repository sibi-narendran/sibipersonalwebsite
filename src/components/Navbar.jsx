import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down
      } else {
        setIsVisible(true); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`site-navigation fixed top-0 w-full z-50 bg-white shadow-sm border-b border-gray-100 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="navigation-inner w-full px-6 sm:px-8">
        <div className="flex justify-between items-center h-16">
          <a className="navigation-name" href="#home">Sibi Narendran<span>.</span></a>
          <div className="navigation-links" aria-label="Sections">
            <a href="#ventures">Ventures</a>
            <a href="#interesting-events">Stories</a>
            <a href="#college">About</a>
          </div>
          {/* Social Media Icons */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/sibi-narendran-1a5a19150/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 active:text-blue-800 hover:scale-110 active:scale-95 transition-all duration-200 transform"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
            </a>
            <a
              href="https://x.com/sibinarendran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 active:text-black hover:scale-110 active:scale-95 transition-all duration-200 transform"
              aria-label="Twitter/X Profile"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
