import React from 'react'
import Title from './Title'
import { Scan } from 'lucide-react'

const StartSec = () => {
  return (
    <div className='gradient  min-h-[358px] overflow-hidden sm:pb-0 pb-7'>
    <div className=' flex items-center justify-center  '>
        <div className='flex flex-col items-center justify-center gap-6'>
        <Title mainTitle='' description='Start with TestBranch certificates today for ' span={'FREE'} />
        <p className='max-w-[667px] text-[18px] text-[#3E3D3D] leading-[22px] text-center px-4 '>You can start with TestBranch certificates for FREE forever. If you need more certificates prices start from just $29 per month</p>

        <div className='flex gap-3'>
            <button className='btn_main'>Start Today</button>
            <button className='btn_sec'>Learn More</button>
        </div>
        </div>
        
    </div>
    <div className='sm:flex justify-between relative hidden'>
        <div className='relative'>
            <div className='left_corner'></div>
            <Scan className='stroke-white w-[70px] h-[76px] absolute left-[123px] -top-9'strokeWidth={.7}/>
        </div>
        <div className='relative'>
            <Scan className='stroke-white w-[70px] h-[76px] absolute right-[153px] -top-24 'strokeWidth={.7}/>
            <div className='right_corner'></div>
            
        </div>
        
    </div>
    
    </div>
  )
}

export default StartSec