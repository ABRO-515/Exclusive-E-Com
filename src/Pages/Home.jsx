import React from 'react'
import FirstSection from '../components/HomePageContent/FirstSection'
import SecondSection from '../components/HomePageContent/SecondSection'
import JBL from '../components/HomePageContent/JBL'
import Cards from '../components/HomePageContent/Cards'

const HomePage = () => {
  return (
    <>
      <main className='w-full h-full' >
      
        <FirstSection/>
        <SecondSection/>
        <JBL/>
        <Cards/>

      </main>
    </>
  )
}

export default HomePage
