
import React, { useState } from 'react'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react'

import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email.trim()) return

    setSubscribed(true)
    setEmail('')
  }

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-black text-white mt-20">

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-14 flex flex-col lg:flex-row justify-between items-center gap-8">

          <div>
            <p className="text-orange-500 text-xs font-bold uppercase tracking-[4px] mb-3">
              Stay in style
            </p>

            <h2 className="text-2xl md:text-3xl font-black">
              Get the latest from LUXE.
            </h2>

            <p className="text-gray-400 text-sm mt-2">
              Discover new arrivals and fashion inspiration.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full lg:w-[450px] flex bg-white/10 rounded-full p-2"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setSubscribed(false)
              }}
              placeholder="Enter your email address"
              className="flex-1 min-w-0 bg-transparent px-4 outline-none text-sm text-white placeholder:text-gray-400"
            />

            <button
              type="submit"
              className="bg-orange-500 px-5 py-3 rounded-full text-sm font-bold hover:bg-orange-600 transition flex items-center gap-2"
            >
              Subscribe
              <ArrowRight size={16} />
            </button>
          </form>

          {subscribed && (
            <p className="text-green-400 text-sm">
              Thanks for subscribing!
            </p>
          )}

        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 pt-16 pb-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <Link to="/" className="text-3xl font-black tracking-tight">
              LUXE<span className="text-orange-500">.</span>
            </Link>

            <p className="text-gray-400 text-sm leading-7 mt-5 max-w-xs">
              Discover your own style with our carefully selected
              collection of fashion, bags, shoes and accessories.
              Quality meets elegance at LUXE.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-7">

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <span className="font-bold text-xl">◎</span>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <span className="font-bold text-lg">f</span>
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition"
              >
                <span className="font-bold text-lg">𝕏</span>
              </a>

            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold text-lg mb-6">Shop</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/products" className="hover:text-orange-500 transition">All Products</Link></li>
              <li><Link to="/products?category=clothing" className="hover:text-orange-500 transition">Clothing</Link></li>
              <li><Link to="/products?category=shoes" className="hover:text-orange-500 transition">Shoes</Link></li>
              <li><Link to="/products?category=bags" className="hover:text-orange-500 transition">Bags</Link></li>
              <li><Link to="/products?category=watches" className="hover:text-orange-500 transition">Watches</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-6">Customer Service</h3>

            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/cart" className="hover:text-orange-500 transition">Shopping Cart</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition">Browse Products</Link></li>
              <li><Link to="/products" className="hover:text-orange-500 transition">New Arrivals</Link></li>
              <li>
                <button onClick={backToTop} className="hover:text-orange-500 transition">
                  Back to Top
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Get In Touch</h3>

            <div className="space-y-5 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={19} className="text-orange-500 shrink-0" />
                <p>Shop your favourite fashion collections online.</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={19} className="text-orange-500 shrink-0" />
                <span>Customer support coming soon</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={19} className="text-orange-500 shrink-0" />
                <span>Contact details coming soon</span>
              </div>
            </div>
          </div>

        </div>

        {/* Promotional section */}
        <div className="border-t border-white/10 mt-16 pt-10 flex flex-col md:flex-row items-center justify-between gap-5">

          <div>
            <h3 className="text-xl md:text-2xl font-bold">
              Style that speaks for you.
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Explore the latest fashion collections at LUXE.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-3 bg-orange-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Explore Collection
            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

      {/* Bottom footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} LUXE. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs">
            Designed with style. Built with passion.
          </p>

          <button
            onClick={backToTop}
            className="text-gray-400 text-xs hover:text-orange-500 transition flex items-center gap-1"
          >
            Back to Top
            <ArrowUpRight size={14} />
          </button>

        </div>
      </div>

    </footer>
  )
}

export default Footer
