import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import FeaturedCategories from './components/sections/FeaturedCatergories'
import WhyChoose from './components/sections/WhyChooseUs'
import About from './components/sections/About'
import Testimonial from './components/sections/Testimonial'
import Products from './components/pages/Products'
import Wishlist from './components/pages/Wishlist'

const Home = () => (
  <>
    <Hero />
    <About />
    <WhyChoose />
    <FeaturedCategories />
    <Testimonial />
  </>
)

function App() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) return

    const scrollToSection = () => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const timeoutId = setTimeout(scrollToSection, 100)
    return () => clearTimeout(timeoutId)
  }, [hash, pathname])

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F3] font-['Poppins']">
      <Navbar />

      <main className="flex-1 pt-[76px] md:pt-[96px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App