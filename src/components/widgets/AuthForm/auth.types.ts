export interface IAuthState {
  email: string,
  password: string,
  rememberMe: boolean,
}

export type IAuthName = keyof IAuthState;