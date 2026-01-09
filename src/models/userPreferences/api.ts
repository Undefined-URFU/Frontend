export interface IGetUserPreferencesResponse {
  skinType: string;
  blacklist: string[];
}

export interface ICreateUserPreferencesRequestData {
  skinType: string;
  blacklist: string[];
}