import React from 'react';
import './App.css';
import styled from "styled-components"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TotalSection from "./sections/TotalSection"



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
    <Router>
      <Body>
        <Wrapper>
          <TotalSection />
        </Wrapper>
      </Body>
    </Router>
  );
}

export default App;
