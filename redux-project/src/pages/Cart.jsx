import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'

const Cart = () => {
    const selector = (state) => state.cart;
    console.log(selector);
    
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'React Starter Kit',
      price: 29.99,
      quantity: 1,
      image: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Redux Manager Pro',
      price: 39.99,
      quantity: 2,
      image: 'bg-purple-500'
    }
  ])

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity <= 0) return
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ))
  }

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Shopping Cart</h1>
          <p className="text-indigo-100">Review and manage your items</p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Cart Items ({cartItems.length})
                </h2>
                <div className="space-y-4">
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg"
                    >
                      <div className="flex gap-6 items-start">
                        {/* Product Image */}
                        <div className={`${item.image} w-24 h-24 rounded-lg flex items-center justify-center shrink-0`}>
                          <ShoppingBag className="text-white text-2xl opacity-50" />
                        </div>

                        {/* Product Info */}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                            {item.name}
                          </h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-bold text-lg mb-4">
                            ${item.price}
                          </p>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <Minus size={18} />
                              </button>
                              <span className="px-4 py-2 text-gray-900 dark:text-white font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                              >
                                <Plus size={18} />
                              </button>
                            </div>
                            <span className="text-gray-600 dark:text-gray-400">
                              Subtotal: ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors shrink-0"
                          title="Remove item"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8">
                  <Link
                    to="/product"
                    className="inline-block text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-20">
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">
                    Order Summary
                  </h3>

                  <div className="space-y-4 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Tax (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-700 dark:text-gray-300">
                      <span>Shipping</span>
                      <span className="text-green-600 dark:text-green-400">Free</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-6">
                    <span className="text-lg font-bold text-gray-900 dark:text-white">Total</span>
                    <span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  <button className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition-colors mb-3">
                    Proceed to Checkout
                  </button>

                  <button className="w-full border border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 py-3 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Empty Cart */
            <div className="text-center py-16">
              <div className="mb-6 flex justify-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-full">
                  <ShoppingBag size={64} className="text-gray-400 dark:text-gray-600" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Your cart is empty
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Looks like you haven't added any items yet. Start shopping!
              </p>
              <Link
                to="/product"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Secure Checkout
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Safe and secure payment processing
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Free Shipping
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                Free shipping on all orders
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                ✓
              </div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Money Back Guarantee
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                30-day money back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart
