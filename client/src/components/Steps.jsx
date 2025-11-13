import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <section className="bg-gray-50 py-15 sm:py-10">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
            SIMPLE PROCESS
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Create Images in 3 Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI-powered platform makes it incredibly easy to bring your ideas to life
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
          {stepsData.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg z-10">
                {index + 1}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200 hover:-translate-y-2">
                {/* Icon */}
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
                  <img 
                    src={item.icon} 
                    alt={item.title}
                    className="w-10 h-10"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <span className="text-sm text-gray-500 font-medium">
                    Step {index + 1} of {stepsData.length}
                  </span>
                </div>
              </div>

              {/* Connection Line (for desktop) */}
              {index < stepsData.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
  
          <p className="mt-4 text-gray-600">
            No credit card required • Free trial available
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Steps