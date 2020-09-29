import React from 'react';
import './App.css';
import styled from "styled-components"
import SectionOne from './sections/SectionOne';
import SectionTwo from './sections/SectionTwo';
import Navigation from "./navigation/Navigation"
import SectionThree from './sections/SectionThree';
import SectionFour from './sections/SectionFour';
import SectionFive from './sections/SectionFive';
import SectionSix from './sections/SectionSix';
import SectionSeven from './sections/SectionSeven';

const Body =  styled.div`
  margin: 0;
  padding:0;
  background-color: #000;
  font: 16px/26px D-DIN-Regular, Arial,Verdana,sans-serif;
  font-weight: 400;
  color:#fff;
  text-align:left;
  display:block;
`

const Wrapper = styled.div`
  opacity: 1;
  display:block;
  width:100%;
  position:relative;
`

function App() {
  return (
    <Body>
      <Wrapper>
        <Navigation />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
      </Wrapper>
    </Body>
  );
}

export default App;
