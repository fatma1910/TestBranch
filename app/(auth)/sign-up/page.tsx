import React from 'react';
import SignUpForm from '../_components/Sign-up';
import MetaLog from '../_components/MetaLog';
import Link from 'next/link';

const page = () => {
  return (
    <div className='rounded-2xl mx-3 w-[575px] border border-b-[3px] shadow-md py-5 px-4 sm:px-10 md:px-[40px] flex items-center flex-col gap-5 '>
      <div className='flex flex-col items-center justify-center mb-2'>
        <h4 className='font-semibold text-2xl sm:text-3xl md:text-[28px] leading-9'>Create an Account</h4>
        <span className='font-light text-[16.5px] leading-5 text-[#858585]'>New to TestBranch? To get started create your account</span>
      </div>
      
      <MetaLog />
      <span className='text-[16px] font-normal text-[#858585] leading-5'>or using your email</span>
      <SignUpForm />
      <p> Already a TestBranch User? <Link href='/sign-in' className='text-[#3F7DDB] underline text-[17px]'>Log in Now</Link> </p>
    </div>
  );
}

export default page;
