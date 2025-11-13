import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            className='flex flex-col justify-center items-center text-center px-4 py-20 sm:py-28'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {/* Badge */}
            <motion.div
                className='inline-flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-full border-2 border-amber-200 shadow-sm'
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                <span className='animate-pulse'>
                    <img src={assets.star_icon} alt="" className='w-4 h-4' />
                </span>
                <p className='text-sm font-semibold text-amber-900 tracking-wide uppercase'>
                    #1 AI Image Generator
                </p>
                <span className='animate-pulse'>
                    <img src={assets.star_icon} alt="" className='w-4 h-4' />
                </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
                className='mt-12 text-5xl font-bold leading-tight max-w-[350px] sm:text-7xl sm:max-w-[700px] md:text-8xl md:max-w-[900px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 2 }}
            >
                <span className='text-gray-900'>Turn text to</span>
                <span className='block sm:inline'> </span>
                <span className='text-blue-600 relative'>
                    image
                    <svg className='absolute -bottom-2 left-0 w-full' height='8' viewBox='0 0 200 8'>
                        <path d='M 0 6 Q 100 2 200 6' stroke='#3B82F6' strokeWidth='3' fill='none'/>
                    </svg>
                </span>
                <span className='text-gray-900'>,</span>
                <span className='block text-gray-900'>in seconds.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                className='text-lg text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed font-medium'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                Unleash your creativity with AI. Turn your imagination into stunning visual art 
                in seconds — just type, and watch the magic happen.
            </motion.p>

            {/* CTA Button */}
            <motion.button
                className='group relative mt-10 bg-slate-900 text-white font-semibold text-lg px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.5 }, opacity: { delay: 0.8, duration: 1 } }}
                onClick={onClickHandler}
            >
                <span className='relative z-10 flex items-center gap-3'>
                    <span>Generate Images</span>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <img className='h-5 w-5' src={assets.star_group} alt="" />
                    </motion.span>
                </span>
                <div className='absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
            </motion.button>

            {/* Image Gallery */}
            <motion.div
                className='mt-20'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <div className='flex flex-wrap justify-center gap-4'>
                    {Array(6).fill('').map((item, index) => (
                        <motion.div
                            key={index}
                            className='relative group'
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className='absolute inset-0 bg-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300'></div>
                            <img
                                className='relative rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer w-20 h-20 sm:w-24 sm:h-24 object-cover border-2 border-gray-100'
                                src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
                                alt={`Sample ${index + 1}`}
                            />
                        </motion.div>
                    ))}
                </div>
                
                <motion.p
                    className='mt-6 text-sm font-medium text-gray-500 tracking-wide'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    ✨ AI-Generated masterpieces from Imagify
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default Header