import React from 'react'

const Title = ({mainTitle , description , span , others , className}: {mainTitle:string , description:string , span:string ,others?:string , className?:string}) => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[685px]' >
        <p className='uppercase h-8 text-[#BFBFBF] text-[20px] font-semibold leading-6 '> {mainTitle} </p>
        <h2 className={`text-[40px] leading-[44px] font-semibold  text-center  ${className} `}>{description} <span className='text-main'> {span} </span> {others} </h2>
    </div>
  )
}

export default Title;