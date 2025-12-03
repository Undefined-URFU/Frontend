import s from './authForm.module.scss'
import ArrowIcon from 'assets/icons/authPage_arrow.svg?react'
import TextInput from "components/ui/Inputs/TextInput";
import Checkbox from "components/ui/Inputs/Checkbox";
import {PropsWithChildren, useContext} from "react";
import authContext from "components/widgets/AuthForm/auth.context.ts";
import {IAuthName} from "components/widgets/AuthForm/auth.types.ts";
import cn from "utils/cn.ts";

interface IAuthFormProps {
  action: 'register' | 'login'
}

const AuthForm = ({ action, children }: PropsWithChildren<IAuthFormProps>) => {
  const authCtrl = useContext(authContext);
  const isLogin = action === 'login';

  return (
    <div className={s.container}>
      <ArrowIcon />

      <span className={cn(s.h2, `text__500 text__h2`)}>
        {isLogin ? 'Авторизация' : 'Регистрация'}
      </span>

      <div className={s.formFields}>


        {!isLogin && (
          <TextInput
            onChange={authCtrl.onChange}
            value={authCtrl.values.name}
            name='name'
            type='text'
            placeholder='Введите имя'
          >
            Имя
          </TextInput>
        )}


        <TextInput<IAuthName>
          value={authCtrl.values.email}
          onChange={authCtrl.onChange}
          name="email"
          placeholder='Введите почту'
        >
          Почта
        </TextInput>

        <TextInput
          value={authCtrl.values.password}
          onChange={authCtrl.onChange}
          name="password"
          type="password"
          placeholder='Введите пароль'
        >
          Пароль
        </TextInput>

        {isLogin && (
          <div className={s.options}>
            <Checkbox
              label='Запомнить меня'
              name='rememberMe'
              checked={authCtrl.values.rememberMe}
              onCheck={authCtrl.onCheck}
            />
            <span className={cn('text__400 text__regular__s text__gray text__underline')}>
              Сбросить пароль
            </span>
          </div>
        )}
      </div>

      {children}
    </div>
  );
};

export default AuthForm;