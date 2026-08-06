import { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoChevronDown, IoMenu, IoClose } from 'react-icons/io5'

import woodNavbar from '../../assets/wood-navbar.jpg'
import logo from '../../assets/logo.jpg'

const navItems = [
  {
    title: 'Home',
    href: '#home',
  },
  {
    title: 'Products',
    href: '#categories',
    dropdown: true,
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Reviews',
    href: '#reviews',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
]

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      className="
        fixed
        top-0
        left-0
        z-50
        w-full
      "
    >
      {/* Wooden Strip */}

      <div
        className="
        relative
        h-[76px]
        md:h-[96px]
        w-full
        overflow-visible
        bg-cover
        bg-center
        bg-no-repeat
        shadow-[0_12px_30px_rgba(0,0,0,.25)]
        before:absolute
        before:inset-0
        before:bg-black/5
        before:content-['']
        after:absolute
        after:-bottom-2
        after:left-0
        after:h-4
        after:w-full
        after:bg-black/20
        after:blur-lg
        after:content-['']"
    style={{
    backgroundImage: `url(${woodNavbar})`,
    }}
>
        <div
          className="
            relative
            mx-auto
            flex
            h-full
            max-w-[1500px]
            items-center
            justify-end
            px-4
            sm:px-6
            md:px-10
          "
        >
          {/* Hanging Logo */}

          <img
            src={logo}
            alt="CraftsHabitat"
            draggable="false"
            className="
              absolute
              left-2
              -top-5
              z-50
              w-[185px]
              sm:w-[240px]
              md:-top-10
              md:w-[320px]
              lg:w-[365px]
              select-none
              object-contain
              pointer-events-none
              drop-shadow-[0_18px_28px_rgba(0,0,0,.30)]
            "
          />
                    {/* Right Side */}

          <div
            className="
              ml-auto
              hidden
              items-center
              gap-20
              lg:flex
            "
          >
            {/* Navigation */}

            <nav className="flex items-center gap-12">

              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    relative
                    cursor-pointer
                    flex
                    items-center
                    text-[17px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    text-[#4B2F1C]
                    transition-all
                    duration-300
                    hover:text-[#5A3922]
                  "
                >
                  <span className="relative">

                    {item.title}

                    <span
                      className="
                        absolute
                        left-0
                        -bottom-[8px]
                        h-[2px]
                        w-0
                        rounded-full
                        bg-[#5A3922]
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />

                  </span>

                  {item.dropdown && (
                    <IoChevronDown
                      className="
                        ml-1
                        text-[14px]
                      "
                    />
                  )}
                </a>
              ))}

            </nav>

            {/* CTA */}

            <div className="flex items-center gap-3">
              <button
                className="
                  flex
                  items-center
                  justify-center
                  border-0
                  bg-transparent
                  px-2
                  py-[13px]
                  text-[#3C281B]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                "
                aria-label="Wishlist"
              >
                <FaHeart className="text-3xl" />
              </button>

              <button
                className="
                  rounded-md
                  bg-[#E0AE45]
                  px-8
                  py-[13px]
                  text-[16px]
                  font-semibold
                  text-[#3C281B]
                  shadow-[0_5px_12px_rgba(0,0,0,.15)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#D69B2D]
                "
              >
                Place Order
              </button>
            </div>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              ml-auto
              relative
              z-[60]
              rounded-md
              bg-[#f4e0b8]/70
              p-2
              text-3xl
              text-[#4B2F1C]
              lg:hidden
              cursor-pointer
            "
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
                    {/* Mobile Navigation */}

          {menuOpen && (
            <div
              className="
                absolute
                left-0
                top-full
                w-full
                overflow-hidden
                rounded-b-xl
                bg-[#f4e0b8]
                shadow-[0_10px_30px_rgba(0,0,0,.18)]
                lg:hidden
              "
            >
              <nav className="flex flex-col pt-2">

                {navItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      flex
                      items-center
                      justify-between
                      border-b
                      border-[#d4b486]
                      px-6
                      py-4
                      text-[16px]
                      font-semibold
                      text-[#4B2F1C]
                      transition-colors
                      duration-300
                      hover:bg-[#ecd3a1]
                    "
                  >
                    {item.title}

                    {item.dropdown && (
                      <IoChevronDown />
                    )}
                  </a>
                ))}

                <div className="flex gap-3 p-6">
                  <button
                    className="
                      flex
                      items-center
                      justify-center
                      border-0
                      bg-transparent
                      px-2
                      py-3
                      text-[#3C281B]
                    "
                    aria-label="Wishlist"
                  >
                    <FaHeart className="text-3xl" />
                  </button>

                  <button
                    className="
                      flex-1
                      rounded-md
                      bg-[#D5A13A]
                      py-3
                      font-semibold
                      text-[#3C281B]
                    "
                  >
                    Place Order
                  </button>
                </div>

              </nav>
            </div>
          )}

        </div>

      </div>

    </header>

  )
}

export default Navbar