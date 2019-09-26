//Core
import React from "react"

//Style
import "./style.scss"

//Components
// import Button from "../Button"
// import CustomInput from "../CustomInput"
// import Background from "./HeaderLayout/Background"
// import Logo from "./HeaderLayout/Logo"
import Image from "./Image"

import HeaderLayout from "./HeaderLayout"

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
      </div>
    </HeaderLayout>
  )
}

export default Header
