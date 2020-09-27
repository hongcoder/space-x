import React from 'react';
import './App.css';
import {createGlobalStyle} from 'styled-components'
import SectionOne from './sectionOne/SectionOne';
import Navigation from "./navigation/Navigation"

// const GlobalStyles = createGlobalStyle`
//   @font-face {
// font-family: 'D-DIN Regular';
// font-style: normal;
// font-weight: normal;
// src: local('D-DIN Regular'), url('D-DIN.woff') format('woff');
// }
//   body {
//     font-family: 'D-DIN Regular, Arial, Verdana, sans-serif'
//   }
// `;


const header ={
  position: "fixed",
  top:0,
  left:0,
  zIndex: "100",
  width: "100%",
  height: 100
}

function App() {
  return (
    <div>
      <Navigation style={header} />
      <SectionOne />
    </div>
  );
}

export default App;
