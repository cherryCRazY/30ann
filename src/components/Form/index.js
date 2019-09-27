//Core
import React from "react"

//Components
import InputWIthIcon from "./FormComponents/InputWIthIcon"
import Button from "./FormComponents/Button"
import CheckBox from "./FormComponents/CheckBox"

//Images
import person from "../../images/person.png"
import phone from "../../images/phone.png"

const Form = () => {
  return (
    <div>
      <InputWIthIcon
        img={person}
        // change={this.handleChangeName}
        message={"Перевірте правильність вводу ім'я"}
        // checked={name.checked}
        // valid={name.valid}
      ></InputWIthIcon>
      <InputWIthIcon
        img={phone}
        // change={this.handleChangePhone}
        // checked={phone.checked}
        // valid={phone.valid}
        message={"Перевірте правильність вводу номера мобільного телефону"}
        type={"number"}
        mask
      ></InputWIthIcon>
      <CheckBox></CheckBox>
      <Button text={"Зареєструватися в акції"}></Button>
    </div>
  )
}

export default Form

// import React, { Component } from 'react';

// class Form extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         );
//     }
// }

// export default Form;
