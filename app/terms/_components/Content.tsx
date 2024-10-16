import React from 'react';

const Content = () => {
  return (
    <div className='max-w-full md:max-w-[954px] mx-4 md:mx-[83px] flex flex-col gap-10'>
      <h3 className='text-[28px] md:text-[36px] leading-8 md:leading-10 font-semibold'>Terms of Use</h3>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Welcome to TestBranch</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            By accessing and using the TestBranch website and services, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>License to Use Website</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            Unless otherwise stated, TestBranch and/or its licensors own the intellectual property rights published on this website and materials used on TestBranch. All intellectual property rights are reserved. You may access this from TestBranch for your own personal use subject to restrictions set in these terms and conditions.
          </p>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>User Responsibilities</h5>
          <ol className='list-disc ml-5 md:ml-7'>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>
              Users must use the website in compliance with all applicable laws and regulations.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>
              Users are responsible for maintaining the confidentiality of their account information.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
              Users must not engage in any unauthorized activities, including, but not limited to, modifying, distributing, or transmitting any part of the website without permission.
            </li>
          </ol>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Termination</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            TestBranch reserves the right to terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Disclaimer</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            The materials on TestBranch’s website are provided "as is". TestBranch makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Limitations</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            In no event shall TestBranch or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on TestBranch's website.
          </p>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Governing Law</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State] and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Contact Us</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            If you have any questions about these Terms, please contact us at <span className='text-sec cursor-pointer'>info@testbranch.io</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
