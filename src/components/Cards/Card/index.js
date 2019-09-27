//Core
import React from "react"

//Components
import ListWithBullet from "./ListWithBullet"

//styles
import style from "./style.module.scss"

const Card = ({ title, image, advantages = [], cor }) => {
  return (
    <div className={style.Card}>
      <h4 className={style.title}>{title}</h4>
      <div className={style.ImageContainer}>
        <img src={image} className={style.Image} style={cor}></img>
      </div>
      <div className={style.kek}>
        <h4 className={style.subtitle}>Переваги :</h4>
        <ListWithBullet list={advantages}></ListWithBullet>
      </div>
    </div>
  )
}

export default Card
