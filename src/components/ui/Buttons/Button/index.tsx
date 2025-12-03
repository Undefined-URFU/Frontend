import {ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren} from 'react'
import s from './button.module.scss'
export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme: 'primary' | 'secondary' | 'blue' | 'no-background'
  size?: 'large' | 'default' | 'small' | 'smallest'
  loading?: boolean
}

const Button = ({children, theme, loading, size = 'default', ...props}: PropsWithChildren<IButtonProps>) => {
  return (
    <button
      {...props}
      type={props.type ? props.type : 'button'}
      className={`${s.button} ${props.className ?? ''}`}
      data-theme={theme}
      data-size={size}
      data-loading={loading ? 'true' : 'false'}
    >
      <div>{children}</div>
    </button>
  )
}

export default Button
