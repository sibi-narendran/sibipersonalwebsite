import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="site-footer bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Sibi Narendran
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Ordinary guy with extra ordinary abilities
            </p>
          </div>

          {/* Contact Section */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Get In Touch</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:sibinarendran@gmail.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                sibinarendran@gmail.com
              </a>
              <a
                href="https://calendly.com/sibinarendran/new-meeting"
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
                Schedule a Meeting
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/sibi-narendran-1a5a19150/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 hover:scale-110 transition-all duration-200 transform"
                aria-label="LinkedIn Profile"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
              </a>
              <a
                href="https://x.com/sibinarendran"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-100 hover:scale-110 transition-all duration-200 transform"
                aria-label="Twitter/X Profile"
              >
                <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Sibi Narendran. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
