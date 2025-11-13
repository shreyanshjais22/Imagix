import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
    return (
        <div className="relative overflow-hidden my-20 sm:my-28">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gray-50 -z-10"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                {/* Top Section - Centered Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4 shadow-lg">
                        ✨ AI-Powered Technology
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-gray-900">
                        Create AI Images
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                        Turn your imagination into visuals with cutting-edge AI technology
                    </p>
                </motion.div>

                {/* Main Content - Diagonal Split Layout */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Left Side - Image Grid */}
                    <motion.div
                        className="relative order-2 md:order-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Main Featured Image */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                            <img 
                                src={assets.sample_img_1} 
                                className="relative rounded-3xl shadow-2xl w-full transform -rotate-3 group-hover:rotate-0 transition-all duration-500 ring-8 ring-white" 
                                alt="AI Generated" 
                            />
                            
                            {/* Floating Badge */}
                            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform group-hover:scale-110 transition-transform duration-300">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm font-bold text-gray-800">Live AI</span>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400 rounded-full blur-2xl opacity-40"></div>
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400 rounded-full blur-2xl opacity-40"></div>
                    </motion.div>

                    {/* Right Side - Content Cards */}
                    <motion.div
                        className="order-1 md:order-2 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        {/* Title Card */}
                        <div className="bg-white backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                                Text to Image Generator
                            </h2>
                            <div className="h-1 w-20 bg-blue-600 rounded-full mb-4"></div>
                            <p className="text-gray-600 leading-relaxed">
                                Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: '⚡', title: 'Instant', desc: 'Generate in seconds', bg: 'bg-yellow-50', border: 'border-yellow-200' },
                                { icon: '🎨', title: 'High Quality', desc: 'Professional results', bg: 'bg-pink-50', border: 'border-pink-200' },
                                { icon: '🚀', title: 'Free to Use', desc: 'No hidden costs', bg: 'bg-blue-50', border: 'border-blue-200' },
                                { icon: '🌟', title: 'Unlimited', desc: 'Create endlessly', bg: 'bg-purple-50', border: 'border-purple-200' }
                            ].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className={`${feature.bg} backdrop-blur-sm rounded-xl p-4 shadow-lg border-2 ${feature.border} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-3xl mb-2">{feature.icon}</div>
                                    <h3 className="font-bold text-gray-800 text-sm mb-1">{feature.title}</h3>
                                    <p className="text-xs text-gray-600">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Info Card */}
                        <div className="bg-blue-600 rounded-2xl p-6 shadow-xl text-white">
                            <p className="leading-relaxed mb-4">
                                Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly.
                            </p>
                            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                                Start Creating Free →
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Stats Bar */}
                <motion.div
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    {[
                        { value: '10M+', label: 'Images Created', color: 'text-purple-600' },
                        { value: '99.9%', label: 'Accuracy Rate', color: 'text-blue-600' },
                        { value: '< 3s', label: 'Generation Time', color: 'text-green-600' },
                        { value: '500K+', label: 'Active Users', color: 'text-orange-600' }
                    ].map((stat, index) => (
                        <div 
                            key={index}
                            className="text-center bg-white backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className={`text-3xl sm:text-4xl font-extrabold ${stat.color} mb-2`}>
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    )
}

export default Description