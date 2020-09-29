import React from 'react'
import styled from "styled-components"
import Burger from './Burger'
import LogoNav from './LogoNav'

const Header = styled.div`
  position: fixed;
  top: 0;
  left:0;
  z-index: 100;
  width:100%;
  height:100px;
  margin:0;
  padding:0;
  text-align:center;
  display:block;
`
// const headInner = {
//   display: "block",
//   position: "relative",
//   width: "100%",
//   height: "100%",
//   maxWidth: 1400,
//   margin: "0 auto",
//   textAlign: "left"
// }

// style={headInner}

function Navigation() {
  return (
    <Header>
      <LogoNav />
      <Burger />
    </Header>
  )
}


export default Navigation