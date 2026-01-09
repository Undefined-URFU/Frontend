import {type PropsWithChildren, useEffect} from "react";
import Auth from "components/pages/Auth/Auth.tsx";
import {applyInterceptors} from "models/http";
import {authAtom} from "stores/auth/auth.atom.ts";
import {useAtom} from "jotai";

const AuthProvider = (props: PropsWithChildren) => {
  const [authState, setAuthState] = useAtom(authAtom)


  useEffect(() => {
    applyInterceptors(setAuthState)
  }, []);

  if (!authState.token || authState.isOnboarding) {
    return <Auth />;
  }


  return (
    <>
      {props.children}
    </>
  );
};

export default AuthProvider;