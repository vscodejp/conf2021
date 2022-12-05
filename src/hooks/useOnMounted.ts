import { useEffect, useState } from 'react'

export function useOnMounted() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return { mounted }
}
