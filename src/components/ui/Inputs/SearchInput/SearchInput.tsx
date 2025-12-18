import SearchIcon from 'assets/icons/SearchIcon.svg?react'
import TextInput, { ITextInputProps } from '../TextInput'
import s from './searchInput.module.scss'

const SearchInput =<T extends string> (props: ITextInputProps<T>) => {
  return (
    <TextInput {...props} className={s.input} autoComplete='off'>
      <SearchIcon className={s.icon} />
    </TextInput>
  )
}

export default SearchInput
