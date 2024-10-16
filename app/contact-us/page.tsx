import React from 'react'
import ContactHero from './_components/ContactHero'
import Contacts from './_components/Contacts'
import Questions from './_components/Questions'
import { CreatCerti } from '../_components'

const page = () => {
  return (
    <div>
        <ContactHero />
        <Contacts/>
        <Questions />
        <CreatCerti />
    </div>
  )
}

export default page