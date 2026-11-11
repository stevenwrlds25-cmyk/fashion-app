
import React from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

function Cart({ cart, onRemove, onUpdateQuantity }) {
  const total = cart.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  )

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)

  if (cart.length === 0) {
    return (
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-5 text-center">
        <ShoppingBag size={60} className="text-gray-300 mb-5" />

        <h1 className="text-3xl font-bold mb-3">
          Your cart is empty
        </h1>

        <p className="text-gray-500 mb-7">
          Looks like you haven't added anything to your cart yet.
        </p>

        <Link
          to="/products"
          className="bg-black text-white px-8 py-3 rounded-full hover:bg-orange-500 transition"
        >
          Continue Shopping
        </Link>
      </section>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">

      <p className="text-orange-500 uppercase tracking-[4px] text-xs font-bold mb-3">
        Your selections
      </p>

      <h1 className="text-3xl md:text-5xl font-black mb-10">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* Cart products */}
        <div className="lg:col-span-2 space-y-6">

          {cart.map((product) => (
            <div
              key={product.id}
              className="flex gap-4 sm:gap-6 border-b border-gray-200 pb-6"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-24 h-28 sm:w-32 sm:h-36 object-cover rounded-xl bg-gray-100"
              />

              <div className="flex-1 min-w-0">

                <h2 className="font-bold text-base sm:text-lg">
                  {product.title}
                </h2>

                <p className="text-gray-500 text-sm capitalize mt-1">
                  {product.category?.replace('-', ' ')}
                </p>

                <p className="font-bold mt-3">
                  {formatPrice(product.price)}
                </p>

                <div className="flex items-center justify-between mt-4">

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 border rounded-full px-3 py-2">
                    <button
                      onClick={() =>
                        onUpdateQuantity(product.id, -1)
                      }
                      aria-label="Decrease quantity"
                      className="hover:text-orange-500"
                    >
                      <Minus size={15} />
                    </button>

                    <span className="text-sm font-semibold">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        onUpdateQuantity(product.id, 1)
                      }
                      aria-label="Increase quantity"
                      className="hover:text-orange-500"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  {/* Remove product */}
                  <button
                    onClick={() => onRemove(product.id)}
                    className="text-gray-400 hover:text-red-500 transition"
                    aria-label={`Remove ${product.title}`}
                  >
                    <Trash2 size={19} />
                  </button>

                </div>
              </div>
            </div>
          ))}

        </div>

        {/* Order summary */}
        <div className="bg-gray-50 rounded-2xl p-6 h-fit">

          <h2 className="text-xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="flex justify-between text-sm mb-4">
            <span className="text-gray-500">
              Products ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </span>

            <span>{formatPrice(total)}</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span className="text-gray-500">Shipping</span>
            <span className="text-green-600">Free</span>
          </div>

          <div className="border-t border-gray-200 pt-5 mt-5 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          <button
            type="button"
            onClick={() => alert('Checkout will be connected in the next step!')}
            className="w-full bg-black text-white py-4 rounded-full mt-7 hover:bg-orange-500 transition font-semibold"
          >
            Proceed to Checkout
          </button>

          <Link
            to="/products"
            className="block text-center text-sm text-gray-500 mt-5 hover:text-orange-500"
          >
            Continue Shopping
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Cart
