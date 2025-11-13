import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center my-20 py-16 px-4"
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Header Section */}
            <div className="text-center mb-16">
                <motion.span 
                    className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    viewport={{ once: true }}
                >
                    TESTIMONIALS
                </motion.span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
                    Loved by thousands
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    See what our community is saying about their experience with our AI image generator
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {testimonialsData.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="group relative"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {/* Quote Icon */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                            </svg>
                        </div>

                        {/* Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 h-full flex flex-col">
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {Array(5).fill('').map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonial.stars ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`}
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 mb-6 flex-grow leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100"
                                />
                                <div>
                                    <h3 className="font-semibold text-gray-900">
                                        {testimonial.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Trust Indicators */}
            <motion.div 
                className="mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">4.9/5</p>
                    <p className="text-sm text-gray-600 mt-1">Average Rating</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">10K+</p>
                    <p className="text-sm text-gray-600 mt-1">Happy Users</p>
                </div>
                <div className="text-center">
                    <p className="text-3xl font-bold text-gray-900">99%</p>
                    <p className="text-sm text-gray-600 mt-1">Satisfaction Rate</p>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default Testimonials