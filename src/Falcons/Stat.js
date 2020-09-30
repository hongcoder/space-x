import React from 'react'
import "./Falcon.scss"
import styled from "styled-components"


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
          <span className="number">92</span>
          <span className="label">Total launches</span>
        </div>
        <div className="numbers">
          <span className="number">53</span>
          <span className="label">total landings</span>
        </div>
        <div className="numbers">
          <span className="number">38</span>
          <span className="label">reflown rockets</span>
        </div>
      </Content>
    </div>
  )
}

export default Stat