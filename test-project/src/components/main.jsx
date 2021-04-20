import React from "react"
import "../css/main.css"
import DarkRed from "../images/SVGDarkRed.svg"
import BlackLine from "../images/SVGBlackLine.svg"
import InfoCard from "./card"

const Main = () => {
  return (
    <div
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      <div className="main-container">
        <div className="wrapper">
          <img src={DarkRed} alt="DarkRed" width="10%" height="auto" />
          <text className="headerTitleText">NICK SAMPLE</text>
          <img src={BlackLine} alt="BlackLine" className="blackLineImage" />
          {/*<div className="underline" />*/}
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
          <p className="bodyText">
            Constellations also have been important in culture and navigation
            long before we had sophisticated systems of navigation. Early
            explorers, particularly by sea, relied exclusively on the night sky
            to help them find their way to their destination. In fact, when
            “Columbus sailed the ocean blue in 1492″ and “discovered” America,
            he could not have done it without astronomy and the help of
            navigation of the cosmos, much of which is made possible because of
            the important constellations.
          </p>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <InfoCard />
      </div>
    </div>
  )
}

export default Main
