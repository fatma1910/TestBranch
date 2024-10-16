'use client'

import { termsLinks } from '@/constant'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const TermsSideBar = () => {
    const pathname = usePathname();
    return (
        <div className='w-full max-w-[170px] mx-4 md:mx-[83px] flex flex-col gap-4 mb-6 md:mb-auto'>
            {termsLinks.map((link, index) => {
                return (
                    <Link
                        className={`${link.path === pathname && 'text-main'} font-medium`}
                        href={link.path} key={index}>
                        {link.name}
                    </Link>
                )
            })}
        </div>
    )
}

export default TermsSideBar;
