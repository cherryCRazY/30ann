import swal from "sweetalert"

export const onSucces = () => {
  swal(
    "Заявку прийнято в роботу!",
    `Ми зателефонуємо Вам найближчим часом`,
    "success"
  )
}
export const onFail = () => {
  swal("Помилка!", `Сервіс не відповідає спробуйте пізніше`, "error")
}
