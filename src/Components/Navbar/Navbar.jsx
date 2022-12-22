import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../src/assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='absolute pt-5 pb-5 pl-10 pr-10' >
        <Link to={"/"}>
            <img src={Logo} className="h-12 w-32" alt="" />
        </Link>
    </nav>
  )
}

export default Navbar