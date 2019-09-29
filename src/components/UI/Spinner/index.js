//Core
import React from "react"

//style
import "./style.scss"

const Spinner = () => {
  return (
    <div className="spinnerWrappers">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Spinner
