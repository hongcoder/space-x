import React from 'react';
import styled from "styled-components"
import Background from '../images/falcon1.webp'
import "./Falcon.scss"


const Img = styled.div`
  background-image: url(${Background});
  visibility: inherit;
  opacity: 1;
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
  visibility: inherit;
  opacity: 1;
  transform:translate3d(0px, 0px, 0px);
  display: block;
  margin-bottom: 20px;
  letter-spacing: -1px;
`


const H3 = styled.h3`
  visibility: inherit;
  opacity: 1;
  transform:translate3d(0px, 0px, 0px);
  display: block;
`

function One() {
  return(
    <div className="section">
      <Img />
      <InnerSection>
        <InnerLetter>
          <H1>FALCON 9</H1>
          <H3>First orbital class rocket capable of reflight</H3>
        </InnerLetter>
      </InnerSection>
    </div>
  );
}

export default One;
