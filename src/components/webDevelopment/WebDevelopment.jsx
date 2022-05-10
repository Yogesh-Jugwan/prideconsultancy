import React from 'react'
import ContactUs from '../../common/contact/ContactUs'
import AboutWeb from './AboutWeb'
import Banner from './Banner'
import Frameworks from './Frameworks'
import WhyChooseUs from './WhyChooseUs'

const WebDevelopment = () => {
  return (
    <main>
      <Banner/>
      <AboutWeb/>
      <Frameworks/>
      <WhyChooseUs/>
      <ContactUs/>
    </main>
  )
}

export default WebDevelopment