import { FaWhatsapp } from 'react-icons/fa'
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5'
import { RiInstagramLine } from 'react-icons/ri'
import pot from '../../assets/pot.png'

const quickLinks = ['Home', 'Products', 'About Us', 'Reviews', 'Contact Us', 'Place Order']

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
    <footer id="contact" className="bg-[#f1dfc4] font-['Poppins'] text-[#2f2118]">
      {/* Main Footer */}
      <div className="relative overflow-hidden border-b border-[#3a2517]/20 bg-[#f1dfc4] px-6 py-8 md:px-10">
        <img
          src={pot}
          alt="Decorative plant pot"
          className="pointer-events-none absolute -right-3 -top-14 hidden w-36 select-none object-contain drop-shadow-[0_8px_14px_rgba(0,0,0,.18)] lg:block"
        />
        <div className="mx-auto grid max-w-[1500px] gap-8 md:grid-cols-[1.3fr_.9fr_.95fr_1.1fr_1.35fr]">
          <div className="md:border-r md:border-[#e1cba8] md:pr-8">
            <h3 className="font-['Cormorant_Garamond'] text-[34px] font-bold leading-none text-[#3a2517]">
              <span className="block text-center text-xl leading-3 md:text-left">❦</span>
              CraftsHabitat
            </h3>
            <p className="mt-5 max-w-[220px] text-[15px] leading-7 text-[#3a2517]">
              Handcrafted with love,
              <br />
              made just for you.
            </p>

            <div className="mt-6 flex gap-7 text-2xl text-black">
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

          <FooterColumn title="Quick Links" items={quickLinks} />
          <FooterColumn title="Categories" items={categories} />
          <FooterColumn title="Customer Support" items={supportLinks} />

          <div className="md:border-l md:border-[#e1cba8] md:pl-10">
            <h4 className="mb-6 text-lg font-bold text-black">Contact Us</h4>
            <ul className="space-y-6 text-[15px]">
              <li className="flex items-center gap-5">
                <IoCallOutline className="text-3xl" />
                <span>+91 9468121415</span>
              </li>
              <li className="flex items-center gap-5">
                <IoMailOutline className="text-3xl" />
                <span>Craftshabitat@gmail.com</span>
              </li>
              <li className="flex items-center gap-5">
                <IoLocationOutline className="text-3xl" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

      </div>

      <div className="bg-[#3a2517] px-6 py-3 text-center text-sm text-[#f8ead5]">
        © {new Date().getFullYear()} CraftsHabitat. All rights reserved.
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, items }) => {
  return (
    <div>
      <h4 className="mb-4 text-lg font-bold text-black">{title}</h4>
      <ul className="space-y-3 text-[14px] text-[#2f2118]">
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
