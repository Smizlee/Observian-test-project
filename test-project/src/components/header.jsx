import React from "react"
import * as Head from "../css/header.module.css"

const Header = () => {
  return (
    <header className={Head.pageHeader}>
      <nav>
        <a href="/" className={Head.ctahome}>
          Home
        </a>
        <a href="/page2" class={Head.ctapage2}>
          Page 2
        </a>
      </nav>
    </header>
  )
}

export default Header
