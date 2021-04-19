import React from "react"
import "../css/header.css"
import DarkRed from "../images/SVGDarkRed.svg"
import BlackLine from "../images/SVGBlackLine.svg"
const Header = () => {
    return (
        <div className="headerContainer">
                <div>
                    <img src={DarkRed} alt="DarkRed" />
                    <text className="headerTitleText">NICK SAMPLE</text>
                    <div className="underline"></div>
                    <img src={BlackLine} alt="BlackLine" className="blackLineImage" />
                   
                <div className="bodyContainer">
                    <div style={{width:"80%", alignSelf:'flex-end',margin:'80px'}}>
                        <p className="bodyText">One of the earliest activities we engaged in when we first got into astronomy is the same one we like to show our children just as soon as their excitement about the night sky begins to surface. That is the fun of finding constellations. But finding constellations and using them to navigate the sky is a discipline that goes back virtually to the dawn of man. In fact, we have cave pictures to show that the more primitive of human societies could “see pictures” in the sky and ascribe to them significance.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;