import React from 'react'
import Title from './Title'
import Image from 'next/image'
import { Scan } from 'lucide-react'

const Certification = () => {
  return (
    <div className='py-[93px] flex flex-col justify-center items-center mx-3'>
        <Title mainTitle='Certification Transparency' description='Benefits of having certificate data on the' span={'Blockchain'} />

        <div className='mt-32'>
          <div className='flex items-center flex-col md:flex-row gap-24'>
            <div className='relative '>
               <div className='square md:before:w-[90px] md:before:h-[90px]'>
              <Image src='/c1.png' alt='' width={304} height={205} className='rounded-2xl md:w-[404px] md:h-[285px] '
              />
              
            </div>
            <Scan className="scan-icon" 
            strokeWidth={1}
            />
            </div>
            <div className='md:w-[472px] gap-2 flex flex-col '>
              <h5 className='text-[22px] leading-7'>Data Ownership</h5>
              <p className='text-[20px] leading-[26px] text-[#3E3D3D]'>Only you own and control your certificate data. TestBranch or no-one else owns your data.</p>
            </div>
           
          </div>
        </div>
        <div className='mt-32'>
          <div className='flex items-center flex-col md:flex-row-reverse  gap-24'>

            <div className='relative '>
               <div className='square md:before:w-[90px] md:before:h-[90px]
               before:right-[-39px]
               before:left-auto
               before:bg-[#F88EB0]
               '>
              <Image src='/c2.png' alt='' width={304} height={205} className='rounded-2xl md:w-[404px] md:h-[285px] transform scale-x-[-1]'
              />
              
            </div>
            <Scan className="scan-icon 
            left-[-39px]
            right-auto
            stroke-[#F88EB0]
            " 
            strokeWidth={1}
            />
            </div>
            <div className='md:w-[472px] gap-2 flex flex-col '>
              <h5 className='text-[22px] leading-7'>Data Security</h5>
              <p className='text-[20px] leading-[26px] text-[#3E3D3D]'>Only you own and control your certificate data. TestBranch or no-one else owns your data.</p>
            </div>
           
          </div>
        </div>
        <div className='mt-32'>
          <div className='flex items-center flex-col md:flex-row gap-24'>
            <div className='relative '>
               <div className='square md:before:w-[90px] md:before:h-[90px]
               before:bg-sec
               '>
              <Image src='/c3.png' alt='' width={304} height={205} className='rounded-2xl md:w-[404px] md:h-[285px] '
              />
              
            </div>
            <Scan className="scan-icon stroke-sec" 
            strokeWidth={1}
            />
            </div>
            <div className='md:w-[472px] gap-2 flex flex-col '>
              <h5 className='text-[22px] leading-7'>Data Reliability</h5>
              <p className='text-[20px] leading-[26px] text-[#3E3D3D]'>As the blockchain is the most secure way of storing your data this improves the reliability. All data can be encripted to be private or made publicly readable.</p>
            </div>
           
          </div>
        </div>
        <div className='mt-32'>
          <div className='flex items-center flex-col md:flex-row-reverse gap-24'>
            <div className='relative '>
               <div className='square md:before:w-[90px] md:before:h-[90px]
               before:right-[-39px]
               before:left-auto
               before:bg-[#A544F1]
               '>
              <Image src='/c4.png' alt='' width={304} height={205} className='rounded-2xl md:w-[404px] md:h-[285px] transform scale-x-[-1]'
              />
              
            </div>
            <Scan className="scan-icon
            left-[-39px]
            right-auto
            stroke-[#A544F1]
            " 
            strokeWidth={1}
            />
            </div>
            <div className='md:w-[472px] gap-2 flex flex-col '>
              <h5 className='text-[22px] leading-7'>Data Encryption</h5>
              <p className='text-[20px] leading-[26px] text-[#3E3D3D]'>The certificates are stored as an NFT (Non Fungable Token) on the blockchain. This is like a piece of data property or digital property.</p>
            </div>
           
          </div>
        </div>
    </div>
  )
}

export default Certification