import React from 'react';
import SignInForm from '../_components/Sign-in';
import MetaLog from '../_components/MetaLog';
import Link from 'next/link';

const page = () => {
  return (
    <div className='rounded-2xl max-w-[575px] w-full border border-b-[3px] shadow-md py-5 px-5 md:px-10 flex items-center flex-col gap-5 mx-3'>
      <h4 className='font-semibold text-[24px] md:text-[28px] leading-9 mb-6'>Log in to your Account</h4>
      <MetaLog />
      <span className='text-[14px] md:text-[16px] font-normal text-[#858585] leading-5'>or using your email</span>
      <SignInForm />
      <p className='text-[14px] md:text-[17px]'>New to TestBranch? <Link href='/sign-up' className='text-[#3F7DDB] underline'>Sign up</Link></p>
    </div>
  );
}

export default page;
