import React from 'react';

const ThreeAfter = () => {
  return (
    <div className='h-auto lg:h-screen'>
      <div className="flex lg:flex-nowrap flex-wrap  lg:w-[95%] w-[90%] mx-auto mt-40">
      <img src="./Images/Lines1.png" className="absolute right-0  z-10 h-[70vh] w-[20%]" alt="djrio" />

        {/* Text Section */}
        <div className="lg:w-1/2 xl:w-1/2 md:w-2/3 sm:w-full   px-2  w-full mx-auto">
          <h3 className="text-xl xl:text-3xl lg:text-3xl font-sans leading-[44px] font-medium md:text-2xl sm:text-xl text-[#193766] w-full xl:w-4/5 lg:w-4/5 md:w-3/4 sm:w-full">
            Entrepreneur-Investor Collaboration Through Location Integration
          </h3>
          <p className="text-sm xl:text-lg font-sans font-normal  lg:text-sm md:text-xs sm:text-xs text-gray-500 my-2 leading-7">
            Integration of location features into your app enriches user experience and fosters seamless connections, empowering entrepreneurs and investors alike. With this integration, users can easily locate each other on Google Maps, facilitating direct connections and fostering collaborations.
          </p>
          <div className="flex gap-3 text-sm xl:text-base lg:text-base md:text-sm sm:text-xs text-gray-800">
            <div className="h-4 w-8 bg-[#3B82F6] mt-1"></div>
            <p>
              <span className="text-[#3B82F6] font-sans font-bold text-[18px]">Entrepreneurs </span>
              can identify potential investors in their vicinity, streamlining the networking process.
            </p>
          </div>
          <div className="flex gap-3 text-sm xl:text-base lg:text-base md:text-sm sm:text-xs text-gray-800">
            <div className="h-4 w-8 bg-[#3B82F6] mt-1"></div>
            <p>
              <span className="text-[#3B82F6] font-sans font-bold text-[18px]">Investors </span>
              can pinpoint promising startups or businesses nearby, enhancing their investment scouting efforts.
            </p>
          </div>
          <div className="flex gap-3 text-sm xl:text-base lg:text-base md:text-xs sm:text-xs text-gray-800">
            <div className="h-4 w-8 bg-[#3B82F6] mt-1"></div>
            <p>
              <span className="text-[#3B82F6] font-sans font-bold text-[18px]">Viewers </span>
              browsing the platform can leverage location data to discover entrepreneurial ventures and investment opportunities in their local area.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[60%] overflow-x-hidden overflow-y-hidden w-[90%] mx-auto px-2 relative bottom-0  lg:bottom-52   lg:mt-0 mt-40 z-10">
        <img 
  src="./Images/Iphone15.png" 
  className="
    w-[700px] 
    h-auto 
    sm:h-[70vh] 
    md:h-[80vh] 
    lg:h-[900px] 
    lg:w-[900px]
    transform 
    rotate-[30deg]  
  "  
  alt="Profile"
/>
        </div>
      </div>
    </div>
  );
};

export default ThreeAfter;
