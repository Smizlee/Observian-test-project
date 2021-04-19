import React from "react"
import "../css/main.css"
import DarkRed from "../images/SVGDarkRed.svg"
import BlackLine from "../images/SVGBlackLine.svg"
const Main = () => {
  return (
    <div className="headerContainer">
      <img src={DarkRed} alt="DarkRed" width="10%" height="auto" style={{position:"relative", display:"block", alignSelf:'flex-start'}}/>
      <text className="headerTitleText">NICK SAMPLE</text>
      <img
        src={BlackLine}
        alt="BlackLine"
        className="blackLineImage"
        width="25%"
        height="auto"
        style={{ display:"block",margin:"auto",position:'relative'}}
      />
      <div className="bodyContainer">
        <div>
          <div className="underline" />
        </div>
          <p className="bodyText">
            One of the earliest activities we engaged in when we first got into
            astronomy is the same one we like to show our children just as soon
            as their excitement about the night sky begins to surface. That is
            the fun of finding constellations. But finding constellations and
            using them to navigate the sky is a discipline that goes back
            virtually to the dawn of man. In fact, we have cave pictures to show
            that the more primitive of human societies could “see pictures” in
            the sky and ascribe to them significance.
          </p>
      </div>
    </div>
    
  )
}

export default Main
