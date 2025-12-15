import React, { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-indigo-100">We'd love to hear from you. Get in touch with us today!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info Cards */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-full">
                  <MapPin className="text-indigo-600 dark:text-indigo-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">Hyderabad, India</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full">
                  <Mail className="text-purple-600 dark:text-purple-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
              <a href="mailto:souvik@dev.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                souvik@dev.com
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-full">
                  <Phone className="text-pink-600 dark:text-pink-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Phone</h3>
              <a href="tel:+918918818386" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                +91 8918818386
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  placeholder="What is this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-700 dark:hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-4 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Find Us Here</h2>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8">
            <div className="aspect-video bg-gray-300 dark:bg-gray-600 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400 text-lg">Map Location: Hyderabad, India</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
