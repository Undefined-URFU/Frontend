import {useState} from "react";
import {IAuthName, IAuthState} from "components/widgets/AuthForm/auth.types.ts";
import {generateDefaultAuthValues} from "components/widgets/AuthForm/auth.context.ts";

interface IProps {
  actionType: "register" | "login";
}
const useAuthCtrl = ({actionType}: IProps) =>{
  const [authForm, setAuthForm] = useState<IAuthState>(generateDefaultAuthValues());


  const handleChange = (value: string, name: IAuthName, ) => {
    setAuthForm((prevState)=> ({...prevState, [name]: value}));
  }


  const handleCheck = (value: boolean, name: string) => {
    setAuthForm((prevState)=> ({...prevState, [name]: value}));
  }


  const handleSubmit = () => {

  }


  return {
    authForm,
    handleChange,
    handleSubmit,
    handleCheck,
  }
}

export default useAuthCtrl
