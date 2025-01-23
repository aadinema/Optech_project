import React from 'react'
import Topbar from '../Home/Navigation/Topbar/Topbar'
import Navigation from '../Home/Navigation/Mainbar/Navigation'
import ExpertTeam from "../Home/ExpertTeam/ExpertTeam.jsx"
import Blog from "../Home/Blog/Blog.jsx"
import Footer from '../Home/Footer/Footer'
import Page1 from './Page1/Page1.jsx'
import Page2 from './Page2/Page2.jsx'
import Page3 from './Page3/Page3.jsx'
import Page4 from './Page4/Page4.jsx'
import Page5 from './Page5/Page5.jsx'

const StartupHome = () => {
  return (
    <>
      <Topbar/>
      <Navigation/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <ExpertTeam/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default StartupHome
