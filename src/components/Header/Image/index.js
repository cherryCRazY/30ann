//Core
import React from "react"

//Style
import style from "./style.module.scss"

const Image = ({ src, alt }) => {
  return (
    <div className={style.ImageWrapper}>
      <img className={style.Image} src={src} alt={alt}></img>
    </div>
  )
}

export default Image
