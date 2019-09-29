//Core
import React from "react"

//Components
import InputWithIcon from "./FormComponents/InputWithIcon"
import Button from "./FormComponents/Button"
import CheckBox from "./FormComponents/CheckBox"
import { onFail, onSucces } from "../UI/PopUp"
import Spinner from "../UI/Spinner"

//Images
import personIcon from "../../images/person.png"
import phoneIcon from "../../images/phone.png"

//CustomHooks
import useForm from "../../helpers/customHooks"

const Form = () => {
  const { state, toogleOrder, changeName, changePhone, onClick } = useForm()
  const { name, phone, fetch, success, fail } = state

  // console.log("state", state)

  return fetch ? (
    <Spinner />
  ) : (
    <>
      <div>
        <InputWithIcon
          img={personIcon}
          change={changeName}
          message={"Перевірте правильність вводу ім'я"}
          checked={name.checked}
          valid={name.valid}
        ></InputWithIcon>
        <InputWithIcon
          img={phoneIcon}
          change={changePhone}
          checked={phone.checked}
          valid={phone.valid}
          message={"Перевірте правильність вводу номера мобільного телефону"}
          type={"number"}
          mask
        ></InputWithIcon>
        <CheckBox click={toogleOrder}></CheckBox>
        <Button text={"Зареєструватися в акції"} click={onClick}></Button>
      </div>
      {success ? onSucces() : null}
      {fail ? onFail() : null}
    </>
  )
}

export default Form
