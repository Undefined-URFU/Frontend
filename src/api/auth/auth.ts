import {IAuthRequest, ILoginResponse} from "models/auth/api.ts";
import http, {handleErrorResponse, handleHttpResponse} from 'models/http/index.ts'
import {AxiosError, AxiosResponse} from "axios";

const login = async (data: IAuthRequest) => {
  try {
    const resp: AxiosResponse<ILoginResponse> = await http.post( 'auth/login', data)
    return handleHttpResponse(resp)
  } catch (err) {
    return handleErrorResponse(err as AxiosError)
  }
}

const register = async (data: IAuthRequest) => {
  try {
    const resp = await http.post('auth/register', data)
    return handleHttpResponse(resp)
  } catch (err) {
    return handleErrorResponse(err as AxiosError)
  }
}
export const authApi = {
  login,
  register,
}