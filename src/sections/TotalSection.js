import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import "./Section.scss"
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import SectionSeven from './SectionSeven';
import Navigation from "../navigation/Navigation"

function TotalSection(){
  return(
    <>
      <Navigation />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </>
  )

}


export default TotalSection