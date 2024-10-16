import React from 'react';

const Content = () => {
  return (
    <div className='max-w-full md:max-w-[954px] mx-4 md:mx-[83px] flex flex-col gap-6 md:gap-10'>
      <h3 className='text-[28px] md:text-[36px] leading-8 md:leading-10 font-semibold'>Privacy Policy</h3>
      <div className='flex flex-col gap-6 md:gap-10'>

        {/* Introduction */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Introduction</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            At TestBranch, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [website URL] and use our services.
          </p>
        </div>

        {/* Information We Collect */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Information We Collect</h5>
          <ul className='list-disc ml-5 md:ml-7'>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>
              <span className='font-semibold'>Personal Information:</span> When you register on our site, subscribe to our service, or contact us, we may collect personally identifiable information, such as your name, email address, and contact information.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>
              <span className='font-semibold'>Usage Data:</span> We collect information on how the Service is accessed and used, such as IP address, browser type, and pages visited.
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>How We Use Your Information</h5>
          <ul className='list-disc ml-5 md:ml-7'>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>To provide, operate, and maintain our website and services.</li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>To improve, personalize, and expand our website and services.</li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>To understand and analyze how you use our website and services.</li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>To develop new products, services, and features.</li>
          </ul>
        </div>

        {/* Data Security */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Data Security</h5>
          <ol className='list-disc ml-5 md:ml-7'>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>
              We use blockchain technology to ensure certificate data is safe, secure, and accessible.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>
              Data is stored securely and indefinitely on the blockchain.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
              Data can be encrypted for privacy or made publicly readable.
            </li>
          </ol>
        </div>

        {/* Data Ownership */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Data Ownership</h5>
          <ol className='list-disc ml-5 md:ml-7'>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>Users own and control their certificate data.</li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>TestBranch does not own or control user data.</li>
          </ol>
        </div>

        {/* Data Sharing */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Data Sharing</h5>
          <ol className='list-disc ml-5 md:ml-7'>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-1'>We do not share user data with third parties without consent.</li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>Users can choose to share their certificates publicly or privately.</li>
          </ol>
        </div>

        {/* Changes to This Policy */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Changes to This Policy</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            We may update this policy from time to time and changes will be posted on this page.
          </p>
        </div>

        {/* Contact Us */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Contact Us</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            If you have any questions about these Terms, please contact us at <span className='text-sec cursor-pointer'>info@testbranch.io</span>.
          </p>
        </div>

        {/* Effective Date */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[18px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Effective Date</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            This privacy policy is effective as of 17 July, 2024.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Content;
