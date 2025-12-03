import {createContext} from "react";
import {IAuthName, IAuthState} from "components/widgets/AuthForm/auth.types.ts";

interface IAuthContext {
  values: IAuthState,
  onChange: (value: string, name: IAuthName ) => void,
  onCheck: (value: boolean, name: string) => void,
}

export const generateDefaultAuthValues = () => (
  {
      email: '',
      password: '',
      rememberMe: true,
      name: '',
  }
)


const authContext = createContext<IAuthContext>({
  values: generateDefaultAuthValues(),
  onChange: () => {},
  onCheck: () => {}
});

export default authContext;