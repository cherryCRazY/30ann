//Core
import React from "react"

//Styles
import styles from "./style.module.scss"

//styles
import jump from "jump.js"

const moveTo = () => jump(".HeaderContainer", { duration: 2000 })

const Button = ({ jump, click, style, text }) => {
  return (
    <button
      id="button"
      style={style}
      onClick={jump ? moveTo : click}
      className={styles.button}
    >
      {text}
    </button>
  )
}

export default Button
