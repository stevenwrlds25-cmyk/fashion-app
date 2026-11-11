
import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'
import FeaturedProducts from './components/FeaturedProducts'
import Cart from './pages/Cart'
import Footer from './components/Footer'

// Homepage
function Home({ onAddToCart }) {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={onAddToCart} />
    </>
  )
}

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(previousCart => {
      const existingProduct = previousCart.find(
        item => item.id === product.id
      )

      if (existingProduct) {
        return previousCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...previousCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCart(previousCart =>
      previousCart.filter(item => item.id !== id)
    )
  }

  const updateQuantity = (id, change) => {
    setCart(previousCart =>
      previousCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cartCount} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home onAddToCart={addToCart} />}
          />

          <Route
            path="/products"
            element={<FeaturedProducts onAddToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
