import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { FaEye, FaHeart, FaRegHeart, FaWhatsapp } from 'react-icons/fa'
import { IoArrowForward, IoClose, IoSearchOutline } from 'react-icons/io5'
import paperBg from '../../assets/categories/paper-bg.webp'
import pot from '../../assets/pot.webp'
import i1 from '../../assets/categories/i1.webp'
import i2 from '../../assets/categories/i2.webp'
import i3 from '../../assets/categories/i3.webp'
import i4 from '../../assets/categories/i4.webp'
import i5 from '../../assets/categories/i5.webp'
import i6 from '../../assets/categories/i6.webp'
import i7 from '../../assets/categories/i7.webp'
import i8 from '../../assets/categories/i8.webp'
import { getStoredWishlist, saveStoredWishlist } from '../data/wishlistStorage'

const categories = [
  'Nameplates',
  'Wall Decor',
  'Personalized Gifts',
  'Accessories',
  'Festival Collection',
  'Home Decor',
  'Bulk Orders',
  'Customization',
]

const products = [
  { name: 'Custom Resin Nameplate', category: 'Nameplates', price: 1499, image: i1, isNew: true },
  { name: 'Wooden Door Nameplate', category: 'Nameplates', price: 1299, image: i1, isNew: false },
  { name: 'Handmade Wall Hanging', category: 'Wall Decor', price: 1199, image: i2, isNew: true },
  { name: 'Resin Wall Art Frame', category: 'Wall Decor', price: 1799, image: i2, isNew: false },
  { name: 'Personalized Gift Box', category: 'Personalized Gifts', price: 1599, image: i3, isNew: true },
  { name: 'Custom Memory Frame', category: 'Personalized Gifts', price: 1399, image: i3, isNew: false },
  { name: 'Handmade Keychain Set', category: 'Accessories', price: 1099, image: i4, isNew: true },
  { name: 'Resin Bookmark Combo', category: 'Accessories', price: 1199, image: i4, isNew: false },
  { name: 'Festival Decor Hamper', category: 'Festival Collection', price: 1899, image: i5, isNew: true },
  { name: 'Diwali Handmade Set', category: 'Festival Collection', price: 1699, image: i5, isNew: false },
  { name: 'Elegant Home Decor Piece', category: 'Home Decor', price: 1499, image: i6, isNew: true },
  { name: 'Table Decor Accent', category: 'Home Decor', price: 1299, image: i6, isNew: false },
  { name: 'Return Favours Pack', category: 'Bulk Orders', price: 1999, image: i7, isNew: true },
  { name: 'Corporate Gift Combo', category: 'Bulk Orders', price: 1899, image: i7, isNew: false },
  { name: 'Fully Customized Art', category: 'Customization', price: 1799, image: i8, isNew: true },
  { name: 'Made-To-Order Craft', category: 'Customization', price: 1599, image: i8, isNew: false },
]

const getCategoryFromParams = (searchParams) => {
  const category = searchParams.get('category')
  return categories.includes(category) ? category : 'All'
}

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState(() => getCategoryFromParams(searchParams))
  const [sortBy, setSortBy] = useState('newest')
  const [maxPrice, setMaxPrice] = useState(2000)
  const [likedProducts, setLikedProducts] = useState(() => getStoredWishlist())
  const [selectedProduct, setSelectedProduct] = useState(null)

  useEffect(() => {
    setActiveCategory(getCategoryFromParams(searchParams))
  }, [searchParams])

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  const filteredProducts = useMemo(() => {
    const searchedProducts = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesPrice = product.price <= maxPrice

      return matchesSearch && matchesCategory && matchesPrice
    })

    return [...searchedProducts].sort((a, b) => {
      if (sortBy === 'low-high') return a.price - b.price
      if (sortBy === 'high-low') return b.price - a.price
      return Number(b.isNew) - Number(a.isNew)
    })
  }, [activeCategory, maxPrice, search, sortBy])

  const clearFilters = () => {
    setSearch('')
    handleCategoryChange('All')
    setSortBy('newest')
    setMaxPrice(2000)
  }

  const toggleLike = (product) => {
    setLikedProducts((currentProducts) => {
      const isAlreadyLiked = currentProducts.some((currentProduct) => currentProduct.name === product.name)
      const updatedProducts = isAlreadyLiked
        ? currentProducts.filter((currentProduct) => currentProduct.name !== product.name)
        : [...currentProducts, product]

      saveStoredWishlist(updatedProducts)
      return updatedProducts
    })
  }

  const openProductDetails = (product) => {
    setSelectedProduct(product)
  }

  const closeProductDetails = () => {
    setSelectedProduct(null)
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
        <div className="pointer-events-none absolute right-4 top-4 hidden lg:block xl:right-14">
          <div className="relative h-56 w-56">
            <div className="absolute right-8 top-10 h-32 w-32 rounded-full bg-[#7fa35a]/20 blur-2xl" />
            <div className="absolute right-28 top-4 h-16 w-16 rotate-45 rounded-full rounded-br-sm bg-[#6f8f4d]/25" />
            <div className="absolute right-6 top-8 h-20 w-20 -rotate-12 rounded-full rounded-bl-sm bg-[#9bbd6d]/25" />
            <img
              src={pot}
              alt="Decorative nature pot"
              width={500}
              height={750}
              loading="lazy"
              decoding="async"
              className="absolute right-0 top-0 w-52 select-none object-contain drop-shadow-[0_18px_28px_rgba(58,37,23,.22)]"
            />
          </div>
        </div>

        <div className="mb-8 animate-[fadeIn_.6s_ease-out] lg:pr-64">
          <div className="mb-4 text-sm font-semibold text-[#8a541f]">
            <a href="/" className="hover:text-[#5A3922]">Home</a>
            <span className="mx-2">/</span>
            <span className="text-[#3a2517]">Products</span>
          </div>
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a541f]">Handmade Collection</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-bold text-[#3a2517] md:text-7xl">Products</h1>
          <p className="mt-3 whitespace-nowrap text-[15px] leading-7 text-[#5f4633] md:text-base">
            Explore handcrafted pieces made with love — from personalised gifts to elegant home decor.
          </p>
        </div>

        <div className="sticky top-[84px] z-30 mb-8 grid gap-4 rounded-3xl border border-[#e1cba8] bg-[#fffaf0]/95 p-4 shadow-[0_12px_30px_rgba(58,37,23,.12)] backdrop-blur md:top-[104px] md:grid-cols-[0.75fr_1.55fr_0.75fr_0.8fr_auto] md:items-end">
          <label className="flex flex-col gap-2 text-sm font-semibold text-[#3a2517]">
            Category
            <select
              value={activeCategory}
              onChange={(event) => handleCategoryChange(event.target.value)}
              className="w-full rounded-xl border border-[#d9bd91] bg-white/90 px-4 py-3 outline-none transition focus:border-[#D69B2D] focus:ring-2 focus:ring-[#E0AE45]/30"
            >
              <option value="All">All</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[#3a2517]">
            Search
            <span className="relative block">
              <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[#7a5b42]" />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search..."
                className="w-full rounded-xl border border-[#d9bd91] bg-white/90 py-3 pl-12 pr-4 text-[#3a2517] outline-none transition focus:border-[#D69B2D] focus:ring-2 focus:ring-[#E0AE45]/30"
              />
            </span>
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[#3a2517]">
            Sort By
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="w-full rounded-xl border border-[#d9bd91] bg-white/90 px-4 py-3 outline-none transition focus:border-[#D69B2D] focus:ring-2 focus:ring-[#E0AE45]/30"
            >
              <option value="newest">Newest</option>
              <option value="low-high">Price Low→High</option>
              <option value="high-low">Price High→Low</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-[#3a2517]">
            Max Price: ₹{maxPrice}
            <input
              type="range"
              min="1000"
              max="2000"
              step="100"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="h-12 accent-[#D69B2D]"
            />
          </label>

          <button
            type="button"
            onClick={clearFilters}
            className="rounded-xl border border-[#d9bd91] bg-white/90 px-5 py-3 text-sm font-semibold text-[#4B2F1C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff1dd]"
          >
            Clear Filters
          </button>
        </div>

        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-sm font-semibold text-[#5f4633]">Showing {filteredProducts.length} products</p>
          <p className="hidden text-sm text-[#8a541f] sm:block">Prices between ₹1000 - ₹2000</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <article
              key={`${product.category}-${product.name}`}
              className="group animate-[fadeInUp_.55s_ease-out_both] overflow-hidden rounded-3xl border border-[#e1cba8] bg-[#fffaf0]/90 shadow-[0_14px_34px_rgba(58,37,23,.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_42px_rgba(58,37,23,.18)]"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={340}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3a2517]/55 via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#5A3922]">
                  {product.category}
                </span>
                {product.isNew && (
                  <span className="absolute left-4 top-4 rounded-full bg-[#E0AE45] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#3C281B]">
                    New
                  </span>
                )}
                <span className="absolute right-4 top-4 rounded-full bg-[#b83232] px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  10% Off
                </span>
                <div className="absolute right-4 top-16 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <button
                    type="button"
                    onClick={() => toggleLike(product)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#b83232] shadow-md transition hover:-translate-y-1"
                    aria-label="Add to wishlist"
                  >
                    {likedProducts.some((likedProduct) => likedProduct.name === product.name) ? <FaHeart /> : <FaRegHeart />}
                  </button>
                  <button
                    type="button"
                    onClick={() => openProductDetails(product)}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/95 text-[#3a2517] shadow-md transition hover:-translate-y-1"
                    aria-label="Quick view"
                  >
                    <FaEye />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a541f]">{product.category}</p>
                <h3 className="min-h-14 text-xl font-bold text-[#3a2517]">{product.name}</h3>
                <p className="mt-3 text-lg font-bold text-[#3C281B]">₹{product.price.toLocaleString('en-IN')}</p>
                <button
                  type="button"
                  onClick={() => openProductDetails(product)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#E0AE45] px-4 py-3 text-sm font-semibold text-[#3C281B] shadow-[0_5px_12px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D69B2D]"
                >
                  View Details
                  <IoArrowForward />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-3xl border border-[#e1cba8] bg-[#fffaf0]/90 p-10 text-center text-[#5f4633] shadow-[0_14px_34px_rgba(58,37,23,.12)]">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-[#E0AE45]/20 text-3xl text-[#8a541f]">
              <IoSearchOutline />
            </div>
            <h2 className="text-2xl font-bold text-[#3a2517]">No products found</h2>
            <p className="mt-2">Try another search, category or price range.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-md bg-[#E0AE45] px-6 py-3 font-semibold text-[#3C281B] shadow-[0_5px_12px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D69B2D]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/50 px-4 backdrop-blur-sm" onClick={closeProductDetails}>
          <div
            className="relative grid max-w-3xl overflow-hidden rounded-3xl bg-[#fffaf0] shadow-[0_24px_70px_rgba(0,0,0,.35)] md:grid-cols-2"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeProductDetails}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-xl text-[#3a2517] shadow-md"
              aria-label="Close quick view"
            >
              <IoClose />
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              width={800}
              height={680}
              loading="lazy"
              decoding="async"
              className="h-full min-h-80 w-full object-cover"
            />
            <div className="p-7">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#8a541f]">{selectedProduct.category}</p>
              <h2 className="text-3xl font-bold text-[#3a2517]">{selectedProduct.name}</h2>
              <p className="mt-4 text-2xl font-bold text-[#3C281B]">₹{selectedProduct.price.toLocaleString('en-IN')}</p>
              <p className="mt-5 leading-7 text-[#5f4633]">
                Beautiful handcrafted product made with premium materials and personalised finishing.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`https://wa.me/919468121415?text=${encodeURIComponent(`Hi, I want more details about ${selectedProduct.name}.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#E0AE45] px-6 py-3 font-semibold text-[#3C281B] shadow-[0_5px_12px_rgba(0,0,0,.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D69B2D]"
                >
                  <FaWhatsapp />
                  Order on WhatsApp
                </a>
                <a
                  href="/#reviews"
                  className="inline-flex items-center rounded-md border border-[#d9bd91] bg-white/90 px-6 py-3 font-semibold text-[#4B2F1C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#fff1dd]"
                >
                  Reviews
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Products
