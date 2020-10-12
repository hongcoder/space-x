import React, {useRef, useEffect} from 'react';
import styled from "styled-components"
import "./Falcon.scss"
import {TweenMax, Power3} from "gsap"


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
  bottom: 30%;
  left: 50px;
  display:block;
  @media screen and (max-width: 1200px) {
    max-width: 420px;
  }
`


function TwoLetter() {

  let text = useRef(null);


  useEffect(() => {
    TweenMax.to(
      text,
      3,
      {
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay: .2
      }
    )
  }, [])
  return(
    <div className="section">
      <InnerSection>
        <InnerLetter>
          <h4 ref={el => {text = el}}>
            Falcon 9 is a reusable, two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of people and payloads into Earth orbit and beyond. Falcon 9 is the world’s first orbital class reusable rocket. Reusability allows SpaceX to refly the most expensive parts of the rocket, which in turn drives down the cost of space access.
          </h4>
        </InnerLetter>
      </InnerSection>
    </div>
  );
}

export default TwoLetter;
