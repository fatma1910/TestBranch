import React from 'react'
import HeroTerms from '../_components/HeroTerms'
import TermsSideBar from '../_components/TermsSideBar'
import Content from './_components/Content'

const page = () => {
  return (
    <div>
        <HeroTerms title={'Terms of Use'} />

        <div className='mt-12 md:mt-[123px] flex flex-col md:flex-row mb-12 md:mb-[150px]'>
          <TermsSideBar/>
          <Content/>
        </div>
    </div>
  )
}

export default page