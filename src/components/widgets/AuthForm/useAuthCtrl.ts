import {useState} from "react";
import {IAuthName, IAuthState} from "components/widgets/AuthForm/auth.types.ts";
import {generateDefaultAuthValues} from "components/widgets/AuthForm/auth.context.ts";
import useValidationCtrl from "components/wrapper/Validation/useValidationCtrl.ts";
import validation from "components/wrapper/Validation/validation.ts";

interface IProps {
  actionType: "register" | "login";
}

const useAuthCtrl = ({actionType}: IProps) => {
  const [authForm, setAuthForm] = useState<IAuthState>(generateDefaultAuthValues());


  const handleChange = (value: string, name: IAuthName,) => {
    setAuthForm((prevState) => ({...prevState, [name]: value}));
  }


  const handleCheck = (value: boolean, name: string) => {
    setAuthForm((prevState) => ({...prevState, [name]: value}));
  }


  const handleSubmit = () => {

  }
  const validationFunctions =
    actionType === 'register'
      ? {
        name: validation.nameValidate,
        email: validation.emailValidate,
        birthdayDate: validation.birthdayValidate,
        password: validation.passwordValidate,
      }
      : {
        email: validation.emailValidate,
        password: validation.passwordValidate,
      }


  const {rememberMe, ...validationObject} = authForm;

  const validationCtrl = useValidationCtrl(
    handleSubmit,
    validationObject,
    validationFunctions,
  )

  return {
    authForm,
    handleChange,
    handleSubmit,
    handleCheck,
    validationCtrl,
  }
}

export default useAuthCtrl
