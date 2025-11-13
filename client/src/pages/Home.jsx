import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className='relative overflow-hidden bg-white'>
      {/* Hero Section with Background */}
      <section className='relative bg-gradient-to-b from-blue-50 to-white'>
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          {/* Decorative Circles */}
          <div className='absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30'></div>
          <div className='absolute top-40 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20'></div>
        </div>
        <Header />
      </section>

      {/* Divider */}
      <div className='h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent'></div>

      {/* Steps Section */}
      <section className='relative bg-white'>
        <Steps />
      </section>

      {/* Description Section */}
      <section className='relative bg-gray-50'>
        <Description />
      </section>

      {/* Testimonials Section with decorative background */}
      <section className='relative bg-white'>
        <div className='absolute inset-0 overflow-hidden pointer-events-none'>
          <div className='absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40'></div>
        </div>
        <Testimonials />
      </section>

      {/* Final CTA Section */}
      <section className='relative bg-gradient-to-b from-gray-50 to-white'>
        <GenerateBtn />
      </section>
    </div>
  )
}

export default Home