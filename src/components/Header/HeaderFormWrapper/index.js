//Core
import React from "react"

//Style
import style from "./style.module.scss"

//Compoennts
import Form from "../../Form"
import Button from "../../Form/FormComponents/Button"

const HeaderFormWrapper = () => {
  return (
    <div className={style.HeaderFormWrapper}>
      <div className={style.TextWrapper}>
        <h1 className={style.title}>30 РОКІВ РАЗОМ!</h1>
        <h2 className={style.subtitle}>
          РОЗРАХОВУЙСЯ КАРТКАМИ ВЕЛИКА П’ЯТІРКА
          <br></br>
          ТА #PUDRACARD ТА ОТРИМАЙ КРУТІ ПРИЗИ
        </h2>
        <div className={style.blue}>
          <h3>30 років! 30 днів! 30 гаджетів!</h3>
        </div>
        <Form></Form>
      </div>
    </div>
  )
}

export default HeaderFormWrapper
