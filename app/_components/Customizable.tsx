import React from 'react';
import Title from './Title';
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { testimonials } from '@/constant';



const Customizable = () => {
  return (
    <div className='py-[116px] flex flex-col items-center justify-center'>
      <div className='flex flex-col items-center px-2'>
        <Title mainTitle='CUSTOMIZABLE TEMPLATES' description='Choose from a wide range of royalty free customizable ' span={'templates'} />

        <p className='text-[18px] text-center leading-6 text-[#3E3D3D]'>
          With 50+ pre-made templates for every use case, you can quickly and easily customize certificates to suit your needs.
        </p>
      </div>

      <div className=" mt-16 rounded-md  items-center justify-center relative overflow-hidden flex flex-col antialiased w-full">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>

      

      
      <button className='btn_main mt-16'>Get Started - it’s free</button>
    </div>
  );
};

export default Customizable;
