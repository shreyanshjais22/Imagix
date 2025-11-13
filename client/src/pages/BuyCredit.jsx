import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { motion } from 'framer-motion'

const BuyCredit = () => {
  const { backendUrl, loadCreditsData, user, token, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()

  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Credits Payment',
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(backendUrl + '/api/user/verify-razor', response, { headers: { token } })
          if (data.success) {
            loadCreditsData()
            navigate('/')
            toast.success('Credit Added')
          }
        } catch (error) {
          toast.error(error.message)
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true)
        return
      }
      const { data } = await axios.post(backendUrl + '/api/user/pay-razor', { planId }, { headers: { token } })
      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <motion.div 
      className='min-h-[80vh] py-20 bg-gray-50'
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header Section */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className='inline-block bg-blue-100 text-blue-800 px-6 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wider'>
            Pricing Plans
          </span>
          <h1 className='text-4xl sm:text-5xl font-bold text-gray-900 mb-4'>
            Choose Your Plan
          </h1>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Select the perfect plan for your creative needs. All plans include instant access.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
          {plans.map((item, index) => (
            <motion.div 
              key={index}
              className='relative group'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold z-10'>
                  MOST POPULAR
                </div>
              )}

              <div className={`h-full bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${index === 1 ? 'border-2 border-blue-600 transform scale-105' : 'border border-gray-200'}`}>
                {/* Card Header */}
                <div className='p-8 pb-6'>
                  <div className='w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
                    <img src={assets.logo_icon} alt="" className='w-8 h-8' />
                  </div>
                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>
                    {item.id}
                  </h3>
                  <p className='text-gray-600'>
                    {item.desc}
                  </p>
                </div>

                {/* Pricing */}
                <div className='px-8 pb-8'>
                  <div className='flex items-baseline mb-6'>
                    <span className='text-4xl font-bold text-gray-900'>₹{item.price}</span>
                    <span className='text-gray-500 ml-2'>/ {item.credits} credits</span>
                  </div>

                  {/* Features List */}
                  <ul className='space-y-3 mb-8'>
                    <li className='flex items-center text-gray-600'>
                      <svg className='w-5 h-5 text-green-500 mr-3' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                      <span>{item.credits} Image Credits</span>
                    </li>
                    <li className='flex items-center text-gray-600'>
                      <svg className='w-5 h-5 text-green-500 mr-3' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                      <span>High Quality Images</span>
                    </li>
                    <li className='flex items-center text-gray-600'>
                      <svg className='w-5 h-5 text-green-500 mr-3' fill='currentColor' viewBox='0 0 20 20'>
                        <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                      </svg>
                      <span>Priority Support</span>
                    </li>
                  </ul>

                  {/* Payment Button */}
                  <button 
                    onClick={() => paymentRazorpay(item.id)} 
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                      index === 1 
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    <div className='flex items-center justify-center gap-2'>
                      <span>Pay with</span>
                      <img className='h-5' src={assets.razorpay_logo} alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div 
          className='mt-16 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className='flex flex-wrap justify-center items-center gap-8 text-gray-500'>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z' clipRule='evenodd' />
              </svg>
              <span>Secure Payment</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
              </svg>
              <span>Money Back Guarantee</span>
            </div>
            <div className='flex items-center gap-2'>
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
                <path d='M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z' />
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default BuyCredit