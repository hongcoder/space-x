import React, { useState } from 'react'
import styled from "styled-components"
import RightNav from "./RightNav"


/// https://kim-mj.tistory.com/282 styled-component 반응형 구현 좋은 예시

const StyledBurger = styled.div`
  cursor: pointer;
  /* width: 16px; */
  height: 16px;
  position: absolute;
  top: 50%;
  margin-top: 2px;
  padding: 0 8px;
  right: 50px;
  z-index: 55;
  display: block;
  background: 0 0;
  transform: translateY(-50%);
  transition: opacity .2s linear .1s;
  div{
    background-color: #fff;
    width:16px !important;
    height:2px;
    position: absolute;
    transform-origin: 0% 0%;
    transition: all 0.3s linear .1s;

    &:nth-child(1) {
      top: 3px;
      left: 0;
      width: 100%;
      height: 2px;
      transform-origin: center center;
      transform: ${({ open }) => open ? 'matrix(0.7071, 0.7071, -0.7071, 0.7071, 0, 4);' : 'matrix(1, 0, 0, 1, 0, 0);'};
    }
    &:nth-child(2) {
      top:7px;
      left:0;
      width: 100%;
      height: 2px;
      transform: ${({ open }) => open ? "transparent": ""};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      top: 11px;
      left:0;
      width: 100%;
      height: 2px;
      transform-origin: center center;
      transform: ${({ open }) => open ? 'matrix(0.7071, -0.7071, 0.7071, 0.7071, 0, -4);' : 'matrix(1, 0, 0, 1, 0, 0)'};
    }
  }
`

function Burger() {
  const [open, setOpen] = useState(false)



  // console.log(menuOpen)


  return (

    <>
      <StyledBurger open={open} onClick={()=> setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  )
}
export default Burger
