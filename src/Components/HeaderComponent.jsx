import React from 'react';

import { LuDownload, LuPlayCircle } from 'react-icons/lu';
import Images from './menus/Images';

const HeaderComponent = () => {
  return (
    <div className="bg-[#e4efff] pb-20 flex md:flex-wrap h-auto    lg:flex-row ">
      {/* Content Section */}
      <div className="ml-4  md:ml-16 pt-10  md:pt-16 lg:w-1/2 ">
        <p className="text-[#1a3766]">
          <span className="text-[36px] sm:text-[40px] md:text-[50px] leading-tight">
            Revolutionizing social <br /> media for
          </span>{" "}
          <br />{" "}
          <span className="font-bold leading-tight md:leading-[74px] text-4xl sm:text-5xl md:text-5xl underline">
            Entrepreneurs and <br /> Investors
          </span>
        </p>
        <p className="text-[#697B98] text-[18px] sm:text-[20px] md:text-[22px] xl:pr-52 pr-0 lg:pr-8 leading-[28px] sm:leading-[32px] md:leading-[36px] mt-4 md:mt-5 md:w-3/4 lg:w-full">
          Turn your vision into reality. Join the exclusive network connecting
          ambitious entrepreneurs with investors.
        </p>
        <div className="flex flex-col sm:flex-row mt-8 md:mt-16 space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            className="py-3 sm:py-4 px-5 rounded flex items-center gap-2 text-white bg-[#6165F3] shadow-lg"
            style={{ boxShadow: "0px 15px 15px #6166f350" }}
          >
            <LuDownload className='text-2xl'/> Download Now
          </button>
          <button className="py-3 sm:py-4 px-5 flex items-center gap-2 rounded bg-[#C6DBFF] text-[#6165F3]">
            <LuPlayCircle className='text-2xl' /> See in Action
          </button>
        </div>
      </div>

{/* <div>
  <img src="./Images/threeimgremo.png" className='  h-[850px] w-[600px]  absolute  top-0 right-0' alt="" />
</div> */}
      {/* Image Section */}
      <div className="mt-8 md:mt-0 w-full lg:w-1/2 flex justify-center    md:justify-center  lg:justify-end">
        <Images />
      </div> 
    </div>
  );
};

export default HeaderComponent;
