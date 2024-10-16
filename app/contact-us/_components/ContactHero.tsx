import { Title } from '@/app/_components'
import React from 'react'

const ContactHero = () => {
  return (
    <div className='gradient h-[310px] flex flex-col items-center justify-center'>
        <Title mainTitle='' description='Contact' span='Us'/>
        <p className='max-w-[632px] text-[20px] leading-6 text-center text-[#3E3D3D]'>At TestBranch, we value your questions, feedback, and suggestions. Our team is dedicated to providing you with the best support possible. </p>
    </div>
  )
}

export default ContactHero