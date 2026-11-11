
import React, { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'

function FeaturedProducts({ onAddToCart }) {
  const [searchParams] = useSearchParams()

  const selectedCategory = searchParams.get('category') || 'all'

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const categoryGroups = {
    all: [
      'womens-bags',
      'mens-shirts',
      'womens-dresses',
      'mens-watches',
      'womens-watches',
      'mens-shoes',
      'womens-shoes',
      'tops'
    ],

    shoes: ['mens-shoes', 'womens-shoes'],
    'mens-shoes': ['mens-shoes', 'womens-shoes'],

    bags: ['womens-bags'],
    'womens-bags': ['womens-bags'],

    clothing: ['mens-shirts', 'womens-dresses', 'tops'],
    clothes: ['mens-shirts', 'womens-dresses', 'tops'],
    tops: ['mens-shirts', 'womens-dresses', 'tops'],

    watches: ['mens-watches', 'womens-watches'],
    'mens-watches': ['mens-watches', 'womens-watches']
  }

  const categoryNames = {
    all: 'All Products',
    shoes: 'Shoes Collection',
    'mens-shoes': 'Shoes Collection',
    bags: 'Bags Collection',
    'womens-bags': 'Bags Collection',
    clothing: 'Clothing Collection',
    clothes: 'Clothing Collection',
    tops: 'Clothing Collection',
    watches: 'Watches Collection',
    'mens-watches': 'Watches Collection'
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        setError('')
        setProducts([])

        const categories =
          categoryGroups[selectedCategory] || categoryGroups.all

        const requests = categories.map((category) =>
          fetch(
            `https://dummyjson.com/products/category/${category}`
          )
        )

        const responses = await Promise.all(requests)

        if (responses.some((response) => !response.ok)) {
          throw new Error('Could not load products. Please try again.')
        }

        const results = await Promise.all(
          responses.map((response) => response.json())
        )

        const allProducts = results.flatMap(
          (result) => result.products
        )

        setProducts(allProducts)
      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [selectedCategory])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-20">

      {/* Heading */}
      <div className="mb-10">
        <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold mb-3">
          Explore our collection
        </p>

        <h2 className="text-3xl md:text-5xl font-black">
          {categoryNames[selectedCategory] || 'All Products'}
        </h2>

        <p className="text-gray-500 mt-3">
          Discover quality fashion products selected for you.
        </p>
      </div>

      {/* Category navigation */}
      <div className="flex flex-wrap gap-3 mb-10">
        <Link
          to="/products"
          className={`px-5 py-2 rounded-full text-sm ${
            selectedCategory === 'all'
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-orange-100'
          }`}
        >
          All
        </Link>

        <Link
          to="/products?category=shoes"
          className={`px-5 py-2 rounded-full text-sm ${
            selectedCategory.includes('shoe')
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-orange-100'
          }`}
        >
          Shoes
        </Link>

        <Link
          to="/products?category=bags"
          className={`px-5 py-2 rounded-full text-sm ${
            selectedCategory.includes('bag')
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-orange-100'
          }`}
        >
          Bags
        </Link>

        <Link
          to="/products?category=clothing"
          className={`px-5 py-2 rounded-full text-sm ${
            ['clothing', 'clothes', 'tops'].includes(selectedCategory)
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-orange-100'
          }`}
        >
          Clothing
        </Link>

        <Link
          to="/products?category=watches"
          className={`px-5 py-2 rounded-full text-sm ${
            selectedCategory.includes('watch')
              ? 'bg-black text-white'
              : 'bg-gray-100 hover:bg-orange-100'
          }`}
        >
          Watches
        </Link>
      </div>

      {/* Loading */}
      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item} className="animate-pulse">
              <div className="h-64 bg-gray-200 rounded-xl" />
              <div className="h-4 bg-gray-200 rounded mt-4 w-3/4" />
              <div className="h-4 bg-gray-200 rounded mt-3 w-1/3" />
            </div>
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="text-center py-10">
          <p className="text-red-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-black text-white px-6 py-2 rounded-full"
          >
            Try Again
          </button>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && products.length === 0 && (
        <p className="text-center text-gray-500 py-16">
          No products found in this category.
        </p>
      )}

      {/* Products */}
      {!loading && !error && products.length > 0 && (
        <>
          <p className="text-sm text-gray-500 mb-5">
            Showing {products.length} products
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">

            {products.map((product) => (
              <div key={product.id} className="group">

                {/* Product image */}
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden h-52 sm:h-64 md:h-72">

                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  <span className="absolute top-3 left-3 bg-white text-black text-xs font-semibold px-3 py-2 rounded-full capitalize">
                    {product.category.replace('-', ' ')}
                  </span>

                  <button
                    onClick={() => onAddToCart(product)}
                    aria-label={`Add ${product.title} to cart`}
                    className="absolute bottom-3 right-3 bg-white p-3 rounded-full hover:bg-orange-500 hover:text-white transition"
                  >
                    <ShoppingBag size={19} />
                  </button>

                </div>

                {/* Product details */}
                <div className="pt-4">

                  <h3 className="font-semibold text-gray-900 truncate">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 mt-2">
                    <Star
                      size={15}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="text-sm text-gray-500">
                      {product.rating}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mt-3">
                    <p className="font-bold text-lg">
                      {formatPrice(product.price)}
                    </p>

                    {product.discountPercentage > 0 && (
                      <span className="text-xs text-green-600 font-semibold">
                        -{Math.round(product.discountPercentage)}%
                      </span>
                    )}
                  </div>

                </div>
              </div>
            ))}

          </div>
        </>
      )}

    </section>
  )
}

export default FeaturedProducts
