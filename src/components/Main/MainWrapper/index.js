//Core
import React from "react"

//Images
import left from "../../../images/left.png"
import right from "../../../images/right.png"

//styles
import style from "./style.module.scss"

const Main = props => {
  return (
    <div className={style.MainWrapper}>
      <h1 className={style.title}>
        Святкуй 30-річчя ТАСКОМБАНКУ разом з нами та вигравай найкрутіші гаджети
        цієї осені!
      </h1>
      <img src={left} className={style.left}></img>
      <img src={right} className={style.right}></img>
      <main>{props.children}</main>
      <a
        href="/static/30ann.pdf"
        target="_blank"
        rel="noopener norefferer"
        style={{ textDecoration: "none" }}
        className={style.conditions}
      >
        Офіційні правила акції
      </a>
    </div>
  )
}

export default Main
