import React from 'react';
import loyolaImage from '../assets/loyola_college.jpeg';
import iesegImage from '../assets/IESEG IMAGE.jpg';

const CollegeDropoutSection = () => {
  return (
    <div className="college-shell bg-white text-gray-800">
      {/* College Section */}
      <section id="college" className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              College drop out
            </h2>

            {/* College Images - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="text-center">
                <img
                  src={loyolaImage}
                  alt="Loyola College Chennai"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">Loyola College, Chennai</h3>
              </div>

              <div className="text-center">
                <img
                  src={iesegImage}
                  alt="IESEG School of Management"
                  className="w-full h-48 object-cover rounded-lg shadow-lg mb-3"
                />
                <h3 className="text-lg font-semibold text-gray-900">IESEG School of Management, France</h3>
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              I did my BBA at Loyola and IESEG in France. Out of 43 students, 18 went to France, while the others either had to repeat a year or dropped out. I was one of the 18 who went, but I was the only one who dropped out during the first semester to return to India and scale my business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollegeDropoutSection;
