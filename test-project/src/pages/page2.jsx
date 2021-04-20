import React from "react"
import Header from "../components/header"
import * as Page from "../css/Page2.module.css"

const Page2 = () => {
  return (
    <div className={Page.rectangle}>
      <Header />
      <text className={Page.pageText}>Page 2</text>
    </div>
  )
}

export default Page2
