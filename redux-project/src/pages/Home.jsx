import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Code, Rocket } from 'lucide-react'

const Home = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Ekart for Developers
          </h1>
          <p className="text-xl md:text-2xl text-indigo-100 mb-8">
            Your ultimate destination for premium developer tools and resources
          </p>
          <Link 
            to="/product" 
            className="inline-flex items-center space-x-2 bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            <span>Explore Products</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full mb-4">
                <Code className="text-indigo-600 dark:text-indigo-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Quality Code</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All our products are built with best practices and modern development standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4">
                <Zap className="text-purple-600 dark:text-purple-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Lightning Fast</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Optimized for performance with minimal overhead and maximum efficiency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-16 h-16 bg-pink-100 dark:bg-pink-900 rounded-full mb-4">
                <Rocket className="text-pink-600 dark:text-pink-400" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Easy to Deploy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Simple setup process that gets you up and running in minutes, not hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 px-4 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Browse our collection of premium developer tools and resources today.
          </p>
          <Link 
            to="/product" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Home
