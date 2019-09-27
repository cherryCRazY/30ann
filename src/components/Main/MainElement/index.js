//Core
import React from "react"

//styles
import style from "./style.module.scss"

const MainElement = ({ img, title, list = [] }) => {
  return (
    <div className={style.MainElement}>
      <div>
        <img src={img} className={style.image}></img>
      </div>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {list.map((text, key) => (
          <li key={key}>{text}</li>
        ))}
      </ul>
    </div>
  )
}

export default MainElement
