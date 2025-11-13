import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-slate-900 text-white mt-20 rounded-t-lg shadow-inner shadow-black/20'>
      <div className='max-w-xl mx-auto px-4 sm:px-6 lg:px-18 py-3'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-3'>
          {/* Logo */}
          <img 
            width={150} 
            src={assets.logo} 
            alt="Logo" 
            className='brightness-0 invert hover:opacity-80 transition-opacity duration-300'
          />

          {/* Copyright */}
          <p className='text-sm text-gray-300 text-center md:text-left'>
            © {new Date().getFullYear()} Shreyansh_jais
          All rights reserved.
          </p>

          {/* Social Icons */}
          <div className='flex gap-3'>
            {[
              { icon: assets.facebook_icon, label: 'Facebook' },
              { icon: assets.twitter_icon, label: 'Twitter' },
              { icon: assets.instagram_icon, label: 'Instagram' }
            ].map((social, index) => (
              <a
                key={index}
                href="#"
                className='bg-gray-800 p-2.5 rounded-lg hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300'
                aria-label={social.label}
              >
                <img 
                  width={20} 
                  src={social.icon} 
                  alt={social.label}
                  className='brightness-0 invert'
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer