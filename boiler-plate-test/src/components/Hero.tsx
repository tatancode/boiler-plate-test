'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Logo and Navigation */}
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
        <div className="text-2xl font-bold">MARCO LOGO</div>
        <nav className="flex gap-4">
          <a href="#" className="hover:text-gray-700">
            Home
          </a>
          <a href="#" className="hover:text-gray-700">
            Services & Works
          </a>
          <a href="#" className="hover:text-gray-700">
            About Us
          </a>
          <a href="#" className="hover:text-gray-700">
            Contact
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            We craft logos
            <span className="text-[#FF6B6B]">|</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500">
            that make brands stand out
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Empower your brand's narrative: unified logo, branding, and PowerPoint design solutions
          for remarkable recognition
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mt-8"
        >
          <button className="px-8 py-3 bg-[#FF6B6B] text-white rounded-full hover:bg-[#ff5252] transition-colors">
            Logo design
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            Corporate Identity Design
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            PowerPoint Presentation
          </button>
        </motion.div>
      </div>
    </section>
  )
}
