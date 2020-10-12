import React, {useRef, useEffect} from 'react';
import styled from "styled-components"
import {Link} from 'react-router-dom';
import {TweenMax, Power3} from "gsap"
import Background from '../images/falcon3.webp';
import "./Falcon.scss"


// this is should be scrolling
// if click the page, go to youtube url
const Img = styled.div`
  background-image: url(${Background});
  visibility: inherit;
  cursor: pointer;
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
  left: 50px;
  display:block;
  @media screen and (max-width: 1200px) {
    max-width: 420px;
  }
`




function Three() {
  let textOne = useRef(null);
  let textTwo = useRef(null);

  useEffect(() => {
    TweenMax.to(
      textOne,
      3,
      {
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay: .2
      }
    )
    TweenMax.to(
      textTwo,
      3,
      {
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay: .5
      }
    )
  }, [])

  return(
    <div className="section">
      <Img>
        <a href="https://spacex.com" className="youtube" />
        <svg width="64.025" height="81.486" viewBox="0 0 64.025 81.486">
          <g>
            <path d="M8,5V86.486L72.025,45.743Z" transform="translate(-8, -5)" />
          </g>
        </svg>
      </Img>
      <InnerSection>
        <InnerLetter>
          <h3 ref={el => {textOne = el}}>Video</h3>
          <h2 ref={el => {textTwo = el}}>falcon 9 in flight</h2>
        </InnerLetter>
      </InnerSection>
    </div>
  );
}

export default Three;
