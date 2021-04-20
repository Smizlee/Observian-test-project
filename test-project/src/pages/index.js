import React from "react"
import * as Container from "../css/container.module.css"
import Header from "../components/header"
import Main from "../components/main"
import Footer from "../components/footer"

export default function Home() {
  return (
    <div className={Container.rectangle}>
      <div className={Container.header}>
        <Header />
      </div>
      <div className={Container.main}>
        <Main />
      </div>
      <div className={Container.footer}>
        <Footer />
      </div>
    </div>
  )
}
