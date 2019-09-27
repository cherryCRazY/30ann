//Core
import React from "react"

//Components
import Header from "../components/Header"
import Main from "../components/Main"
// import Advanteges from "../components/Advanteges"
import Cards from "../components/Cards"
// import Footer from "../components/Footer"
import SEO from "../components/seo"

//Styles
import "../styles/main.scss"

const IndexPage = () => (
  <div>
    <SEO
      title="Рефінансування кредитів без переплат | ТАСКОМБАНК"
      description={`Почни рефінансування кредиту вже зараз разом з ТАСКОМБАНК та позбався від кредитних кайданів💸 Рефінансуємо кредити інших банків в ТАСКОМБАНК на прозорих умовах та без прихованих відстоків і платежів⚖️`}
    />
    <Header></Header>
    <Main></Main>
    <Cards></Cards>
    {/* <Footer></Footer> */}
  </div>
)

export default IndexPage
