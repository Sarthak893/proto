import { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import FeaturedCategories from './components/sections/FeaturedCatergories'

const Footer = lazy(() => import('./components/layout/Footer'))
const WhyChoose = lazy(() => import('./components/sections/WhyChooseUs'))
const Testimonial = lazy(() => import('./components/sections/Testimonial'))
const Products = lazy(() => import('./components/pages/Products'))
const Wishlist = lazy(() => import('./components/pages/Wishlist'))

const useAfterInitialPaint = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(() => setReady(true), { timeout: 1500 })
      return () => window.cancelIdleCallback(idleId)
    }

    const frameId = requestAnimationFrame(() => setReady(true))
    return () => cancelAnimationFrame(frameId)
  }, [])

  return ready
}

const Home = () => {
  const showBelowFold = useAfterInitialPaint()

  return (
    <>
      <Hero />
      <About />
      <FeaturedCategories />
      {showBelowFold && (
        <Suspense fallback={null}>
          <WhyChoose />
          <Testimonial />
        </Suspense>
      )}
    </>
  )
}

function App() {
  const { hash, pathname } = useLocation()
  const showFooter = useAfterInitialPaint()

  useEffect(() => {
    if (!hash) return

    const frameId = requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    return () => cancelAnimationFrame(frameId)
  }, [hash, pathname, showFooter])

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F3] font-['Poppins']">
      <Navbar />

      <main className="flex-1 pt-[76px] md:pt-[96px]">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Suspense>
      </main>

      {showFooter && (
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      )}
    </div>
  )
}

export default App