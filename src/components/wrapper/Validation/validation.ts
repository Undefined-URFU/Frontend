import { IValidationFunctionResponse } from './validation.types'

const emailValidate = (email: string): IValidationFunctionResponse => {
  if (!email) {
    return { key: 'email', message: 'Введите email' }
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(email)) {
    return { key: 'email', message: 'Email введен неправильно' }
  }
  return null
}

const passwordValidate = (password: string): IValidationFunctionResponse=> {
  if (!password) {
    return { key: 'password', message: 'Введите пароль' }
  }
  return null
}

const validateName = (name: string): IValidationFunctionResponse => {
  if (!name) {
    return { key: 'name', message: 'Введите наименование' }
  }
  return null
}



const validation = {
  emailValidate,
  passwordValidate,
  validateName,
}

export default validation
