import React, {useRef, useEffect} from 'react';
import styled from "styled-components"
import {TweenMax, Power3} from "gsap"
import Background from '../images/falcon1.webp'
import "./Falcon.scss"

// 스크롤 매직 component 써서 다음 세션 들어갈 때 효과 나오게 할 수 없나?



const Img = styled.div`
  background-image: url(${Background});
  visibility: inherit;
  opacity: 0;
  position: absolute;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #000;
  width: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
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
  transform: translate(-50%, -50%) translateY(-50px);
  text-align: center;
  width: 90%;
  max-width: 960px;
  position: absolute;
  top:50%;
  left: 50%;
  display:block;
  @media screen and (max-width: 960px) {
    transform: translate(-50%, -50%) translateY(-30px);
  }
`

const H1 = styled.h1`
  opacity: 0;
  display: block;
  margin-bottom: 20px;
  letter-spacing: -1px;
`


const H3 = styled.h3`
  visibility: inherit;
  opacity: 0;
  display: block;
`



function One() {
  let image = useRef(null);
  let textOne = useRef(null);
  let textTwo = useRef(null);

  useEffect(() => {
    TweenMax.to(
      image,
      7,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut
      }
    )
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
      <Img ref={el => {image = el}} />
      <InnerSection>
        <InnerLetter>
          <H1 ref={el => {textOne = el}}>FALCON 9</H1>
          <H3 ref={el => {textTwo = el}}>First orbital class rocket capable of reflight</H3>
        </InnerLetter>
      </InnerSection>
    </div>
  );
}

export default One;
