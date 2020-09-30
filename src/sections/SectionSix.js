import React from 'react';
import styled from "styled-components"
import Background from '../images/6.webp'
import "./Section.scss"
import Video from "../images/docking.mp4"




const Content = styled.div`
  width: 100%;
  height: auto;
  margin: 75px auto;
  max-width: 1400px;
  display: inline-block;
  position: relative;
  text-align: center;
`

const LeftRight = styled.div`
  display: block;
  text-align: right;
  margin: 0;
`

const InnerVideo = styled.div`
  position: relative;
  display: inline-block;
  width: 54%;
  height: auto;
  margin:0 50px 0 0;
  padding: 0;
  text-align: left;
  vertical-align: top;
`

const InnerLetter = styled.div`
  width: 33%;
  text-align: left;
  max-width: 520px;
  top: 50%;
  left:50px;
  transform: translate(0, -50%);
  position: absolute;
  display:block;
  @media screen and (max-width: 1200px) {
    max-width: 420px;
  }
`

const H2 = styled.h2`
  display: block;
  letter-spacing: -1px;
  margin: 0;


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
  transition: transform .6s cubic-bezier(.19,1,.22,1),-webkit-transform .6s cubic-bezier(.19,1,.22,1);
  display: block;
`

const Div = styled.div`
  font:14px/50px D-DIN-Bold,Arial,Verdana,sans-serif;
  color: #fff;
  text-align:center;
  text-transform: uppercase;
  width:100%;
  transition: color .5s cubic-bezier(.cubic-bezier(0.19, 1, 0.22, 1));;
  &:hover{
    color: black;
  }
`


function SectionSix() {
  return(
    <div className="section">
      <Content>
        <LeftRight>
          <InnerVideo>
            <picture className="responsive-image">
              {/* <source srcSet="../images/docking_sim.webp" type="image/webp" /> */}
              {/* <img src={Background} alt /> */}
            </picture>
            <video controls autoPlay loop muted className="video">
              <source src={Video} type="video/mp4" />
            </video>
          </InnerVideo>
          <InnerLetter>
            <H2>crew dragon docking simulator</H2>
            <p>Crew Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.</p>
            <A className="hover" href="/">
              <Hover />
              <Div>try it</Div>
            </A>
          </InnerLetter>
        </LeftRight>
      </Content>
    </div>
  );
}

export default SectionSix;
