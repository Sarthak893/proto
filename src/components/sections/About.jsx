import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoSparklesOutline } from 'react-icons/io5'

import paperBg from '../../assets/why/paper-bg.jpg'

const highlights = [
  'Custom nameplates, magnets & gifts',
  'Resin art, clay decor & festival specials',
  'Personalised handmade pieces made with love',
]

const stats = [
  { value: '2022', label: 'Started our journey' },
  { value: '100%', label: 'Handmade creations' },
  { value: 'Custom', label: 'Designs for every occasion' },
]

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-10"
      style={{
        backgroundImage: `url(${paperBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '650px',
        backgroundColor: '#FFF9F3',
      }}
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[80%] -translate-x-1/2 rounded-full bg-[#D8A23C]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-[#e3c98d]/60 bg-white/35 p-5 shadow-[0_18px_50px_rgba(58,38,24,.08)] backdrop-blur-sm md:p-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_.7fr]">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#F7E8C4] px-5 py-2 text-sm font-semibold text-[#7a4b1f]">
                <IoSparklesOutline /> About
              </span>

              <h2 className="font-['Cormorant_Garamond'] text-3xl font-bold leading-tight text-[#3A2618] md:text-4xl">
                Handcrafted With Love Since 2022
              </h2>

              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-[#4B2F1C]">
                CraftsHabitat has been creating handmade products since 2022. Our work
                is inspired by personalised gifting, home decor and the creative journey
                we share through our Instagram page.
              </p>

              <p className="mt-3 max-w-3xl text-[15px] leading-7 text-[#4B2F1C]">
                From resin art and nameplates to magnets, festival specials and custom
                gifts, every piece is made carefully to turn your ideas into something
                meaningful and memorable.
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <li key={item} className="rounded-xl bg-[#FFF9F3]/80 px-4 py-3 text-sm font-semibold text-[#3A2618] shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="https://www.instagram.com/craftshabitat?igsh=dnIwM3Uyazc5Nzlv"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#D8A23C] px-6 py-3 font-semibold text-[#3C281B] shadow-sm transition-all hover:-translate-y-1 hover:bg-[#c8912f]"
                >
                  <FaInstagram /> Visit Instagram
                </a>
                <a
                  href="https://wa.me/919468121415?text=How%20can%20I%20get%20more%20info%20about%20this%3F"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#D8A23C] bg-white/40 px-6 py-3 font-semibold text-[#3C281B] transition-all hover:-translate-y-1"
                >
                  <FaWhatsapp /> Contact Us
                </a>
              </div>
            </div>

            <div className="grid w-full gap-3 justify-self-center sm:max-w-[280px] lg:justify-self-end">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl border border-[#e3c98d]/70 bg-[#FFF9F3]/80 p-3 shadow-sm">
                  <p className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#D8A23C]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[.18em] text-[#6f4a2c]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About