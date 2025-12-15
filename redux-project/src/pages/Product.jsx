import React from 'react'
import { ShoppingCart, Star } from 'lucide-react'
import { useDispatch } from 'react-redux'
import Cart from './Cart';

const Product = () => {

    const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: 'React Starter Kit',
      price: 29.99,
      rating: 4.8,
      image: 'bg-blue-500',
      description: 'Complete React setup with best practices'
    },
    {
      id: 2,
      name: 'Redux Manager Pro',
      price: 39.99,
      rating: 4.9,
      image: 'bg-purple-500',
      description: 'Advanced state management solution'
    },
    {
      id: 3,
      name: 'Tailwind CSS Theme',
      price: 24.99,
      rating: 4.7,
      image: 'bg-cyan-500',
      description: 'Beautiful pre-built Tailwind themes'
    },
    {
      id: 4,
      name: 'API Integration Pack',
      price: 34.99,
      rating: 4.8,
      image: 'bg-green-500',
      description: 'Seamless API integration tools'
    },
    {
      id: 5,
      name: 'Testing Suite Bundle',
      price: 44.99,
      rating: 4.9,
      image: 'bg-orange-500',
      description: 'Complete testing framework setup'
    },
    {
      id: 6,
      name: 'DevOps Toolkit',
      price: 49.99,
      rating: 4.8,
      image: 'bg-red-500',
      description: 'Docker, CI/CD and deployment tools'
    }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Our Products</h1>
          <p className="text-indigo-100">Discover our amazing collection of developer tools</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                {/* Product Image */}
                <div className={`${product.image} h-48 flex items-center justify-center`}>
                  <span className="text-white text-6xl font-bold opacity-30">{product.id}</span>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">({product.rating})</span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                      ${product.price}
                    </div>
                    <button className="bg-indigo-600 dark:bg-indigo-700 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white p-3 rounded-lg transition-colors">
                      <ShoppingCart onClick={ () => {dispatch(Cart)} } size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 transition-colors">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">6 Premium Products Available</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All products come with comprehensive documentation, support, and regular updates.
          </p>
          <p className="text-sm text-gray-500">
            Use the Redux cart feature (coming soon) to manage your selections!
          </p>
        </div>
      </section>
    </main>
  )
}

export default Product
