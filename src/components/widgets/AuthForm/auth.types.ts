export interface ILoginPayload {
  email: string,
  password: string,
}

export interface IRegisterPayload extends ILoginPayload {
  name: string,
  birthdayDate: string,
  sex: string,
}

export interface IAuthState {
  email: string,
  password: string,
  name: string,
  rememberMe: boolean,
  birthdayDate: string,
}

export type IAuthName = keyof IAuthState;