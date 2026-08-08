import { Suspense, lazy, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import FeaturedCategories from './components/sections/FeaturedCatergories'
import LazyOnVisible from './components/ui/LazyOnVisible'

const Footer = lazy(() => import('./components/layout/Footer'))
const WhyChoose = lazy(() => import('./components/sections/WhyChooseUs'))
const Testimonial = lazy(() => import('./components/sections/Testimonial'))
const Products = lazy(() => import('./components/pages/Products'))
const Wishlist = lazy(() => import('./components/pages/Wishlist'))

const Home = () => (
  <>
    <Hero />
    <About />
    <FeaturedCategories />
    <LazyOnVisible fallback={<div className="min-h-[700px] bg-[#FFF8F1]" aria-hidden="true" />}>
      <Suspense fallback={<div className="min-h-[700px] bg-[#FFF8F1]" aria-hidden="true" />}>
        <WhyChoose />
      </Suspense>
    </LazyOnVisible>
    <LazyOnVisible>
      <Suspense fallback={null}>
        <Testimonial />
      </Suspense>
    </LazyOnVisible>
  </>
)

function App() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    const scrollToSection = () => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const frameId = requestAnimationFrame(scrollToSection)
    return () => cancelAnimationFrame(frameId)
  }, [hash, pathname])

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

      <LazyOnVisible>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </LazyOnVisible>
    </div>
  )
}

export default App
