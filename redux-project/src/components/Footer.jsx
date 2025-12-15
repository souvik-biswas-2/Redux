import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white mt-12 border-t border-gray-800 dark:border-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ekart for Developers</h3>
            <p className="text-gray-400">
              Your one-stop shop for developer tools and resources. Built with modern technologies and best practices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#product" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={20} />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} />
                <a href="mailto:souvik@dev.com" className="hover:text-white transition-colors">
                  souvik@dev.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} />
                <a href="tel:+918918818386" className="hover:text-white transition-colors">
                  +91 8918818386
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Ekart for Developers. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
