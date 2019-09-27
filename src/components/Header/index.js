//Core
import React from "react"

//Style
import "./style.scss"

//Components
import Image from "./Image"
import HeaderLayout from "./HeaderLayout"
import HeaderFormWrapper from "./HeaderFormWrapper"

//Images
import main from "../../images/main.png"

//helpers
console.log(
  `%c TASCOMBANK`,
  "background: #333366; color: white; font-size: 15px; padding: 3px 40%;"
)

const Header = () => {
  return (
    <HeaderLayout>
      <div className="HeaderContainer">
        <Image src={main} alt="ТАСКОМБАНК 30 років акція"></Image>
        <HeaderFormWrapper></HeaderFormWrapper>
      </div>
    </HeaderLayout>
  )
}

export default Header
