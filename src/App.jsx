import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import FeaturedCategories from './components/sections/FeaturedCatergories'
import WhyChoose from './components/sections/WhyChooseUs'
import About from './components/sections/About'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFF9F3] font-['Poppins']">
      <Navbar />

      {/* Add all page sections inside main. Footer will stay at bottom when content is short,
          and automatically move down when more sections are added. */}
      <main className="flex-1 pt-[76px] md:pt-[96px]">
        <Hero />
        <About />
        <WhyChoose />
        <FeaturedCategories />
      </main>

      <Footer />
    </div>
  )
}

export default App