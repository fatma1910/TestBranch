import React from 'react';

const CreatCerti = () => {
    return (
        <div className="bg-[url('/creste.png')] bg-center   rounded-2xl mx-4 sm:mx-10 md:mx-20 lg:mx-[83px] relative py-[39px] px-6 sm:px-12 md:px-20 lg:px-[326px] my-16 bg-blend-multiply">

        {/* <div className="absolute inset-0 bg-[#001A4C] opacity-50 rounded-2xl"></div> */}

        <div className='relative flex flex-col items-center justify-center z-10 text-center'>
            <h3 className='font-medium text-white leading-8 text-[24px] sm:text-[28px] md:text-[30px]'>
            Create Certificates with Blockchain Technology
            </h3>

            <h4 className='font-normal text-white leading-8 text-[16px] sm:text-[18px] md:text-[20px]'>
            Safety, Accessibility, and No Added Complexity!
            </h4>

            <button className='rounded-full border border-white px-4 py-2 text-white text-[16px] sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-[18px] mt-2'>
            Get Started - it’s free
            </button>
        </div>
        </div>
    );
};

export default CreatCerti;
