import { Scan } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const HeroTerms = ({title}:{title:string}) => {
  return (
    <div className='h-[204px] bg-[#09214a] overflow-hidden'>
        <div className=' h-full flex items-center justify-center'>
            <h3 className='text-white text-[36px] font-semibold leading-10'>{title}</h3>
            
        </div>

        <div className='sm:flex justify-between relative hidden'>
        <div className='relative'>
            <div className='left_corner z-10 -top-24 -left-36'></div>
            <Scan className='stroke-white w-[70px] h-[76px] absolute left-[55px] z-20 -top-[130px]'strokeWidth={.7}/>
        </div>
        <div className='relative'>
            <Scan className='stroke-white w-[70px] h-[76px] absolute right-[100px] -top-40 z-20'strokeWidth={.7}/>
            <div className='right_corner z-10 -top-32 -right-24'></div>
            
        </div>
        
    </div>
    </div>
 )
}

export default HeroTerms