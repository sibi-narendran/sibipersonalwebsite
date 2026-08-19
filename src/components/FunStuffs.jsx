import sibiVideo from '../assets/Sibi_video.mp4';
import sibiSong from '../assets/Sibi_song.mp4';
import songVideo from '../assets/song.mp4';
import swimPoster from '../assets/sibi-swim-poster.jpg';
import sibiSongPoster from '../assets/sibi-song-poster.jpg';
import guitarSongPoster from '../assets/guitar-song-poster.jpg';

const FunStuffs = () => {
  return (
    <div className="fun-shell min-h-screen bg-white">
      {/* Main Header */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
              Fun stuffs
            </h2>

            <h3 className="text-xl sm:text-2xl text-center mb-8 sm:mb-12 text-gray-600">
              Won a $500 bet by swimming at 3 AM in 8°C water
            </h3>

            {/* Video and Content Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">

              {/* Video Section - Left */}
              <div className="text-center">
                <video
                  controls
                  className="w-full max-w-xs mx-auto rounded-lg shadow-lg"
                  poster={swimPoster}
                >
                  <source src={sibiVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Content - Right */}
              <div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  What started as a casual conversation with friends turned into a bold bet.
                  They didn&apos;t think I&apos;d actually do it swim in freezing water at 3 AM.
                  But I never back down from a challenge not for money, just for fun.
                </p>
              </div>
            </div>

            {/* Musical Hobbies Section */}
            <div className="mt-16 sm:mt-20">
              <h3 className="text-xl sm:text-2xl text-center mb-8 sm:mb-12 text-gray-600">
                Amateur guitar player and singer, learned from YouTube
              </h3>

              {/* Music Videos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">

                {/* First Music Video */}
                <div className="text-center">
                  <div className="w-full max-w-sm mx-auto">
                    <div className="aspect-video bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-4 flex items-center justify-center">
                      <video
                        controls
                        className="max-w-full max-h-full object-contain"
                        poster={sibiSongPoster}
                      >
                        <source src={sibiSong} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <p className="text-base text-gray-600">
                    Singing my favorite song
                  </p>
                </div>

                {/* Second Music Video */}
                <div className="text-center">
                  <div className="w-full max-w-sm mx-auto">
                    <div className="aspect-video bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-4 flex items-center justify-center">
                      <video
                        controls
                        className="max-w-full max-h-full object-contain"
                        poster={guitarSongPoster}
                      >
                        <source src={songVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                  <p className="text-base text-gray-600">
                    Playing guitar and singing
                  </p>
                </div>
              </div>

              {/* Musical Content */}
              <div className="text-center mt-8">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  Music has always been a passion of mine. Whether it&apos;s strumming the guitar or
                  singing along to my favorite songs, it&apos;s my way to unwind and express creativity.
                  These moments capture the joy I find in making music.
                </p>
              </div>
            </div>

            {/* Additional Interests Section */}
            <div className="mt-16 sm:mt-20">
              <h3 className="text-xl sm:text-2xl text-center mb-8 sm:mb-12 text-gray-600">
                Other passions and interests
              </h3>

              <div className="text-center">
                {/* Reading and Writing */}
                <div className="flex items-center justify-center mb-4">
                  <i className="fas fa-book text-blue-600 text-2xl mr-3"></i>
                  <i className="fas fa-pen-fancy text-purple-600 text-2xl"></i>
                </div>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  I love reading books, I write poems, and I think about how things work all the time, especially businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunStuffs;
