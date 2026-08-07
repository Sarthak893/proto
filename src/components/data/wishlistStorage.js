export const WISHLIST_STORAGE_KEY = 'craftsHabitatWishlist'

export const getStoredWishlist = () => {
  try {
    return JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY)) || []
  } catch {
    return []
  }
}

export const saveStoredWishlist = (products) => {
  localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(products))
}
