import React from 'react'
import Topbar from '../../Home/Navigation/Topbar/Topbar'
import Navigation from '../../Home/Navigation/Mainbar/Navigation'
import Footer from '../../Home/Footer/Footer'
import Page1 from './Page1/Page1'
import WorkTogether from '../../Home/WorkTogether/WorkTogether'
import Page4 from '../../StartupHome/Page4/Page4'

const PortfolioGrid = () => {
  return (
    <>
      <Topbar/>
      <Navigation/>
      <Page1/>
      <Page4/>
      <WorkTogether/>
      <Footer/>
    </>
  )
}

export default PortfolioGrid
