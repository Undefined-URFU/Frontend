import {useState} from "react";
import {IAuthName, IAuthState} from "components/widgets/AuthForm/auth.types.ts";
import {generateDefaultAuthValues} from "components/widgets/AuthForm/auth.context.ts";
import useValidationCtrl from "components/wrapper/Validation/useValidationCtrl.ts";
import validation from "components/wrapper/Validation/validation.ts";
import {authApi} from "api/auth/auth.ts";
import useHttpLoaderWithServerError from "hooks/useHttpLoader/useHttpLoaderWithServerError.ts";
import {useAtom} from "jotai";
import {authAtom} from "stores/auth/auth.atom.ts";


interface IProps {
  actionType: "register" | "login";
}

const useAuthCtrl = ({actionType}: IProps) => {
  const [authForm, setAuthForm] = useState<IAuthState>(generateDefaultAuthValues());
  const {wait, loading, serverError} = useHttpLoaderWithServerError()
  const [, setAuthState] = useAtom(authAtom)
  const handleChange = (value: string, name: IAuthName,) => {
    setAuthForm((prevState) => ({...prevState, [name]: value}));
  }

  const handleCheck = (value: boolean, name: string) => {
    setAuthForm((prevState) => ({...prevState, [name]: value}));
  }

  const handleSubmitCredentials = () => {

    const data = {
      email: authForm.email,
      password: authForm.password,
    }

    if (actionType === "register") {
      wait(authApi.register(data), (resp) => {
        if (resp.status === 'success') {
          wait(authApi.login(data), (resp) => {
            if (resp.status === 'success') {
              setAuthState({isOnboarding: true, token: resp.body.token});
              localStorage.setItem('token', resp.body.token)
            }
          })

        }
      })
    } else if (actionType === "login") {
      wait(authApi.login(data), (resp) => {
        if (resp.status === 'success') {
          setAuthState((prev) => ({...prev, token: resp.body.token}));
          localStorage.setItem('token', resp.body.token)
        }
      })
    }
  }


  const validationFunctions = {
    email: validation.emailValidate,
    password: validation.passwordValidate,
  }


  const {rememberMe, ...validationObject} = authForm;

  const validationCtrl = useValidationCtrl(
    handleSubmitCredentials,
    validationObject,
    validationFunctions,
  )

  return {
    authForm,
    handleChange,
    handleSubmitCredentials,
    handleCheck,
    validationCtrl,
    loading,
    serverError,
  }
}

export default useAuthCtrl
