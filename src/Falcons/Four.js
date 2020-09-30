import React from 'react';
import styled from "styled-components"
import Background from '../images/falcon4-1.webp'
import "./Falcon.scss"


const Img = styled.div`
  background-image: url(${Background});
  visibility: inherit;
  opacity: 1;
  position: absolute;
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #000;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 100%;
  overflow: hidden;
`

const InnerSection = styled.div`
  height: 944px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  display: block;
  width: 100%;
`

const InnerLetter = styled.div`
  text-align: left;
  width: 50%;
  max-width: 520px;
  position: absolute;
  bottom: 15%;
  right: 50px;
  display:block;
  @media screen and (max-width: 1200px) {
    max-width: 420px;
  }
`

const H3 = styled.h3`
  color: #fff;
  position: relative;
  display: block;
`


const H1 = styled.h1`
  font-size: 48px;
  line-height:48px;
  display: block;
  margin-bottom: 20px;
  letter-spacing: -1px;
`

const A =styled.a`
  position: relative;
  min-width: 130px;
  padding: 0 15px;
  margin: 30px 0 0;
  border: 2px solid #fff;
  display: inline-block;
  cursor: pointer;
`


const Hover = styled.div`
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color: #fff;
  transform-origin: top center;
  transform: scale3d(1,0,1);
  cursor: pointer;
  transition: transform .6s cubic-bezier(.19,1,.22,1);
`


const Span = styled.span`
  font: 14px/50px D-DIN-Bold, Arial, Verdana, sans-serif;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  text-align: center;
  position: relative;
  display: inline-block;
  transition: color .5s cubic-bezier(.19, 1, .22, 1);
  &:hover{
    color: black;
  }

`


function Four() {
  return(
    <div className="section">
      <Img />
      <InnerSection>
        <InnerLetter>
          <H3>Upcoming launch</H3>
          <H1>Starlink mission</H1>
          <A className="hover" href="/">
            <Hover />
            <Span>Update</Span>
          </A>
        </InnerLetter>
      </InnerSection>
    </div>
  );
}

export default Four;
