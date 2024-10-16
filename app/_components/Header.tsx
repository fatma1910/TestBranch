"use client";

import React, { useState } from 'react'

import Image from 'next/image';
import Link from 'next/link';

import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { usePathname } from 'next/navigation';
import { headerLinks } from '@/constant';




const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
  };
  return (
  <header className='border-b shadow-sm px-5 py-4 lg:px-[83px] lg:py-[15px]'> 
      <div className='flex justify-between items-center'>
      <Link href='/'>
      <Image src='/logo.png' alt='Logo' width={212} height={35} />
      </Link>

        <nav className='hidden lg:flex flex-row gap-6 items-center'>
        {headerLinks.map((link,index)=> {
        return(
          <Link
          className={`${link.path === pathname && 'text-main'}`}
          href={link.path} key={index}> {link.name} </Link>)
        })}
        </nav>

        <div className='hidden lg:flex flex-row gap-2 items-center'>
          <button className='btn_sec'><Link href='/sign-in'>Log in</Link></button>
          <button className='btn_main'><Link href='/sign-up'>Sign up</Link></button>
        </div>


        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu} aria-label='Toggle menu'>
            {isMobileMenuOpen ? <HiX className='w-6 h-6' /> : <HiMenuAlt3 className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className='flex flex-col gap-4 mt-4 lg:hidden'>
          <Link href='/' className='text-main'>Home</Link>
          <Link href='/'>Features and Pricing</Link>
          <Link href='/contact-us'>Contact us</Link>
          <div className='flex flex-col gap-2 items-center'>
            <button className='w-full py-2 border-[#3F7DDB] border text-[#3F7DDB] rounded-full transition duration-300'> <Link href='/sign-in'>Log in</Link> </button>
            <button className='w-full py-2 border-main border text-white bg-main rounded-full transition duration-300'> <Link href='/sign-up'>Sign up</Link> </button>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header