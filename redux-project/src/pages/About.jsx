import React from 'react'
import { Users, Target, Heart, Mail, MapPin, Phone } from 'lucide-react'

const About = () => {
  const team = [
    {
      name: 'Souvik',
      role: 'Founder & Lead Developer',
      icon: '👨‍💻'
    },
    {
      name: 'Development Team',
      role: 'Full Stack Developers',
      icon: '👥'
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      icon: '🤝'
    }
  ]

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Header */}
      <section className="bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">About Ekart for Developers</h1>
          <p className="text-indigo-100">Building the best tools for developers, by developers</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                At Ekart for Developers, we believe that every developer deserves access to high-quality tools and resources without breaking the bank.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                We're passionate about empowering developers worldwide with the best practices, modern technologies, and practical solutions to build amazing applications.
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Our platform is built on the principles of transparency, quality, and community support.
              </p>
            </div>

            {/* Right Icon */}
            <div className="flex justify-center">
              <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-20">
                <Target className="text-indigo-600 dark:text-indigo-400" size={120} />
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                  <Heart className="text-blue-600 dark:text-blue-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Quality First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We never compromise on quality. Every product is thoroughly tested and documented.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full">
                  <Users className="text-purple-600 dark:text-purple-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Community Driven</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We listen to our community and continuously improve based on your feedback.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-full">
                  <Target className="text-pink-600 dark:text-pink-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We stay ahead of the curve with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white dark:bg-gray-800 py-16 px-4 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-6xl mb-4">{member.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 px-4 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-indigo-100 dark:bg-indigo-900 p-4 rounded-full">
                  <MapPin className="text-indigo-600 dark:text-indigo-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Address</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Hyderabad, India
              </p>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full">
                  <Mail className="text-purple-600 dark:text-purple-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Email</h3>
              <a href="mailto:souvik@dev.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                souvik@dev.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-pink-100 dark:bg-pink-900 p-4 rounded-full">
                  <Phone className="text-pink-600 dark:text-pink-400" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Phone</h3>
              <a href="tel:+918918818386" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300">
                +91 8918818386
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Our Story</h2>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-lg">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              Ekart for Developers was founded with a simple vision: to make premium developer tools and resources accessible to everyone. What started as a small project has grown into a trusted platform serving thousands of developers worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
              We've continuously evolved our offerings based on community feedback, market demands, and emerging technologies. Today, we're proud to offer a comprehensive suite of tools that help developers build better applications faster.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Looking forward, we're committed to expanding our product line, improving our platform, and remaining the go-to choice for developers seeking quality solutions.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
