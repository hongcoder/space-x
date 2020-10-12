import React from 'react';
import styled from "styled-components"
// import one from '../images/falcon5-1.webp'
// import two from '../images/falcon5-2.webp'
// import three from '../images/falcon5-3.webp'
// import four from '../images/falcon5-4.webp'
// import five from '../images/falcon5-5.webp'
// import six from '../images/falcon5-6.webp'
// import seven from '../images/falcon5-7.webp'
// import eight from '../images/falcon5-8.webp'
// import nine from '../images/falcon5-9.webp'
// import ten from '../images/falcon5-10.webp'

import "./Falcon.scss"


const Pictures = styled.div`
  transition-duration: 0ms;
  transform: translate3d(-950px, 0px, 0px);
  display:flex;
  box-sizing:content-box;
  transition-property: transform;
  position: relative;
  width: 100%;
  height: 944px;
`




function Five() {
  return(
    <div className="section">
      <Pictures>
        <div className="swiper-slide prev">
          <div style={{backgroundImage: `url(require("../images/falcon5-10.webp"))`}} />
          <div className="caption 10">
            <div className="description">
              Falcon 9 vertical with its Iridium payload at moonrise
            </div>
          </div>
        </div>
        {/*
        <div className="swiper-slide active">
          <div style={{backgroundImage: `url(require("../images/falcon5-1.webp"))`}} />
          <div className="caption 1">
            <div className="description">
              Falcon 9 first and second stages after separating in flight
            </div>
          </div>
        </div>


        <div className="swiper-slide next">
          <div style={{backgroundImage: `url(require("../images/falcon5-2.webp"))`}} />
          <div className="caption 2">
            <div className="description">
              Falcon 9 lifts off with its Iridium-5 payload
            </div>
          </div>
        </div>


        <div className="swiper-slide">
          <div style={{backgroundImage: `url(require("../images/falcon5-3.webp"))`}} />
          <div className="caption 3">
            <div className="description">
              Falcon 9 lands on the droneship Just Read the Instructions
            </div>
          </div>
        </div>


        <div className="swiper-slide">
          <div style={{backgroundImage: `url(require("../images/falcon5-4.webp"))`}} />
          <div className="caption 4">
            <div className="description">
              Close-up on the Merlin engines of Falcon 9 during liftoff
            </div>
          </div>
        </div>


        <div className="swiper-slide">
          <div style={{backgroundImage: `url(require("../images/falcon5-5.webp"))`}} />
          <div className="caption 5">
            <div className="description">
              Falcon 9 leaves a trail of light as it lifts off from Vandenberg
            </div>
          </div>
        </div>


        <div className="swiper-slide">
          <div style={{backgroundImage: `url(require("../images/falcon5-6.webp"))`}} />
          <div className="caption 6">
            <div className="description">
              Falcon 9 lifts off with Dragon for an in-flight test of the Crew Dragon abort system
            </div>
          </div>
        </div>


        <div className="swiper-slide">
          <div style={{backgroundImage: `url(require("../images/falcon5-7.webp"))`}} />
          <div className="caption 7">
            <div className="description">
              Falcon 9 lifts off with its Iridium-8 payload
            </div>
          </div>
        </div>


        <div className="swiper-slide">
          <div style={{backgroundImage: `url(require("../images/falcon5-8.webp"))`}} />
          <div className="caption 8">
            <div className="description">
              Falcon 9 with its Radarsat payload at sunset before launch
            </div>
          </div>
        </div>


        <div className="swiper-slide">
          <div style={{backgroundImage: `url(require("../images/falcon5-9.webp"))`}} />
          <div className="caption 9">
            <div className="description">
              Falcon 9 lands at Cape Canaveral
            </div>
          </div>
        </div> */}

      </Pictures>
      <div className="leftArrow">
        <svg width="6" height="10" viewBox="0 0 6 10">
          <path d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z" transform="translate(6) rotate(90)" fill="#fff" />
        </svg>
      </div>
      <div className="rightArrow">
        <svg width="6" height="10" viewBox="0 0 6 10">
          <path d="M5,6a.908.908,0,0,1-.7-.3l-4-4A.967.967,0,0,1,.3.3.967.967,0,0,1,1.7.3L5,3.6,8.3.3A.967.967,0,0,1,9.7.3a.967.967,0,0,1,0,1.4l-4,4A.908.908,0,0,1,5,6Z" transform="translate(0 10) rotate(-90)" fill="#fff" />
        </svg>
      </div>
    </div>
  );
}

export default Five;
