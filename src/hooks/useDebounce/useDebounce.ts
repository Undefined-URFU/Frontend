import {useState} from 'react'
import useSkipFirstRenderEffect from 'hooks/useSkipFirstRenderEffect/useSkipFirstRenderEffect'

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useSkipFirstRenderEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debouncedValue
}

export default useDebounce
