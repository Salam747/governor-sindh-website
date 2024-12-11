import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[650px] bg-cover bg-center bg-gray-100">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-[url('/assets/house.jpg')] bg-cover bg-center opacity-15"></div>

      <div className="relative z-10 flex h-full">
        {/* Left Section */}
        <div className='flex flex-col justify-center items-start py-24 px-14 w-[50%]'>
          <div>
            <h1 className='text-blue-800 font-extrabold text-[65px] mt-24'>Governor Sindh</h1>
            <h2 className='text-blue-700 text-[40px] -my-4'>Kamran Khan Tessori</h2>
            <h3 className='text-sky-400 text-[45px] mt-6 font-extrabold'>
              Certified Cloud Applied Generative AI Engineer (GenEng)
            </h3>
            <div className='flex flex-col justify-center mr-12 items-start font-extrabold text-blue-800 text-[20px]'>
              <p className='pb-2 text-[25px]'>Earn up to $5,000 / month</p>    
              <p className='pr-12 pb-2 text-[25px]'>Now admissions are open in <br />Hyderabad</p>
              <button id='apply' className='bg-blue-800 text-white mt-2 py-2 px-12 rounded-lg hover:bg-blue-600 cursor-pointer'>Apply Now</button>
              <div className='flex flex-row justify-center items-start px-[150px] -mt-14'>
                <div className='px-24 text-[34px]'>562,143 <p className='font-sans text-[12px]'>Accepted Applications</p></div> 
              </div>
            </div>
          </div>
        </div>

        {/* Right Section for Image */}
        <div className='flex justify-end items-center w-[50%] h-full'>
          <div className='relative w-full h-full'>
            <Image
              src="/assets/governor.png"
              alt="hero-image"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
