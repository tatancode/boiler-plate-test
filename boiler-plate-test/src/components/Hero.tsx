'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative w-full flex flex-col items-center pt-16 pb-16 md:pt-[128px] md:pb-[128px]">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-1"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">
            We craft websites
            <span className="text-[#756bff]">|</span>
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-500">
            that get you more customers
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
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
          <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#756bff] text-white rounded-full hover:bg-[#333ca0] transition-colors">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  )
}
