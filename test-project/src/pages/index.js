import React from "react"
import * as containerStyles from "../css/container.css"
import Header from "../components/header"
import Footer from "../components/footer"


export default function Home() {
  return (
    <div className="rectangle">
      <div style={{justifyContent:'center', alignItems:'center', display:"flex"}}>
        <Header />
      </div>
      <Footer />
    </div>
  )
}
