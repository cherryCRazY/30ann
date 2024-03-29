//Core

import React from "react"

//Styles
import style from "./style.module.scss"

const FooterLink = ({ text = "", link = "", annotation, image, small }) => {
  return (
    <div className={style.FooterLink}>
      {image ? <img src={image} alt="ТАСКОМБАНК feedback"></img> : null}
      <div>
        <a href={link}>
          <p className={style.link}>{text}</p>
        </a>
        <h5
          className={style.annotation}
          style={small ? { fontSize: "12px" } : {}}
        >
          {annotation}
        </h5>
      </div>
    </div>
  )
}

export default FooterLink
