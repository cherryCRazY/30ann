//Core
import React from "react"

//Components
import Header from "../components/Header"
import Main from "../components/Main"
// import Advanteges from "../components/Advanteges"
import Cards from "../components/Cards"
import Footer from "../components/Footer"
import SEO from "../components/seo"

//Styles
import "../styles/main.scss"

const IndexPage = () => (
  <div>
    <SEO
      title="Cупер розіграш з нагоди 30 річчя | ТАСКОМБАНК"
      description={`Прийми участь у розіграші  та отримай можливість виграти круті подарунки🎁💥.`}
    />
    <Header></Header>
    <Main></Main>
    <Cards></Cards>
    <Footer></Footer>
  </div>
)

export default IndexPage
