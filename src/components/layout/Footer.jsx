import { FaWhatsapp } from 'react-icons/fa'
import { IoCallOutline, IoChevronDown, IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { RiInstagramLine } from 'react-icons/ri'
import pot from '../../assets/pot.webp'
import paperBg from '../../assets/why/paper-bg.webp'

const quickLinks = [
  { title: 'Home', href: '/#home' },
  { title: 'Products', href: '/products', dropdown: true },
  { title: 'About Us', href: '/#about' },
  { title: 'Reviews', href: '/#reviews' },
  {
    title: 'Contact Us',
    href: 'https://wa.me/919468121415?text=How%20can%20I%20get%20more%20info%20about%20this%3F',
    external: true,
  },
]

const categories = [
  'Kids',
  'Customisation',
  'Festival & Special',
  'Nameplate & Magnet',
  'Resign & 3D Art',
  'Gifts',
]

const supportLinks = [
  'FAQs',
  'Shipping & Delivery',
  'Returns & Refunds',
  'Privacy Policy',
  'Terms & Conditions',
]

const Footer = () => {
  return (
    <footer id="contact" className="font-['Poppins'] text-[#2f2118]">
      <div className="mx-6 h-[2px] bg-gradient-to-r from-transparent via-[#D8A23C] to-transparent" />

      {/* Main Footer */}
      <div
        className="relative overflow-hidden border-b border-[#3a2517]/20 px-4 py-8 sm:px-6 md:px-10"
        style={{
          backgroundImage: `url(${paperBg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#FFF9F3',
        }}
      >
        <img
          src={pot}
          alt="Decorative plant pot"
          width={500}
          height={750}
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute -right-3 -top-14 hidden w-36 select-none object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,.18)] lg:block"
        />
        <div className="mx-auto grid max-w-[1500px] grid-cols-2 gap-x-5 gap-y-8 sm:gap-8 lg:grid-cols-[1.3fr_.9fr_.95fr_1.1fr_1.35fr]">
          <div className="col-span-2 lg:col-span-1 lg:border-r lg:border-[#e1cba8] lg:pr-8">
            <h3 className="font-['Cormorant_Garamond'] text-[34px] font-bold leading-none text-[#3a2517]">
              <span className="block text-center text-xl leading-3 md:text-left">❦</span>
              CraftsHabitat
            </h3>
            <p className="mt-3 max-w-[220px] text-[15px] leading-6 text-[#3a2517]">
              Handcrafted with love,
              <br />
              made just for you.
            </p>

            <div className="mt-4 flex gap-7 text-2xl text-black">
              <a
                href="https://www.instagram.com/craftshabitat?igsh=dnIwM3Uyazc5Nzlv"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="transition-transform hover:-translate-y-1"
              >
                <RiInstagramLine />
              </a>
              <a
                href="https://wa.me/919468121415?text=How%20can%20I%20get%20more%20info%20about%20this%3F"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="transition-transform hover:-translate-y-1"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <QuickLinksColumn />
          <FooterColumn title="Categories" items={categories} />
          <FooterColumn title="Customer Support" items={supportLinks} />

          <div className="lg:border-l lg:border-[#e1cba8] lg:pl-10">
            <h4 className="mb-4 text-lg font-bold text-black">Contact Us</h4>
            <ul className="space-y-4 text-[13px] sm:text-[15px]">
              <li className="flex items-center gap-3 sm:gap-5">
                <IoCallOutline className="shrink-0 text-2xl sm:text-3xl" />
                <span>+91 9468121415</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-5">
                <IoMailOutline className="shrink-0 text-2xl sm:text-3xl" />
                <span className="break-all">Craftshabitat@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 sm:gap-5">
                <IoLocationOutline className="shrink-0 text-2xl sm:text-3xl" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="bg-[#3a2517] px-6 py-2 text-center text-sm text-[#f8ead5]">
  © {new Date().getFullYear()} CraftsHabitat. All rights reserved by{' '}
  <a
    href="https://webzoid.vercel.app"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-white"
  >
    Webzoid
  </a>
  .
</div>
    </footer>
  )
}

const QuickLinksColumn = () => {
  return (
    <div>
      <h4 className="mb-3 text-base font-bold text-black sm:text-lg">Quick Links</h4>
      <ul className="space-y-3">
        {quickLinks.map((item) => (
          <li key={item.title}>
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className={item.cta
                ? 'inline-flex rounded-md bg-[#E0AE45] px-5 py-2 text-[13px] font-semibold text-[#3C281B] shadow-[0_5px_12px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D69B2D] sm:text-[14px]'
                : 'group relative inline-flex cursor-pointer items-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#4B2F1C] transition-all duration-300 hover:text-[#5A3922] sm:text-[14px]'
              }
            >
              {item.cta ? (
                item.title
              ) : (
                <>
                  <span className="relative">
                    {item.title}
                    <span className="absolute left-0 -bottom-[6px] h-[2px] w-0 rounded-full bg-[#5A3922] transition-all duration-300 group-hover:w-full" />
                  </span>
                  {item.dropdown && <IoChevronDown className="ml-1 text-[14px]" />}
                </>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h4 className="mb-3 text-base font-bold text-black sm:text-lg">{title}</h4>
      <ul className="space-y-2 text-[13px] text-[#2f2118] sm:text-[14px]">
        {items.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} className="transition-colors hover:text-[#8a541f]">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer