export interface IAuthRequest{
  email: string;
  password: string;
}

export interface ILoginResponse{
  token: string;
}