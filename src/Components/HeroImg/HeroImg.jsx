import React from 'react'
import Imageone from '../../assets/one-way.png'

const HeroImg = () => {
  return (
    <section className='w-2/5 max-[500px]:w-full max-[500px]:h-3/4 h-screen max-[500px]:mt-3'>
        <img src={Imageone} className="w-full h-full object-cover" loading="lazy" alt="one way video interviews made simple" />
    </section>
  )
}

export default HeroImg