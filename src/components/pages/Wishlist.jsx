import { useState } from 'react'
import { FaHeart, FaTrash, FaWhatsapp } from 'react-icons/fa'
import paperBg from '../../assets/categories/paper-bg.jpg'
import { getStoredWishlist, saveStoredWishlist } from '../data/wishlistStorage'
const whatsappText = encodeURIComponent('Hi, I want to order items from my wishlist.')

const Wishlist = () => {
  const [products, setProducts] = useState(() => getStoredWishlist())

  const removeProduct = (productName) => {
    setProducts((currentProducts) => {
      const updatedProducts = currentProducts.filter((product) => product.name !== productName)
      saveStoredWishlist(updatedProducts)
      return updatedProducts
    })
  }

  return (
    <section
      className="relative min-h-[calc(100vh-96px)] overflow-hidden px-4 py-12 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url(${paperBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '650px',
        backgroundColor: '#FFF9F3',
      }}
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E0AE45]/25 px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#5A3922]">
            <FaHeart className="text-[#b83232]" />
            Your Wishlist
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-bold leading-tight text-[#3a2517] md:text-7xl">
            Products You Liked
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[#5f4633] md:text-base">
            Here are some handcrafted products saved in your wishlist. Pick your favourites and place your order on WhatsApp.
          </p>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-3xl border border-[#e1cba8] bg-[#fffaf0]/90 shadow-[0_14px_34px_rgba(58,37,23,.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(58,37,23,.18)]"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/90 text-xl text-[#b83232] shadow-md">
                  <FaHeart />
                </span>
              </div>

              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a541f]">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-[#3a2517]">{product.name}</h3>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <span className="text-lg font-bold text-[#3C281B]">₹{product.price.toLocaleString('en-IN')}</span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => removeProduct(product.name)}
                      className="inline-flex items-center gap-2 rounded-md border border-[#c9a57a] bg-white/70 px-3 py-2 text-sm font-semibold text-[#7b2b22] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff1e1]"
                    >
                      <FaTrash />
                      Remove
                    </button>
                    <a
                      href={`https://wa.me/919468121415?text=${whatsappText}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-[#E0AE45] px-4 py-2 text-sm font-semibold text-[#3C281B] shadow-[0_5px_12px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D69B2D]"
                    >
                      <FaWhatsapp />
                      Order
                    </a>
                  </div>
                </div>
              </div>
            </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-xl rounded-3xl border border-[#e1cba8] bg-[#fffaf0]/90 p-10 text-center shadow-[0_14px_34px_rgba(58,37,23,.12)]">
            <FaHeart className="mx-auto mb-4 text-4xl text-[#b83232]/40" />
            <h2 className="text-2xl font-bold text-[#3a2517]">Your wishlist is empty</h2>
            <p className="mt-2 text-[#5f4633]">Products you like will appear here.</p>
            <a
              href="/products"
              className="mt-6 inline-flex rounded-md bg-[#E0AE45] px-6 py-3 font-semibold text-[#3C281B] shadow-[0_5px_12px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D69B2D]"
            >
              Explore Products
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Wishlist
