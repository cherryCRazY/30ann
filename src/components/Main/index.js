//Core
import React from "react"

//Components
import MainWrapper from "./MainWrapper"
import MainElement from "./MainElement"

//Images
import cards from "../../images/cards.png"
import gadgets from "../../images/gadgets.png"
import calendar from "../../images/calendar.png"

//styles
import style from "./style.module.scss"

const Main = () => {
  return (
    <MainWrapper>
      <div className={style.wp}>
        <MainElement
          img={cards}
          title={"Як прийняти участь ?"}
          list={[
            "З 1 по 31 жовтня розрахуватися за покупки",
            "карткою велика п’ятірка або #PudraCard на",
            "суму чеку 500 грн і більше",
          ]}
        ></MainElement>
        <MainElement
          img={gadgets}
          title={"Які подарунки?"}
          list={["Телевізори", "Смартфони", "Планшети", "Фітнес браслети"]}
        ></MainElement>
        <MainElement
          img={calendar}
          title={"Коли розіграш?"}
          list={[
            `I Етап - 10 жовтня`,
            `II Етап - 21 жовтня`,
            `III Етап - 31 жовтня`,
          ]}
        ></MainElement>
      </div>
    </MainWrapper>
  )
}

export default Main
