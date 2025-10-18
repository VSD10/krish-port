import React from 'react';

const Hero: React.FC = () => {
  // USER: After deploying, place your image in a public-accessible folder
  // and replace this URL with the path to your image, for example: '/my-photo.jpg'.
  const portraitImageUrl = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop';

  return (
    <main className="flex-grow w-full text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-24 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Left side for Text (Constrained width) */}
          <div className="w-full md:w-1/2 lg:w-5/12 text-center md:text-left flex-shrink-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold">
              Hello Guys
            </h1>
            <div className="flex items-baseline justify-center md:justify-start gap-x-3 mt-1">
              <span className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold">
                I'm
              </span>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-sans font-extrabold text-white leading-tight">
                HariKrishnan
              </h2>
            </div>
            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-orange-400 mt-2">
              Analyst
            </h3>
          </div>

          {/* Right side for Image */}
          <div className="w-full md:w-1/2 lg:w-7/12 flex justify-center">
             <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-white/10 rounded-full p-2">
              <img 
                src={portraitImageUrl} 
                alt="Portrait of HariKrishnan"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Hero;