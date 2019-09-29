//Core
import React, { Component } from "react"

//Style
import "./style.scss"

//Components
import Button from "../Form/FormComponents/Button"
import Feedback from "./Feedback"


// export default Footer

const Footer = () => (
  <footer className="footer">
    <div className="buttonWrapper">
      <Button jump text={"Зареєструватися в акції"}></Button>
    </div>
    <Feedback></Feedback>
  </footer>
)

export default Footer
