//Core
import React from "react"

//Style
import style from "./style.module.scss"

const Background = props => {
  return <header className={style.Background}>{props.children}</header>
}

export default Background
