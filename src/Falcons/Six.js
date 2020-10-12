import React, {useRef, useEffect} from 'react';
import styled from "styled-components"
import {TweenMax, Power3} from "gsap"
import "./Falcon.scss"

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  display: inline-block;
  position: relative;
  text-align: center;
`

const Center = styled.div`
  width: 90%;
  height: auto;
  margin: 75px auto;
  max-width: 960px;
  display: inline-block;
  position: relative;
  text-align: center;
`

const Line = styled.div`
  visibility: inherit;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);
  width:1px;
  height: 140px;
  margin: 0 auto 20px;
  background-color: #fff;
`




function Six() {
  let line = useRef(null);


  useEffect(() => {
    TweenMax.to(
      line,
      7,
      {
        y: -30,
        ease: Power3.easeOut
      }
    )
  }, [])


  return(
    <div className="section">
      <Content>
        <Center ref={el => {line = el}}>
          <Line />
          <p className="section-footer" style={{visibility: "inherit", opacity: "1", transform: "translate3d(0px, 0px, 0px)"}}>
            For information about our launch services, contact <a href="mailto:sales@spacex.com">sales@spacex.com</a>
          </p>
          <a href="https://www.spacex.com/media/Falcon_Users_Guide_082020.pdf" className="special" target="_blank" style={{visibility: "inherit", opacity: "1", transform: "translate3d(0px, 0px, 0px)"}}>
            <div className="hover" />
            <div className="text">download user's guide</div>
          </a>
          <a href="https://www.spacex.com/media/Capabilities&Services.pdf" className="special" target="_blank" style={{visibility: "inherit", opacity: "1", transform: "translate3d(0px, 0px, 0px)"}}>
            <div className="hover" />
            <div className="text">Capabilities and Services</div>
          </a>
        </Center>
      </Content>
    </div>
  );
}

export default Six;
