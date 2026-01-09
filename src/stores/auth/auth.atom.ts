import { atom } from 'jotai'

export const generateEmptyAuthState = () => ({
  token: localStorage.getItem('token'),
  isOnboarding: false,
})
export const authAtom = atom(generateEmptyAuthState())
