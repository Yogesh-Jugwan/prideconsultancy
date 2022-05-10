import React from 'react'
import ContactUs from '../../common/contact/ContactUs'
import OurProcess from '../home/OurProcess'
import AboutApp from './AboutApp'
import Banner from './Banner'
import WeOffers from './WeOffers'
import WhyChooseUs from './WhyChooseUs'

const MobileApp = () => {
  return (
    <main>
      <div>

      <Banner />
      <AboutApp />
      <WeOffers/>
      <OurProcess/>
      <WhyChooseUs/>
      <ContactUs/>
      </div>
    </main>
  )
}

export default MobileApp