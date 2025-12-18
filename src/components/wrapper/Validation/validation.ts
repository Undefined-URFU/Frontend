import {IValidationFunctionResponse} from './validation.types'


const emailValidate = (email: string): IValidationFunctionResponse => {
  if (!email) {
    return {key: 'email', message: 'Введите email'}
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
    return {key: 'email', message: 'Email введен неправильно'}
  }
  return null
}

const passwordValidate = (password: string): IValidationFunctionResponse => {
  if (!password) {
    return {key: 'password', message: 'Введите пароль'}
  }
  return null
}

const nameValidate = (name: string): IValidationFunctionResponse => {
  if (!name) {
    return {key: 'name', message: 'Введите имя'}
  }
  return null
}

const birthdayValidate = (date: string): IValidationFunctionResponse => {
  if (!date) {
    return {key: 'birthdayDate', message: 'Введите дату рождения'}
  }
  return null
}


const validation = {
  emailValidate,
  passwordValidate,
  nameValidate,
  birthdayValidate,
}

export default validation
