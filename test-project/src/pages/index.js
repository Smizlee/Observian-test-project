import React from "react"
import * as containerStyles from "../css/container.css"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"


export default function Home() {
  return (
    <div className="rectangle">
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}
