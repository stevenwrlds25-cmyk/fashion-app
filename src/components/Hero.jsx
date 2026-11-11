
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[650px] flex items-center overflow-hidden bg-[#eee9e2]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1800')"
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >

          <span className="uppercase tracking-[5px] text-sm font-medium text-orange-300">
            New Season Collection 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mt-6">
            Discover Your
            <br />
            Own <span className="text-orange-400">Style.</span>
          </h1>

          <p className="text-gray-200 text-lg mt-6 max-w-lg leading-relaxed">
            Explore the latest fashion trends. Discover premium clothing,
            stylish bags and elegant watches designed for your lifestyle.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-9">

            <Link
              to="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full flex items-center gap-3 font-semibold transition"
            >
              Shop Now
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/products"
              className="border border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              Explore Collection
            </Link>

          </div>

          <div className="flex gap-12 mt-14">
            <div>
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-gray-300 text-sm mt-1">Products</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-gray-300 text-sm mt-1">Brands</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">10k+</h3>
              <p className="text-gray-300 text-sm mt-1">Customers</p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default Hero
