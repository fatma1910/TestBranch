import React from 'react';
import Title from './Title';
import { boxData } from '@/constant';

const DegitalProp = () => {
  return (
    <div className='bg-[#F7F7F7] py-[63px] mx-4 sm:mx-10 md:mx-20 xl:mx-[81px] px-3  rounded-2xl my-24 flex items-center justify-center flex-col gap-11 '>
      <Title mainTitle={'RELIABLE DIGITAL PROPERTY'} description={'Why'} span={'TestBranch'} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7'>
        {boxData.map((box, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center py-4 bg-white rounded-xl gap-10 px-7 max-w-[340px]'
          >
            <h6 className='font-semibold text-[18px]'>{box.title}</h6>
            <box.icon className='h-[66px] w-[66px] text-[#1C1C1C]' strokeWidth={0.6} />
            <p className='leading-5 text-[18px] text-[#3E3D3D] font-light text-center'>
              {box.description}
            </p>
          </div>
        ))}
      </div>

      <button className='btn_main'> Get Started - it’s free</button>
    </div>
  );
};

export default DegitalProp;
