import React from 'react';
import SendMessageForm from './SendMessageForm';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import Link from 'next/link';

const Contacts = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-[56px] px-4 py-[114px] justify-center items-center '>
      <div className='flex flex-col gap-4'>
        <div>
          <h3 className='text-[36px] leading-10 font-semibold'>Send Message</h3>
          <p className='text-[#3E3D3D] text-[20px] font-light'>
            Feel free to send us a message, if you are unable to find an answer from our FAQ.
          </p>
        </div>
        <SendMessageForm />
      </div>


      <div className='relative w-[314px]  md:w-[414px] h-[412px]'>

        <Image
          src='/contactUs.png'
          alt=''
          layout='fill'
          objectFit='cover'
          className='rounded-lg z-0'
        />

        <div
          className='absolute inset-0 bg-gradient-to-tr to-[rgba(14,82,185,0.78)] from-[rgba(166,202,68,0.78)] rounded-lg z-10'
        ></div>
        <div className='z-20 absolute py-6 px-8 text-white flex flex-col justify-between h-full '>
          <div className='flex-col flex gap-5'>
            <h4 className='md:text-[30px] text-[25px] leading-8 font-semibold '>
            Direct reach us at
            </h4>
            <div className='flex gap-3 items-center'>
              <div className='w-[42px] h-[42px] bg-white flex items-center justify-center rounded-full'>
                  <Mail fill='black'  className='h-5 w-5  '/>
              </div>
              <p className='font-medium text-[18px] leading-5'>info@testbranch.com</p>
         
            </div>
            <div className='flex gap-3 items-center'>
              <div className='w-[42px] h-[42px] bg-white flex items-center justify-center rounded-full'>
                  <Image src='/Xfooter.png' width={20} height={20} className='h-5 w-5 rounded-full ' alt={''}/>
              </div>
              <p className='font-medium text-[18px] leading-5'>info@testbranch.com</p>
         
            </div>
          </div>
          <div className='flex flex-col gap-3 '>
            <p className='font-normal text-[18px] leading-[22px] '>Before reaching us directly, we request you to find  your answer from our Help center</p>
            <Link href='/support'>
            <button className='py-2 px-7 border rounded-full font-medium  text-[18px]'>Go to our Help Center</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
