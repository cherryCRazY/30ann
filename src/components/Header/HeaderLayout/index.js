//Core
import React from "react"

import Background from "./Background"
import Logo from "./Logo"

const HeaderLayout = props => {
  return (
    <>
      <Logo></Logo>
      <Background>{props.children}</Background>
    </>
  )
}

export default HeaderLayout
