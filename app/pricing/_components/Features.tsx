'use client';

import { Title } from '@/app/_components';
import { boxData, text1, text2 } from '@/constant';
import React, { useState } from 'react';

const Features = () => {

  const [expandedBoxes, setExpandedBoxes] = useState(Array(boxData.length).fill(false));


  const toggleExpanded = (index: number) => {
    setExpandedBoxes((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded)) 
    );
  };

  

  return (
    <div className='mx-4 sm:mx-8 md:mx-[40px] lg:mx-[81px] rounded-[15px] bg-[#F7F7F7] px-6 sm:px-10 lg:px-[108px] py-6 sm:py-10 lg:py-[63px] flex flex-col justify-center items-center'>
      <Title mainTitle='RELIABLE DIGITAL PROPERTY' description='Features that' span='Everyone' others='Needs' />

      <div className='flex flex-col gap-4 mt-6 lg:mt-[56px] w-full'>

        {boxData.map((item, index) => (
          <div
            key={index}
            className='px-4 sm:px-6 lg:px-8 flex flex-col gap-6 justify-start md:flex-row py-4 border rounded-xl bg-white border-[#F0F0EF]'
          >

            <item.icon className='w-[45px] h-[45px] sm:w-[66px] sm:h-[66px] text-[#1C1C1C] flex-shrink-0' strokeWidth={1} />
            <div>
              <h6 className='text-[16px] sm:text-[18px] font-semibold mb-1'>{item.title}</h6>

              <p className='text-[14px] sm:text-[16px] text-[#3E3D3D] leading-6'>
                {expandedBoxes[index]
                  ? `${text1}`
                  : `${text2}`}
                <button onClick={() => toggleExpanded(index)} className='text-sec ml-2'>
                  {expandedBoxes[index] ? 'View Less' : 'View More'}
                </button>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
