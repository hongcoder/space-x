import React from 'react'
import "./Falcon.scss"
import styled from "styled-components"
import Countup from "react-countup";

const Content = styled.div`
  width:90%;
  height:auto;
  margin: 75px auto;
  max-width: 960px;
  display:inline-block;
  position:relative;
  text-align: center;
`

function Stat(){
  return (
    <div className="section">
      <Content>
        <div className="numbers">
          <Countup start={0} end={92} duration={10} className="number"  />
          <span className="label">Total launches</span>
        </div>
        <div className="numbers">
          <Countup start={0} end={53} duration={10} className="number"  />
          <span className="label">total landings</span>
        </div>
        <div className="numbers">
          <Countup start={0} end={38} duration={10} className="number"  />
          <span className="label">reflown rockets</span>
        </div>
      </Content>
    </div>
  )
}

export default Stat