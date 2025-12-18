import {useState} from 'react'
import useDebounce from 'hooks/useDebounce/useDebounce'

const useSearchInput = () => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedSearch = useDebounce(searchValue, 300)

  return {searchValue, debouncedSearch, setSearchValue}
}

export default useSearchInput
