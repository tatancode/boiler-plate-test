'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative">
      {/* w-full min-h-[80vh] flex flex-col flex-1 items-center justify-center overflow-hidden */}

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold">
            We craft websites
            <span className="text-[#756bff]">|</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-500">
            that get you more customers
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
        >
          Take control of your customer acquisition costs with high-converting websites and SEO
          optimization
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center mt-8"
        >
          <button className="px-8 py-3 bg-[#756bff] text-white rounded-full hover:bg-[#333ca0] transition-colors">
            Get Started
          </button>
          {/* <button className="px-8 py-3 bg-white text-gray-800 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            SEO Optimization
          </button>
          <button className="px-8 py-3 bg-white text-gray-800 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            Strategy Session
          </button> */}
        </motion.div>
      </div>
    </section>
  )
}
