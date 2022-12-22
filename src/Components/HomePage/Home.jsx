import React from 'react'
import Form from '../Form/Form'
import HeroImg from '../HeroImg/HeroImg'

const Home = () => {
  return (
   <main className='flex max-[500px]:flex-col justify-between items-center w-full h-screen'>
    <Form />
    <HeroImg />
   </main>
  )
}

export default Home