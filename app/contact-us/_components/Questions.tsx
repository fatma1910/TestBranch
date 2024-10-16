import { Title } from '@/app/_components'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { Scan } from 'lucide-react';


const Questions = () => {
  return (
    <div className='py-[70px]  overflow-hidden' >
          <div className='sm:flex justify-between  hidden'>
            <div className='relative'>
                <div className='left_corner -left-[144px]'></div>
                <Scan className='stroke-white -z-[1] w-[70px] h-[76px] absolute left-[39px] -top-8'strokeWidth={.7}/>
            </div>
        
    </div>
      <div className='px-4'>
        <div className='flex flex-col items-center justify-center '>
            <div className='flex flex-col items-center justify-center w-full max-w-[665px]'>
                <Title mainTitle='Frequently asked questions' description={'Have Questions? We are '} span={'here'} others='for you' />
                <p className='text-[18px] md:text-[20px] text-[#3E3D3D] leading-6 text-center mt-4'>
                  Here are answers to the most common questions. If you don't find what you're looking for, feel free to chat or message us.
                </p>
            </div>
            <div className='my-10 md:my-14 w-full max-w-[886px]'>
            <Accordion type="single" collapsible className="w-full flex flex-col gap-4 md:gap-6">
              <AccordionItem value="item-1">
                <AccordionTrigger>Why choose TestBranch?</AccordionTrigger>
                <AccordionContent>
                  TestBranch is designed to make the process of creating, editing, approving, and issuing certificates incredibly easy. Our platform is feature-rich and user-friendly, allowing you to collaborate seamlessly with others in the approval and issuance of certificates. Whether you need to set up simple or complex conditions for issuing certificates, TestBranch has you covered. Additionally, our platform integrates effortlessly into your existing workflow. By leveraging blockchain technology, we ensure that your certificate data is safe, secure, accessible, and never misused, all without adding unnecessary complexity.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>What are the benefits of having certificate data on the Blockchain?</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quos laudantium? Adipisci, doloremque totam dolore nesciunt recusandae tempore odit officia expedita maiores architecto! Vero, odit voluptate. Ipsam odit enim porro.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What are the new possibilities with TestBranch digital certificates?</AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, sed perspiciatis! Nesciunt vitae consequuntur magni fugiat, tenetur dolor. Tempore iure vero hic maiores, nam eveniet esse sapiente dolore atque quo!
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>How can I start with TestBranch certificates?</AccordionTrigger>
                <AccordionContent>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, sed perspiciatis! Nesciunt vitae consequuntur magni fugiat, tenetur dolor. Tempore iure vero hic maiores, nam eveniet esse sapiente dolore atque quo!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
        </div>
    </div>
    <div className='relative'>
                <Scan className='stroke-white w-[70px] h-[76px] absolute right-6 -top-52 -z-[1]'strokeWidth={.7}/>
                <div className='right_corner -top-[165px] -right-36 rotate-[-170deg] '></div>
                
            </div>
    </div>
  )
}

export default Questions
