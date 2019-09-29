//Core
import React from "react"

//Components
// import ListWithBullet from "./ListWithBullet"
import Card from "./Card"

//Images
import pudra from "../../images/pudra.png"
import big5 from "../../images/big5.png"

//styles
import style from "./style.module.scss"

const big5Advantages = [
  `До 100 000 грн кредитного ліміту`,
  `2% кешбеку в супермаркетах та АЗС`,
  `1% кешбеку на будь-які покупки`,
  `До 55 днів пільговий період `,
  `10% річних на залишок власних коштів `,
  `Безкоштовне оформлення картки`,
]

const pudraAdvantages = [
  `До 100 000 грн кредитного ліміту`,
  `5% кешбеку на одяг та взуття`,
  `3% кешбеку на косметику,парфумерію, \n б’юті сферу та аптеки`,
  `1% кешбеку на будь-які покупки`,
  `До 55 днів пільговий період `,
  `10% річних на залишок власних коштів`,
]

const Cards = () => {
  return (
    <section className={style.CardsWrapper}>
      <h2 className={style.title}>
        Кожний чек на суму від 500 грн приймає участь в розіграші.
      </h2>
      <h3 className={style.subtitle}>
        Більше розрахунків - більше шансів на виграш!
      </h3>
      <div className={style.Cards}>
        <Card
          title={"Велика П’ятірка"}
          image={big5}
          advantages={big5Advantages}
        ></Card>
        <Card
          title={"#PudraCard"}
          image={pudra}
          advantages={pudraAdvantages}
          cor={{ padding: "11px", marginTop: "36px" }}
        ></Card>
      </div>
    </section>
  )
}

export default Cards
