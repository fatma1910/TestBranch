import React from 'react'
import AboutHero from './_components/AboutHero'
import AboutTest from './_components/AboutTest'
import OurMission from './_components/OurMission'
import { CreatCerti } from '../_components'

const page = () => {
  return (
    <div>
        <AboutHero/>
        <AboutTest/>
        <OurMission />
        <CreatCerti/>
    </div>
  )
}

export default page