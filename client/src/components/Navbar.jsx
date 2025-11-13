import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const { setShowLogin, user, credit, logout } = useContext(AppContext)
    const navigate = useNavigate()

    return (
        // Sticky navbar with backdrop blur
        <nav className='sticky top-0 z-50 bg-transparent backdrop-blur-md '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between py-4 lg:py-5'>
                    
                    {/* Logo with hover effect */}
                    <Link to='/' className='transform hover:scale-105 transition-transform duration-300'>
                        <img className='w-28 sm:w-36 lg:w-44' src={assets.logo} alt="Logo" />
                    </Link>

                    <div>
                        {user ? (
                            <div className='flex items-center gap-3 sm:gap-4'>
                                
                                {/* Enhanced Credits Button */}
                                <button 
                                    onClick={() => navigate('/buy')} 
                                    className='flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-blue-200 hover:border-blue-300 hover:shadow-md hover:scale-105 transition-all duration-300'
                                >
                                    <img className='w-5 h-5' src={assets.credit_star} alt="Credits" />
                                    <p className='text-xs sm:text-sm font-semibold text-gray-700'>
                                        <span className='hidden sm:inline'>Credits: </span>
                                        <span className='text-blue-600'>{credit}</span>
                                    </p>
                                </button>

                                {/* Welcome Text - improved */}
                                <p className='hidden md:block text-gray-700 font-medium pl-2'>
                                    Hi, <span className='text-blue-600'>{user.name}</span>
                                </p>

                                {/* Profile Dropdown with better styling */}
                                <div className='relative group'>
                                    <div className='cursor-pointer'>
                                        <img 
                                            className='w-10 h-10 rounded-full border-2 border-gray-200 group-hover:border-blue-400 transition-all duration-300 shadow-sm' 
                                            src={assets.profile_icon} 
                                            alt="Profile" 
                                        />
                                    </div>
                                    
                                    <div className='absolute hidden group-hover:block top-0 right-0 z-20 pt-14'>
                                        <ul className='list-none m-0 p-0 bg-white rounded-lg border border-gray-200 shadow-xl min-w-[160px] overflow-hidden'>
                                            <li 
                                                onClick={logout} 
                                                className='py-3 px-4 cursor-pointer hover:bg-red-50 hover:text-red-600 text-sm font-medium transition-colors duration-200'
                                            >
                                                Logout
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center gap-3 sm:gap-5'>
                                
                                {/* Pricing Link with hover effect */}
                                <p 
                                    onClick={() => navigate('/buy')} 
                                    className='cursor-pointer text-gray-700 hover:text-blue-600 font-medium text-sm sm:text-base transition-colors duration-200'
                                >
                                    Pricing
                                </p>

                                {/* Enhanced Login Button */}
                                <button 
                                    onClick={() => setShowLogin(true)} 
                                    className='bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-2 sm:px-10 sm:py-2.5 text-sm font-semibold rounded-full hover:from-gray-900 hover:to-black hover:shadow-lg transform hover:scale-105 transition-all duration-300'
                                >
                                    Login
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar