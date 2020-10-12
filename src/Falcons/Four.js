import React, {useState, useRef,useEffect }from 'react';
import styled from "styled-components"
import {TweenMax, Power3} from "gsap"
import Background from '../images/falcon4-1.webp'
import "./Falcon.scss"


// usestate 이용해서 onclick하면 active hidden change

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

const InnerSection = styled.div`
  height: 944px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  display: block;
  width: 100%;
`

const InnerLetter = styled.div`
opacity: 0;
  text-align: left;
  width: 50%;
  max-width: 520px;
  position: absolute;
  top:15%;
  left: 50px;
  display:block;
  @media screen and (max-width: 1200px) {
    max-width: 420px;
  }
`

const Tap = styled.div`
  text-align: left;
  margin:50px 0 30px;
  display: block;
  color: rgba(255,255,255,.5);
`

const Button = styled.button`
  border: 0;
  padding: 0;
  background: 0 0;
  font-size: 16px;
  font-weight: 600;
  opacity: ${props=> props.opacity};
  color: #fff;
  margin: 0 10px;
  text-transform: uppercase;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  transition: opacity .3s;
  line-height: normal;
  vertical-align: baseline;
  font-family: sans-serif;

  &:first-of-type {
    margin-left: 0px;
  }

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 0;
    border-bottom: 1px solid #fff;
  }
`

function Four() {

  const [change, setChange] = useState({
    opacity: "0.5"
  });

  let image = useRef(null);
  let textOne = useRef(null);
  let title = useRef(null);
  let textTwo = useRef(null);

  useEffect(() => {
    TweenMax.to(
      image,
      7,
      {
        opacity: 1,
        y: -20,
        ease: Power3.easeOut,
        delay: .8
      }
    )
    TweenMax.to(
      textOne,
      3,
      {
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay: .1
      }
    )
    TweenMax.to(
      title,
      7,
      {
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay: .8
      }
    )
    TweenMax.to(
      textTwo,
      7,
      {
        opacity:1,
        y:-20,
        ease:Power3.easeOut,
        delay: .8
      }
    )
  }, [])





  return(
    <div className="section">
      <Img ref={el => {image = el}} />
      <InnerSection>
        <InnerLetter ref={el => {title = el}}>
          <h3>engines</h3>
          <h2>merlin</h2>
          <Tap ref={el => {textOne = el}}>
            <Button
              className="tabButton"
            >sea level
            </Button>
            |
            <Button
              opacity={change.opacity}
              onClick={()=> setChange({
              opacity: "1",
            })}
              tabIndex="-1"
              className="tabButton"
            >vacuum
            </Button>
          </Tap>
          <div className="tabData active" ref={el => {textTwo = el}}>
            <p className="main">
              Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use  a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.
            </p>
            <table className="sub">
              <tbody>
                <tr>
                  <td>PROPELLANT</td>
                  <td>LOX
                    <span style={{color: "#868686"}}>/ RP-1</span>
                  </td>
                </tr>
                <tr>
                  <td>THRUST</td>
                  <td>845 kN
                    <span style={{color: "#868686"}}>/ 190,000 lbf</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="tabData hidden">
            <p className="main">
              Merlin Vacuum features a larger exhaust section and a significantly larger expansion nozzle to maximize the engine’s efficiency in the vacuum of space. Its combustion chamber is regeneratively cooled, while the expansion nozzle is radiatively cooled. At full power, the Merlin Vacuum engine operates with the greatest efficiency ever for an American-made hydrocarbon rocket engine.
            </p>
            <table className="sub">
              <tbody>
                <tr>
                  <td>PROPELLANT</td>
                  <td>LOX
                    <span>/ RP-1</span>
                  </td>
                </tr>
                <tr>
                  <td>THRUST</td>
                  <td>981 kN
                    <span>/ 220,500 lbf</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </InnerLetter>
      </InnerSection>
    </div>
  );
}

export default Four;
