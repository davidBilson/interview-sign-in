import React from 'react'
import HeroImg from '../HeroImg/HeroImg'
import MailAnim from '../../assets/Email_Animation.json'
import Lottie from 'lottie-react'

const Checkout = () => {
  return (
    <main className='flex max-[500px]:flex-wrap justify-between items-center w-full h-screen '>
    <section className='w-3/5 max-[500px]:w-full max-[500px]:pt-40 flex justify-center items-center m-auto'>
        <div className='w-2/5 max-[500px]:w-full text-center'>
        <Lottie animationData={MailAnim} loop={true} className="w-3/5 max-[500px]:w-full m-auto" />
        <h2 className=' h-8 not-italic font-semibold text-2xl leading-8 text-gray-900 mb-1' >Check your email</h2>
        <p className='text-gray-400 max-[500px]:mb-8' >We've sent a verification link to <span className='text-gray-700' >user@email.com</span></p>
        </div>
    </section>
     <HeroImg />
   </main>
  )
}
export default Checkout