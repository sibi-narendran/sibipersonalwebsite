import sridharImage from '../assets/sridher_vanbu.jpeg';
import parliamentImage1 from '../assets/image_1.jpeg';
import parliamentImage2 from '../assets/Image_2.jpeg';
import denmarkMeeting from '../assets/dooza-denmark-call.png';

const InterestingEventsPartOne = () => {
  return (
    <div className="events-shell min-h-screen bg-gray-50">
      {/* ZOHO CEO Event */}
      <section id="interesting-events" className="event-section py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 text-gray-900">
              Interesting events
            </h2>

            <h3 className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 text-gray-600">
              A tech billionaire invited me to his house.
            </h3>

            {/* Event Image */}
            <div className="text-center mb-8">
              <img
                src={sridharImage}
                alt="Meeting with ZOHO CEO"
                className="w-full max-w-lg mx-auto object-cover rounded-lg shadow-lg mb-3"
              />
            </div>

            {/* Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-6xl mx-auto">
              After ChatGPT, I wanted to build an AI company, so I began familiarizing myself with the technology. At the same time, I was eager to meet someone who had successfully built and scaled a tech business. That’s when I learned about Mr. Sridhar Vembu a Padma Shri awardee and the billionaire CEO of Zoho. I cold-emailed him, introducing myself and explaining my ambition to build a company and my desire to speak with him. To my surprise, he replied within an hour, inviting me to meet him. I went to his house, and we spoke for over two hours about AI, technology moats, and his origin story. I believe we both left with a lasting impact on each other.


              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Homelane CEO Event */}
      <section id="parliament-event" className="event-section py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl text-center mb-4 sm:mb-6 text-gray-600">
              Became friends with a member of parliament and told him AI will outperform him in writing literature
            </h3>

            {/* Event Images - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-8">
              <div className="text-center">
                <img
                  src={parliamentImage1}
                  alt="Meeting with Parliament Member - Image 1"
                  className="w-full object-cover rounded-lg shadow-lg mb-3"
                />
              </div>

              <div className="text-center">
                <img
                  src={parliamentImage2}
                  alt="Meeting with Parliament Member - Image 2"
                  className="w-full object-cover rounded-lg shadow-lg mb-3"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-6xl mx-auto">
              This is Mr. Su Venkatesan, a Member of Parliament from my constituency. I happened to meet him randomly on a flight to Bangalore. He is also a famous author of the book Vel Pari, a well known work of literature. We spoke throughout the entire flight, and he even walked with me all the way to my cab. I spoke to him about AI and jokingly told him that AI would soon write better literature than he does. I helped him download ChatGPT on his phone, and we experimented by writing multiple poems. We had a deep conversation about Tamil literature and politics his favorite topics. We became friends and still keep in touch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="denmark-event" className="event-section denmark-event py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto denmark-card">
            <div className="denmark-copy">
              <p className="section-kicker">Copenhagen · Dooza</p>
              <h3>A Member of Parliament of Denmark booked a Dooza support call.</h3>
              <p>
                Jeppe Søe, a Member of Parliament of Denmark, was already using Dooza and booked a customer-support meeting with me.
                It was a meaningful reminder that the work can travel well beyond the room where it begins.
              </p>
            </div>
            <img src={denmarkMeeting} alt="Dooza customer-support call with Jeppe Søe" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterestingEventsPartOne;
