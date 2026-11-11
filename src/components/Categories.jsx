
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  {
    name: 'Bags',
    subtitle: 'Carry your style',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800',
    slug: 'bags',
  },
  {
    name: 'Clothing',
    subtitle: 'Dress to impress',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800',
    slug: 'clothing',
  },
  {
    name: 'Watches',
    subtitle: 'Time with elegance',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800',
    slug: 'watches',
  },
  {
    name: 'Shoes',
    subtitle: 'Step up your game',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    slug: 'shoes',
  },
]

function Categories() {
  return (
    <section className="py-20 px-5 md:px-10 max-w-7xl mx-auto">

      {/* Section heading */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold mb-3">
            Explore our collection
          </p>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900">
            Shop by Category
          </h2>

          <p className="text-gray-500 mt-3">
            Find everything you need to express your style.
          </p>
        </div>

        <Link
          to="/products"
          className="flex items-center gap-2 font-semibold hover:text-orange-500 transition"
        >
          View all products
          <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* Category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              to={`/products?category=${category.slug}`}
              className="group relative block h-[380px] overflow-hidden rounded-2xl"
            >

              {/* Category image */}
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Category details */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-white">

                <p className="text-sm text-gray-200 mb-2">
                  {category.subtitle}
                </p>

                <div className="flex items-center justify-between gap-5">

                  <h3 className="text-2xl font-bold">
                    {category.name}
                  </h3>

                  <span className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition">
                    <ArrowUpRight size={20} />
                  </span>

                </div>
              </div>

            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default Categories
