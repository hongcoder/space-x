import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom'


const Div = styled.div`
  width: 350px;
  z-index: 12;
  right: 0;
  position: fixed;
  top:0;
  display:block;
  height: 100%;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  background-color: #000;
  transition: transform 0.3s  ease-in-out;
`

const UlDiv = styled.div`
  visibility: inherit;
  position: absolute;
  top:75px;
  right:50px;
  width:250px;
  display: block;
`


const Ul = styled.ul`
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: block;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  height: 100%;

    li {
      font:16px/40px D-DIN-Regular,Arial,Verdana,sans-serif;
      font-weight:500;
      font-style: normal;
      text-transform: uppercase;
      display: block;
      border-bottom: 1px solid #252525;
      text-align: right;
      margin: 0;
      position: relative;
      color: #fff;

      a{
        font-size: 16px;
      }
    }
`;

const RightNav = ({ open }) => {
return (
  <Router>
    <Div open={open}>
      <UlDiv>
        <Ul open={open}>
          <li><Link to="/">MISSION</Link></li>
          <li><Link to="/">LAUNCHES</Link></li>
          <li><Link to="/">CAREERS</Link></li>
          <li><Link to="/">UPDATES</Link></li>
          <li><Link to="/">SHOP</Link></li>
        </Ul>
      </UlDiv>
    </Div>
  </Router>
)
}

export default RightNav