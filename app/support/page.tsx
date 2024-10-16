'use client'

import React, { useState } from 'react'
import SupportHero from './_components/SupportHero'
import Content from './_components/Content'

const page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
        <SupportHero setSearchTerm={setSearchTerm} />
        <Content searchTerm={searchTerm}/>
    </div>
  )
}

export default page