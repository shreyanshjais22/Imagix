import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Login = () => {

    const [state, setState] = useState('Login')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { backendUrl, setShowLogin, setToken, setUser } = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        try {
            if (state === 'Login') {
                const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })

                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }
            } else {
                const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })

                if (data.success) {
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                } else {
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className='fixed inset-0 z-50 backdrop-blur-md bg-black/40 flex justify-center items-center p-4'>
            <motion.form 
                onSubmit={onSubmitHandler} 
                className='relative bg-white p-8 sm:p-10 lg:p-12 rounded-2xl shadow-2xl w-full max-w-md'
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={() => setShowLogin(false)}
                    className='absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 group'
                >
                    <img 
                        className='w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity' 
                        src={assets.cross_icon} 
                        alt="Close" 
                    />
                </button>

                {/* Header */}
                <div className='text-center mb-6'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-2'>
                        {state === 'Login' ? 'Welcome Back' : 'Create Account'}
                    </h1>
                    <p className='text-sm text-gray-500'>
                        {state === 'Login' 
                            ? 'Please sign in to continue' 
                            : 'Sign up to get started'}
                    </p>
                </div>

                {/* Name Input - Only for Sign Up */}
                {state !== 'Login' && (
                    <div className='mb-4'>
                        <div className='border-2 border-gray-200 px-5 py-3 flex items-center gap-3 rounded-xl hover:border-blue-300 focus-within:border-blue-500 transition-colors duration-200'>
                            <img className='w-5 h-5 opacity-60' src={assets.email_icon} alt="" />
                            <input 
                                onChange={e => setName(e.target.value)} 
                                value={name} 
                                className='outline-none text-sm flex-1 text-gray-700' 
                                type="text" 
                                placeholder='Full Name' 
                                required 
                            />
                        </div>
                    </div>
                )}

                {/* Email Input */}
                <div className='mb-4'>
                    <div className='border-2 border-gray-200 px-5 py-3 flex items-center gap-3 rounded-xl hover:border-blue-300 focus-within:border-blue-500 transition-colors duration-200'>
                        <img className='w-5 h-5 opacity-60' src={assets.email_icon} alt="" />
                        <input 
                            onChange={e => setEmail(e.target.value)} 
                            value={email} 
                            className='outline-none text-sm flex-1 text-gray-700' 
                            type="email" 
                            placeholder='Email address' 
                            required 
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className='mb-3'>
                    <div className='border-2 border-gray-200 px-5 py-3 flex items-center gap-3 rounded-xl hover:border-blue-300 focus-within:border-blue-500 transition-colors duration-200'>
                        <img className='w-5 h-5 opacity-60' src={assets.lock_icon} alt="" />
                        <input 
                            onChange={e => setPassword(e.target.value)} 
                            value={password} 
                            className='outline-none text-sm flex-1 text-gray-700' 
                            type="password" 
                            placeholder='Password' 
                            required
                        />
                    </div>
                </div>

                {/* Forgot Password - Only for Login */}
                {state === 'Login' && (
                    <div className='text-right mb-6'>
                        <p className='text-sm text-blue-600 hover:text-blue-700 cursor-pointer font-medium'>
                            Forgot password?
                        </p>
                    </div>
                )}

                {/* Submit Button */}
                <button 
                    type="submit"
                    className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-6'
                >
                    {state === 'Login' ? 'Sign In' : 'Create Account'}
                </button>

                {/* Toggle State */}
                <div className='mt-6 text-center'>
                    {state === "Login" ? (
                        <p className='text-sm text-gray-600'>
                            Don't have an account?{' '}
                            <span 
                                onClick={() => setState('Sign Up')} 
                                className='text-blue-600 hover:text-blue-700 cursor-pointer font-semibold hover:underline'
                            >
                                Sign up
                            </span>
                        </p>
                    ) : (
                        <p className='text-sm text-gray-600'>
                            Already have an account?{' '}
                            <span 
                                onClick={() => setState('Login')} 
                                className='text-blue-600 hover:text-blue-700 cursor-pointer font-semibold hover:underline'
                            >
                                Sign in
                            </span>
                        </p>
                    )}
                </div>
            </motion.form>
        </div>
    )
}

export default Login