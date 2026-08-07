import { useEffect, useRef, useState } from 'react'

const LazyOnVisible = ({ children, fallback = null, rootMargin = '600px 0px' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (isVisible) return
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsVisible(true)
        observer.disconnect()
      },
      { rootMargin },
    )

    const element = ref.current
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible, rootMargin])

  return <div ref={ref}>{isVisible ? children : fallback}</div>
}

export default LazyOnVisible
