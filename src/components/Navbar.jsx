
import React, { useState } from 'react'
import {
  ShoppingBag,
  Search,
  Heart,
  Menu,
  X,
  UserRound
} from 'lucide-react'

import { Link } from 'react-router-dom'

function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()

    if (search.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(search.trim())}`
      setSearch('')
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">

      {/* Announcement bar */}
      <div className="bg-black text-white text-center py-2 text-xs tracking-wide">
        Free shipping on orders over $100
      </div>

      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-tight"
        >
          LUXE<span className="text-orange-500">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          <Link to="/" className="hover:text-orange-500 transition">
            Home
          </Link>

          <Link to="/products" className="hover:text-orange-500 transition">
            Shop
          </Link>

          <Link to="/products?category=tops" className="hover:text-orange-500 transition">
            Clothing
          </Link>

          <Link to="/products?category=womens-bags" className="hover:text-orange-500 transition">
            Bags
          </Link>

          <Link to="/products?category=mens-watches" className="hover:text-orange-500 transition">
            Watches
          </Link>
        </div>

        {/* Desktop search and icons */}
        <div className="hidden md:flex items-center gap-5">

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-full px-4 py-2"
          >
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm pl-2 w-36"
            />
          </form>

          {/* Account */}
          <button
            type="button"
            aria-label="Account"
            className="hover:text-orange-500 transition"
          >
            <UserRound size={21} />
          </button>

          {/* Wishlist */}
          <button
            type="button"
            aria-label="Wishlist"
            className="hover:text-orange-500 transition"
          >
            <Heart size={21} />
          </button>

          {/* Shopping cart */}
          <Link
            to="/cart"
            aria-label={`Shopping cart with ${cartCount} items`}
            className="relative hover:text-orange-500 transition"
          >
            <ShoppingBag size={22} />

            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          </Link>

        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="md:hidden hover:text-orange-500 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </nav>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg px-5 py-6 flex flex-col gap-5">

          <Link onClick={closeMenu} to="/" className="hover:text-orange-500">
            Home
          </Link>

          <Link onClick={closeMenu} to="/products" className="hover:text-orange-500">
            Shop
          </Link>

          <Link onClick={closeMenu} to="/products?category=tops" className="hover:text-orange-500">
            Clothing
          </Link>

          <Link onClick={closeMenu} to="/products?category=womens-bags" className="hover:text-orange-500">
            Bags
          </Link>

          <Link onClick={closeMenu} to="/products?category=mens-watches" className="hover:text-orange-500">
            Watches
          </Link>

          {/* Mobile search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center bg-gray-100 rounded-full px-4 py-3"
          >
            <Search size={18} className="text-gray-500" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="bg-transparent outline-none text-sm pl-2 w-full"
            />
          </form>

          <Link
            onClick={closeMenu}
            to="/cart"
            className="flex items-center justify-between hover:text-orange-500"
          >
            <span className="flex items-center gap-3">
              <ShoppingBag size={20} />
              Shopping Cart
            </span>

            <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-1">
              {cartCount}
            </span>
          </Link>

        </div>
      )}

    </header>
  )
}

export default Navbar
