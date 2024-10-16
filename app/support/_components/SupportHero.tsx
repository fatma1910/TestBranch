import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react'; 
import React from 'react';

const SupportHero = ({ setSearchTerm }: { setSearchTerm: (value: string) => void }) => {
  return (
    <div className='bg-[#252621] h-[273px] flex flex-col gap-6 sm:gap-9 items-center justify-center text-white px-4'>
      <div className='flex flex-col justify-center items-center gap-2 text-center'>
        <h3 className='text-[24px] sm:text-[36px] leading-8 sm:leading-10 font-semibold'>
          Help and Support
        </h3>
        <p className='text-[14px] sm:text-[18px] leading-5 font-extralight'>
          Quick assistance on billing, payments, subscription, and integration
        </p>
      </div>

      <div className='relative w-full max-w-[620px]'>
        <Input 
          className='bg-transparent w-full rounded-full h-[44px] sm:h-[52px] border pr-10' 
          placeholder='Search for topic' 
          onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm on change
        />
        <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9F9F9F]' /> 
      </div>
    </div>
  );
};

export default SupportHero;
