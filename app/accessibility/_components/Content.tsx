import React from 'react';

const Content = () => {
  return (
    <div className='max-w-full md:max-w-[954px] mx-4 md:mx-[83px] flex flex-col gap-10'>
      <h3 className='text-[28px] md:text-[36px] leading-8 md:leading-10 font-semibold'>Accessibility</h3>
      <div className='flex flex-col gap-10'>
        
        {/* Our Commitment to Accessibility */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Our Commitment to Accessibility</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            At TestBranch, we are committed to ensuring that our website and services are accessible to everyone, including people with disabilities. We strive to provide a seamless and user-friendly experience for all users, regardless of their abilities or disabilities.
          </p>
        </div>

        {/* Accessibility Features */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Accessibility Features</h5>
          <ul className='list-disc ml-5 md:ml-7'>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-3'>
              <span className='font-semibold'>Keyboard Navigation: </span> Our website is designed to be fully navigable using a keyboard. Users can move through the website using the Tab key to jump to interactive elements such as links, buttons, and form fields.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-3'>
              <span className='font-semibold'>Screen Reader Compatibility: </span> We ensure that our website is compatible with screen readers, providing text alternatives for non-text content, and making sure that all functionality is available through a screen reader.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5 mb-3'>
              <span className='font-semibold'>Text Size and Contrast: </span> Users can adjust the text size and contrast settings to improve readability. Our design considers color contrast to ensure that text is readable for users with visual impairments.
            </li>
            <li className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
              <span className='font-semibold'>Responsive Design: </span> Our website is designed to work on various devices and screen sizes, including desktops, tablets, and smartphones, providing an optimal experience for all users.
            </li>
          </ul>
        </div>

        {/* Feedback and Assistance */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Feedback and Assistance</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            We welcome feedback from our users to help us improve accessibility. If you encounter any accessibility barriers or have suggestions on how we can enhance your experience, please contact us at <span className='text-sec cursor-pointer'>support@testbranch.com</span>.
          </p>
        </div>

        {/* Continuous Improvement */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Continuous Improvement</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            We are committed to continuously improving the accessibility of our website and services. We regularly review and update our practices to adhere to the latest accessibility standards and guidelines, including the Web Content Accessibility Guidelines (WCAG).
          </p>
        </div>

        {/* Conclusion */}
        <div className='flex flex-col gap-2'>
          <h5 className='text-[20px] md:text-[22px] text-[#242521] leading-7 font-semibold'>Conclusion</h5>
          <p className='text-[16px] md:text-[18px] text-[#3E3D3D] leading-5'>
            TestBranch is dedicated to providing an inclusive and accessible experience for all users. We believe that everyone should have equal access to information and functionality on our website. Thank you for choosing TestBranch, and we are here to support you in any way we can.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
