import axios, {AxiosError, AxiosResponse} from 'axios'
import config from '../../config.ts'
import {IErrorResponse, ISuccessResponse} from 'models/http/types.ts'
import {Dispatch, SetStateAction} from 'react'
import {generateEmptyAuthState} from "stores/auth/auth.atom.ts";


const http = axios.create({
  baseURL: config.API_URL,
})


export const applyInterceptors = (setAuthState: Dispatch<SetStateAction<{
  token: string | null,
  isOnboarding: boolean,
}>>) => {

  http.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
  })

  http.interceptors.response.use((response) => response,
    (err) => {
      const shouldLogout = err.response && err.response?.status === 401
      if (shouldLogout) {
        localStorage.removeItem('token')
        setAuthState(generateEmptyAuthState())

      }
    })
}


export const handleHttpResponse = <T>(response: AxiosResponse<T>): ISuccessResponse<T> => {
  return {
    body: response.data,
    status: 'success',
  }
}
export const handleErrorResponse = (err: AxiosError): IErrorResponse => {
  if (err?.response?.status === 404) {
    return {
      message: 'Запрашиваемый ресурс не найден',
      code: err?.response?.status,
      status: 'error',
    }
  }

  if (err?.response?.status === 400) {
    return {
      status: 'error',
      message: 'С вашими данными что-то не так',
      code: err?.response?.status,
      body: err?.response?.data as Record<string, string>,
    }
  }
  return {
    status: 'error',
    message: err?.message ?? '',
    code: err?.response?.status,
  }
}
export default http