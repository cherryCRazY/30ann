//Core
import React from "react"

//Style
import style from "./style.module.scss"

//Images
import logo from "../../../../images/logo.png"

const Logo = () => {
  return (
    <a href="https://tascombank.ua/">
      <img src={logo} className={style.Logo} alt="Лого ТАСКОМБАНК"></img>
    </a>
  )
}

export default Logo
