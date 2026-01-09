import http, {handleErrorResponse, handleHttpResponse} from 'models/http/index.ts'
import {AxiosError, AxiosResponse} from "axios";
import {ICreateUserPreferencesRequestData, IGetUserPreferencesResponse} from "models/userPreferences/api.ts";

const getPreferences = async () => {
  try {
    const resp: AxiosResponse<IGetUserPreferencesResponse> = await http.get( '/user_preferences')
    return handleHttpResponse(resp)
  } catch (err) {
    return handleErrorResponse(err as AxiosError)
  }
}
const createPreferences = async (data: ICreateUserPreferencesRequestData) => {
  try {
    const resp  = await http.post( '/user_preferences', data)
    return handleHttpResponse(resp)
  } catch (err) {
    return handleErrorResponse(err as AxiosError)
  }
}

export const userPreferencesApi = {
  getPreferences,
  createPreferences,
}