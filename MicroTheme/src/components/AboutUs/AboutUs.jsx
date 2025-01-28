import React from 'react'
import Page1 from './Page1/Page1'
import Navigation from '../Home/Navigation/Mainbar/Navigation'
import Topbar from '../Home/Navigation/Topbar/Topbar'
import WorkTogether from '../Home/WorkTogether/WorkTogether'
import Section from '../Home/heroSecton/Section'
import Page2 from './Page2/Page2'
import Page3 from './Page3/page3'
import Page4 from './Page4/Page4'
import Footer from '../Home/Footer/Footer'


const AboutUs = () => {
  return (
    <>
    <Topbar/>
    <Navigation/>
     <Page1/> 
     <Page2/>
     <Page4/>
     <Page3/>
     <Section/>
     <WorkTogether/>
     <Footer/>
    </>
  )
}

export default AboutUs
