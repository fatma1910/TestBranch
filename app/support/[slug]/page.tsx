'use client'

import React, { useState } from 'react';
import mockData from '../_components/__mocks__/data';
import { BreadcrumbDemo } from '../_components/BreadCrumb';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AnimatePresence, motion } from 'framer-motion';


export interface Params {
  slug: string;
}

const Page = ({ params }: { params: Params }) => {
  const { slug } = params;

  const [isOpen, setIsOpen] = useState(false)

  const categoryData = mockData.find((category) =>
    category.items.some((item) => item.slug === slug)
  );

  const item = mockData
    .flatMap((category) => category.items) 
    .find((item) => item.slug === slug);
  

  if (!item) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-semibold">Item not found</h1>
      </div>
    );
  }

  return (
    <div className=" mt-7 mb-24 flex items-center justify-center">
      <div className='flex flex-col w-[887px] gap-8 mx-3'>
        <div className='flex items-center'>

        <div className={`w-full flex justify-between items-center ${isOpen? 'hidden' : '' }`}>
          <BreadcrumbDemo name={item.title} category={categoryData ? categoryData.category : "Unknown Category"}/>
          <Search className='w-[20px] h-5  cursor-pointer' strokeWidth={2} onClick={()=> setIsOpen(!isOpen)} />
          
        </div>

        <AnimatePresence>
            {isOpen && (
              <motion.div
                className="flex items-center"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: '100%', opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full max-w-full">
                  <Input className="bg-[#F8F8F8] w-full rounded-full h-[44px] sm:h-[48px] border pr-10" placeholder="Search for topic" />
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#9F9F9F]" />
                </div>
                <X className="h-6 w-6 cursor-pointer ml-3" onClick={() => setIsOpen(false)} strokeWidth={1} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div className="border rounded-xl py-6 px-7 ">
          <div className=' pb-5 border-b'>
            <h4 className='text-[28px] text-[#242521] leading-9  font-medium'>{item.title}</h4>
            <p className='text-[15.5px] text-[#858585] font-medium'>Last updated 6 months ago</p>
          </div>
          <div className='flex flex-col py-5 gap-7'>
            <p className='text-[#4E4E4E] font-light text-[17px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui eleifend, congue lorem in, blandit arcu. Nullam egestas varius magna. Vivamus non ultricies dolor. Morbi eleifend vestibulum congue. Suspendisse ultricies massa ut neque feugiat mattis. Duis malesuada interdum metus, a molestie lorem fermentum ut. Curabitur semper fringilla mollis. Mauris malesuada malesuada aliquet. Suspendisse et faucibus lorem. Ut condimentum sapien sit amet risus venenatis, vitae ornare ex tempor. Aenean in feugiat tellus. Donec porta ex a turpis pulvinar faucibus.

            </p>
            <p className='text-[#4E4E4E] font-light text-[17px] leading-[22px]'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim dignissimos totam est facilis? Omnis vero blanditiis voluptates dolores sapiente. Quisquam earum corrupti quidem labore dolorum vel expedita doloribus numquam accusantium?
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui eleifend, congue lorem in, blandit arcu. Nullam egestas varius magna. Vivamus non ultricies dolor. Morbi eleifend vestibulum congue. Suspendisse ultricies massa ut neque feugiat mattis. Duis malesuada interdum metus, a molestie lorem fermentum ut. Curabitur semper fringilla mollis. Mauris malesuada malesuada aliquet. Suspendisse et faucibus lorem. Ut condimentum sapien sit amet risus venenatis, vitae ornare ex tempor. Aenean in feugiat tellus. Donec porta ex a turpis pulvinar faucibus.

            </p>
            <p className='text-[#4E4E4E] font-light text-[17px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui eleifend, congue lorem in, blandit arcu. Nullam egestas varius magna. Vivamus non ultricies dolor. Morbi eleifend vestibulum congue. Suspendisse ultricies massa ut neque feugiat mattis. Duis malesuada interdum metus, a molestie lorem fermentum ut. Curabitur semper fringilla mollis. Mauris malesuada malesuada aliquet. Suspendisse et faucibus lorem. Ut condimentum sapien sit amet risus venenatis, vitae ornare ex tempor. Aenean in feugiat tellus. Donec porta ex a turpis pulvinar faucibus.

            </p>
            <p className='text-[#4E4E4E] font-light text-[17px] leading-[22px]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui eleifend, congue lorem in, blandit arcu. Nullam egestas varius magna. Vivamus non ultricies dolor. Morbi eleifend vestibulum congue. Suspendisse ultricies massa ut neque feugiat mattis. Duis malesuada interdum metus, a molestie lorem fermentum ut. Curabitur semper fringilla mollis. Mauris malesuada malesuada aliquet. Suspendisse et faucibus lorem. Ut condimentum sapien sit amet risus venenatis, vitae ornare ex tempor. Aenean in feugiat tellus. Donec porta ex a turpis pulvinar faucibus.

            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Page;
