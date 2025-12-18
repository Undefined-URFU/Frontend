import {DependencyList, EffectCallback, useEffect, useRef} from 'react'

const useSkipFirstRenderEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const renderCount = useRef(0)

  useEffect(() => {
    if (renderCount.current === 0) {
      renderCount.current++
      return
    }

    const effectRes = effect()
    if (effectRes) return effectRes
  }, deps)
}

export default useSkipFirstRenderEffect
