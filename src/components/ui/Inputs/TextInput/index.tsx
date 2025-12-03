import {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  PropsWithChildren, useContext,
  useEffect,
  useRef,
} from 'react'
import cn from 'utils/cn'
import ValidationContext from 'components/wrapper/Validation/ValidationContext'
import s from './TextInput.module.scss'

export type OmittedInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>

export interface ITextInputProps<T extends string> extends OmittedInputProps{
  style?: CSSProperties
  onChange: (value: string, name: T) => void
  label?: string
  size?: number
  autoFocus?: boolean
  name: T
  serverError?: string
  errorText?: string
  error?: boolean
}


const TextInput = <T extends string> ({
  onChange,
  children,
  className,
  style,
  size,
  autoFocus,
  value,
  serverError,
  ...props
}: PropsWithChildren<ITextInputProps<T>>) => {

  const { type = 'text', name } = props
  const inputRef = useRef<HTMLInputElement>(null)
  const context = useContext(ValidationContext)
  const error = context.errors[props.name]?.message || props.error
  const isError = Boolean(error || serverError)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, name)
  }

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus({ preventScroll: true })
    }
  }, [autoFocus])


  return (
    <div
      className={s.inputWrapper}
      style={style}
    >
      {children}
      <input
        ref={inputRef}
        data-error={isError}
        type={type}
        className={cn(s.textInput, className)}
        value={value}
        onChange={handleChange}
        data-size={size}
        autoComplete="off"
        {...props}
      />
      {isError && (
        <span
          className={cn('text__red', 'text__regular__s', 'text__400')}
        >{error}</span>
      )}
    </div>
  )
}

export default TextInput