import { useState } from "react";
import {
  ChevronDownIcon,
  CloseIcon,
  HeartIcon,
  MenuIcon,
} from "../ui/Icons";

import woodNavbar from "../../assets/wood-navbar.webp";
import logo from "../../assets/logo.webp";

const navItems = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "Products",
    href: "/products",
    dropdown: true,
  },
  {
    title: "About",
    href: "/#about",
  },
  {
    title: "Reviews",
    href: "/#reviews",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Wooden Strip */}
      <div
        className="
          relative
          h-[76px]
          w-full
          overflow-visible
          bg-cover
          bg-center
          bg-no-repeat
          shadow-[0_12px_30px_rgba(0,0,0,.25)]

          md:h-[96px]

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
          after:content-['']
        "
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
            width="500"
            height="334"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            draggable={false}
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

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}

          <div
            className="
              ml-auto
              hidden
              items-center
              gap-20
              lg:flex
            "
          >
            <nav
              aria-label="Main navigation"
              className="flex items-center gap-12"
            >
              {navItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="
                    group
                    relative
                    flex
                    cursor-pointer
                    items-center

                    text-[17px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]

                    text-[#4B2F1C]

                    transition-all
                    duration-300

                    hover:text-[#5A3922]

                    focus:outline-none
                    focus-visible:rounded-sm
                    focus-visible:ring-2
                    focus-visible:ring-[#D39A31]
                    focus-visible:ring-offset-2
                  "
                >
                  <span className="relative">
                    {item.title}

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        -bottom-[8px]
                        left-0

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
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="ml-1 text-[14px]"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* CTA */}

            <div className="flex items-center gap-3">
              {/* Wishlist */}

              <a
                href="/wishlist"
                aria-label="View wishlist"
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

                  focus:outline-none
                  focus-visible:rounded-md
                  focus-visible:ring-2
                  focus-visible:ring-[#D39A31]
                "
              >
                <HeartIcon
                  aria-hidden="true"
                  className="text-3xl"
                />
              </a>

              {/* WhatsApp */}

              <a
                href="https://wa.me/919468121415?text=How%20can%20I%20get%20more%20info%20about%20this%3F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Place an order on WhatsApp"
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

                  focus:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#3C281B]
                  focus-visible:ring-offset-2
                "
              >
                Place Order
              </a>
            </div>
          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="
              relative
              z-[60]

              ml-auto

              rounded-md
              bg-[#f4e0b8]/70

              p-2

              text-3xl
              text-[#4B2F1C]

              cursor-pointer

              lg:hidden

              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#D39A31]
              focus-visible:ring-offset-2
            "
          >
            {menuOpen ? (
              <CloseIcon aria-hidden="true" />
            ) : (
              <MenuIcon aria-hidden="true" />
            )}
          </button>

          {/* =========================
              MOBILE NAVIGATION
          ========================== */}

          {menuOpen && (
            <div
              id="mobile-navigation"
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
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col pt-2"
              >
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

                      focus:outline-none
                      focus-visible:bg-[#ecd3a1]
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#D39A31]
                    "
                  >
                    <span>{item.title}</span>

                    {item.dropdown && (
                      <ChevronDownIcon
                        aria-hidden="true"
                      />
                    )}
                  </a>
                ))}

                {/* Mobile CTA */}

                <div className="flex gap-3 p-6">
                  {/* Wishlist */}

                  <a
                    href="/wishlist"
                    onClick={() => setMenuOpen(false)}
                    aria-label="View wishlist"
                    className="
                      flex
                      items-center
                      justify-center

                      border-0
                      bg-transparent

                      px-2
                      py-3

                      text-[#3C281B]

                      focus:outline-none
                      focus-visible:rounded-md
                      focus-visible:ring-2
                      focus-visible:ring-[#D39A31]
                    "
                  >
                    <HeartIcon
                      aria-hidden="true"
                      className="text-3xl"
                    />
                  </a>

                  {/* WhatsApp */}

                  <a
                    href="https://wa.me/919468121415?text=How%20can%20I%20get%20more%20info%20about%20this%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Place an order on WhatsApp"
                    className="
                      flex-1

                      rounded-md

                      bg-[#D5A13A]

                      py-3

                      text-center
                      font-semibold
                      text-[#3C281B]

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#3C281B]
                      focus-visible:ring-offset-2
                    "
                  >
                    Place Order
                  </a>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;