import React, {useRef, useEffect} from 'react';
import styled from "styled-components"
import {Controller, Scene} from 'react-scrollmagic'
import {TweenMax, Power3} from "gsap"
import Background from '../images/falcon2-2.webp'
import "./Falcon.scss"
import TwoLetter from './TwoLetter'



const Img = styled.div`
  background-image: url(${Background});
  visibility: inherit;
  opacity: 0;
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


function Two() {
  let image = useRef(null);
  // const textOne = useRef(null);
  // const textTwo = useRef(null);

  useEffect(() => {
    TweenMax.to(
      image,
      7,
      {
        opacity: 1,
        y: -30,
        ease: Power3.easeOut
      }
    )
    // TweenMax.to(
    //   textOne,
    //   3,
    //   {
    //     opacity:1,
    //     y:-20,
    //     ease:Power3.easeOut,
    //     delay: .2
    //   }
    // )
    // TweenMax.to(
    //   textTwo,
    //   3,
    //   {
    //     opacity:1,
    //     y:-20,
    //     ease:Power3.easeOut,
    //     delay: .2
    //   }
    // )
  }, [])

  return(
    <div className="section">
      <Img ref={el => {image = el}} />
      <Controller>
        <Scene duration={600} pin>
          <TwoLetter />
        </Scene>
      </Controller>
    </div>
  );
}

export default Two;
