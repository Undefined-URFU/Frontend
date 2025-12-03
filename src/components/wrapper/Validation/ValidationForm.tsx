import ValidationContext from './ValidationContext'
import {CSSProperties, FormEvent, PropsWithChildren} from 'react'
import { IValidationFunctionResponse } from './validation.types'

interface IProps {
  errors: Record<string, IValidationFunctionResponse>
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  className?: string
  styles?: CSSProperties
}

const ValidationForm = (props: PropsWithChildren<IProps>) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    props.onSubmit(e)
  }

  return (
    <ValidationContext.Provider
      value={{
        errors: props.errors,
      }}
    >
      <form onSubmit={handleSubmit} style={props.styles} className={props.className}>
        {props.children}
      </form>
    </ValidationContext.Provider>
  )
}

export default ValidationForm
