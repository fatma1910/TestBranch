import React from 'react';
import Title from './Title';
import Image from 'next/image';
import { possibilitiesData } from '@/constant';


const Possibilities = () => {
  return (
    <div className='mx-[16px] sm:mx-[40px] lg:mx-[81px] mt-20 pt-[32px] px-4 sm:px-[89px] bg-[#FFF9EA] rounded-2xl -z-10 relative flex flex-col lg:flex-row items-center overflow-hidden lg:justify-between'>
      <div className='flex flex-col'>
        <Title
          mainTitle={''}
          description={'New possibilities with'}
          span={'TestBranch'}
          others='digital certificates'
          className="text-start"
        />
        <div className='mt-[40px] flex flex-col gap-6'>
          {possibilitiesData.map(({ id, icon, title, description }) => (
            <div key={id} className='flex gap-4'>
              {icon}
              <div className='flex flex-col gap-[6px] max-w-[591px]'>
                <h6 className='text-[16px] sm:text-[18px] font-medium text-[#242521] leading-[22px]'>
                  {title}
                </h6>
                <p className='text-[14px] sm:text-[16px] leading-[22px] text-[#3E3D3D] font-light'>
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image src='/girl.png' alt={''} width={456} height={704} className='  '/>

    </div>
  );
};

export default Possibilities;
