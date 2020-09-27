import React from 'react';
import styled from "styled-components"
// import imgA from '../images/1.webp'



const OutLine = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  display: block;
  width: 100%;
  position: relative;
`
const Img = styled.img`
  visibility: inherit;
  position: absolute;
  width: 100%;
  display: block;
  height: 100%;
  margin: 0;
  padding: 0;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 1;
`

const InnerSection = styled.div`
  height: 870px;
  position: relative;
  max-width: 1400px;
  display: block;
  width: 100%;
  margin: 0 auto;
`

const InnerLetter = styled.div`
  text-align: left;
  width: 50%;
  max-width: 520px;
  position: absolute;
  bottom: 15%;
  right: 50px;
`

const H3 = styled.h3`
  font-size: 20px;
  line-height: 32px;
  font=weight: 400;
  font-style: normal;
  font-stretch: normal;
  font-family: D-DIN-Medium, Arial, Verdana, sans-serif;
  margin:auto auto 10px;
  text-transform: uppercase;
  position: relative;
  display: block;

`


const H1 = styled.h1`
  font-size: 48px;
  font=weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height:48px;
  font-family: D-DIN-Medium, Arial, Verdana, sans-serif;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 20px;
  font-family: D-DIN-Bold, Arial, Verdana, sans-serif;
  letter-spacing: -1px;
  margin-top: 0 !important;
`

const A =styled.a`
  position: relative;
  min-width: 130px;
  padding: 0 15px;
  margin: 30px 0 0;
  border: 2px solid #fff;
  display: inline-block;
  text-decoration: none;
  color: ##fff;
  transition:color 1s cubic-bezier(.25,1,.25,1),background-color 1s cubic-bezier(.25,1,.25,1)color 1s cubic-bezier(.25,1,.25,1),background-color 1s cubic-bezier(.25,1,.25,1);

  &:hover {
    color: ##fff;
    text-decoration: none;
  }
  &:link{
    color: ##fff;
    text-decoration: none;
  }
  &:active{
    color: ##fff;
    text-decoration: none;
  }
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
  transition: transform .6s cubic-bezier(.19,1,.22,1),-webkit-transform .6s cubic-bezier(.19,1,.22,1);
  display: block;
`


const Span = styled.span`
  font-size: 14px;
  font-weight: normal;
  line-height: 50px;
  font-family: D-DIN-Bold, Arial, Verdana, sans-serif;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  position: relative;
  display: inline-block;
  text-align: center;
  transition: color .5s cubic-bezier(0.19, 1, 0.22, 1);

`


function SectionOne() {
  return(
    <OutLine>
      <Img src={require('../images/1.webp')} />
      <InnerSection>
        <InnerLetter>
          <H3>Update launch</H3>
          <H1>Starlink mission</H1>
          <A href="/">
            <Hover />
            <Span>Update</Span>
          </A>
        </InnerLetter>
      </InnerSection>
    </OutLine>
  );
}

export default SectionOne;
