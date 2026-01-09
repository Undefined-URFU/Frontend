import s from './auth.module.scss'
import AuthForm from "components/widgets/AuthForm/AuthForm.tsx";
import {useState} from "react";
import useAuthCtrl from "components/widgets/AuthForm/useAuthCtrl.ts";
import AuthContext from "components/widgets/AuthForm/auth.context.ts";
import Button from "components/ui/Buttons/Button";
import cn from "utils/cn.ts";
import ValidationForm from "components/wrapper/Validation/ValidationForm.tsx";
import OnboardingForm from "components/widgets/OnboardingForm/OnboardingForm.tsx";
import {useAtomValue} from "jotai";
import {authAtom} from "stores/auth/auth.atom.ts";

const Auth = () => {
  const [actionType, setActionType] = useState<'register' | 'login'>('login');
  const authCtrl = useAuthCtrl({actionType});
  const {isOnboarding} = useAtomValue(authAtom)


  const contextValues = {
    values: authCtrl.authForm,
    onChange: authCtrl.handleChange,
    onCheck: authCtrl.handleCheck,
  }

  if (isOnboarding) {
    return (
      <div className={s.form}>
        <OnboardingForm/>
      </div>
    )
  }

  return (
    <div className={s.form}>
      <AuthContext value={contextValues}>
        <ValidationForm errors={authCtrl.validationCtrl.errors} onSubmit={authCtrl.validationCtrl.handleSubmit}>
          <AuthForm action={actionType}>
            <div className={s.actions}>
              <Button theme='primary' type="submit">
                {actionType === 'login' ? 'Авторизоваться' : 'Продолжить'}
              </Button>

              <div className={s.switch}>
                <span className='text__regular__s'>
                  {actionType === 'login' ? 'Нет аккаунта?' : 'Есть аккаунт?'}
                </span>

                <span
                  onClick={() => setActionType(actionType === 'login' ? 'register' : 'login')}
                  role="button"
                  className={cn('link text__400 text__blue text__regular__s')}
                >
                    {actionType === 'login' ? 'Регистрация' : 'Авторизация'}
                </span>
              </div>
            </div>
          </AuthForm>
        </ValidationForm>
      </AuthContext>
    </div>
  );
};

export default Auth;