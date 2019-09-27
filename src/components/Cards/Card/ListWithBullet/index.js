//Core
import React from "react"

//styles
import style from "./style.module.scss"

const ListWithBullet = ({ list }) => {
  return (
    <ul className={style.withBullet}>
      {list.map((text, key) => (
        <li key={key}>{text}</li>
      ))}
    </ul>
  )
}

export default ListWithBullet
