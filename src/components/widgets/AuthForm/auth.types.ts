export interface ILoginPayload {
  email: string,
  password: string,
}

export interface IRegisterPayload extends ILoginPayload {
  name: string,
}

export interface IAuthState {
  email: string,
  password: string,
  name: string,
  rememberMe: boolean,
}

export type IAuthName = keyof IAuthState;