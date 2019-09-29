//Core
import React from "react"

//Style
import style from "./style.module.scss"

//Images
import footer_phone from "../../../images/footer_phone.png"
import worldwide from "../../../images/worldwide.png"

//Components
import FooterLink from "./FooterLink"

const Feedback = () => {
  return (
    <nav className={style.Feedback}>
      <div className={style.FeedbackMainInfo}>
        <div>
          <p className={style.TAS}>ТАСКОМБАНК</p>
          <FooterLink
            image={footer_phone}
            text={"0 (800) 503 580"}
            link={"tel:0800503580"}
            annotation={"(Безкоштовно в межах України)"}
          ></FooterLink>
        </div>

        <FooterLink
          image={worldwide}
          text={"www.tascombank.ua"}
          link={"http://tascombank.ua"}
          annotation={"Ліцензія НБУ 84 від 25 жовтня 2011 року"}
        ></FooterLink>
      </div>
      <div className={style.cor}>
        <FooterLink
          small
          annotation={
            "Залишаючи номер телефона Ви підтверджуєте згоду на обробку Ваших персональних данних"
          }
        ></FooterLink>
      </div>
    </nav>
  )
}

export default Feedback
