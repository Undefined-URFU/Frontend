import {ChangeEvent, JSX} from 'react'
import s from './checkbox.module.scss'
import cn from 'utils/cn'

interface IProps {
  name: string
  checked?: boolean
  onCheck: (val: boolean, name: string) => void
  label: string | JSX.Element
}

const Checkbox = (props: IProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onCheck(e.target.checked, props.name)
  }

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <label className={s.checkbox}>
        <input type='checkbox' checked={props.checked} name={props.name} onChange={handleChange} />
        <span className={cn('text__regular', 'text__300')}>{props.label}</span>
      </label>
    </div>
  )
}
export default Checkbox
