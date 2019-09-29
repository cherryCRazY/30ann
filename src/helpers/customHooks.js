//Core
import React, { useReducer } from "react"

//Action
import formActions from "../actions/formActions"

//Itils
import axios from "axios"

//Helpers
import {
  validateName,
  validatePhoneNumber,
  transformPhoneAfterMask,
} from "./validation"
import { async } from "q"

const {
  START_FETCH,
  FINISH_FETCH,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ORDER_CARD,
  CHANGE_NAME,
  VALID_NAME,
  CHECKED_NAME,
  CHANGE_PHONE,
  VALID_PHONE,
  CHECKED_PHONE,
} = formActions

const initialState = {
  fetch: false,
  success: false,
  fail: false,
  orderCard: false,
  name: { valid: false, value: "", checked: false },
  phone: { valid: false, value: "", checked: false },
}

const reducer = (state, action) => {
  switch (action.type) {
    case START_FETCH:
      return { ...state, fetch: true }
    case FINISH_FETCH:
      return { ...state, fetch: false, fail: false, success: false }
    case FETCH_SUCCESS:
      return { ...state, fetch: false, success: true }
    case FETCH_FAIL:
      return { ...state, fetch: false, fail: true }

    case ORDER_CARD:
      return { ...state, orderCard: !state.orderCard }

    case CHANGE_NAME:
      return { ...state, name: { ...state.name, value: action.payload } }
    case VALID_NAME:
      return {
        ...state,
        name: { ...state.name, valid: action.payload, checked: true },
      }

    case CHANGE_PHONE:
      return { ...state, phone: { ...state.phone, value: action.payload } }
    case VALID_PHONE:
      return {
        ...state,
        phone: { ...state.phone, valid: action.payload, checked: true },
      }

    default:
      return state
  }
}

const useForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //UI
  const startFetch = () => dispatch({ type: START_FETCH })
  const finishFetch = () => dispatch({ type: FINISH_FETCH })
  const fetchSuccess = () => dispatch({ type: FETCH_SUCCESS })
  const fetchFail = () => dispatch({ type: FETCH_FAIL })

  //Fields
  const toogleOrder = () => dispatch({ type: ORDER_CARD })

  const changeName = name => dispatch({ type: CHANGE_NAME, payload: name })
  const validName = isValidName =>
    dispatch({ type: VALID_NAME, payload: isValidName })

  const changePhone = phone => dispatch({ type: CHANGE_PHONE, payload: phone })
  const validPhone = isValidPhone =>
    dispatch({ type: VALID_PHONE, payload: isValidPhone })

  const onClick = async () => {
    try {
      const { phone, name, orderCard } = state
      const normalPhone = transformPhoneAfterMask(phone.value)

      const isValidPhone = validatePhoneNumber(normalPhone)
      const isValidName = validateName(name.value)

      validPhone(isValidPhone)
      validName(isValidName)

      if (isValidPhone && isValidName) {
        startFetch()
        try {
          const res = await axios.post("http://localhost:4000/", {
            name: name.value,
            phone: normalPhone,
            orderCard: orderCard,
          })
          console.log("res", res)
          res.status === 200 ? fetchSuccess() : fetchFail()
          console.log("state", state)
        } catch (error) {
          console.log("e", error)
          fetchFail()
        } finally {
          finishFetch()
        }
      }
    } catch (error) {
      console.log("err", error)
    }
  }

  return {
    state,
    toogleOrder,
    changeName,
    changePhone,
    onClick,
  }
}

export default useForm
