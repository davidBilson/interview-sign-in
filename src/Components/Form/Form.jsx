import React from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Form = () => {

  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    navigate('/checkout')
  }

  const [value, setValue] = useState();

  return (
    <section className='w-3/5 max-[500px]:w-full flex justify-center items-center max-[500px]:pt-40'>
      <form className='w-6/12 max-[500px]:w-full p-4 m-auto' onSubmit={handleSubmit} autoComplete="off" >
                <h2 className=' h-8 not-italic font-semibold text-2xl leading-8 text-gray-900 mb-1'>Business Sign Up</h2>
                <p className='w-64 h-5 not-italic font-normal text-sm leading-5 text-gray-600 mb-8'>Fill in the fields below to get started</p>  
                <section className='flex max-[500px]:flex-wrap justify-between mb-3 gap-6'>
                <div className="w-6/12 max-[500px]:w-full  h-18">
                      <label htmlFor="first_name">First Name</label><br />
                      <input type="text" id='first_name' name="first_name" title='Include your first name here' placeholder='Enter Your First Name' className='pt-2 pl-2 pb-2 w-full rounded-md border-solid border'  required />
                </div>
                <div className="w-6/12 max-[500px]:w-full h-18">
                      <label htmlFor="last_name">Last Name</label><br />
                      <input type="text"  id='last_name' title='Include your last name here' name="last_name" placeholder='Enter Your Last Name' className='pt-2 pl-2 pb-2 w-full rounded-md border-solid border' required />
                </div>
                </section>
                
                <div className='w-full h-16 mb-3'>
                      <label htmlFor="business_name">Business Name</label><br />
                      <input className='pt-2 pl-2 pb-2 w-full rounded-md border-solid border' type="text"  id='business_name' title='Include your business here' name="business_name" placeholder='Business Name' required />
                </div>
                <section className='flex max-[500px]:flex-wrap justify-between mb-3 gap-6'>
                <div className="w-6/12 max-[500px]:w-full h-18">
                      <label htmlFor="email_address">Email Address</label><br />
                      <input type="email"  title=' example: address@mail.com' id='email_address' name="email address" className='pt-2 pl-2 pb-2 w-full rounded-md border-solid border' placeholder='address@mail.com' required autoComplete="off" />
                </div>
                <div className='w-6/12 max-[500px]:w-full h-18'>
                      <label htmlFor="contact_number">Contact Number</label><br />
                      <PhoneInput 
                      className='pt-2 pl-2 pb-2 w-full rounded-md border-solid border'
                            defaultCountry="US"
                            placeholder="+1 12 345 6789"
                            value={value}
                            title="Enter phone number in correct format starting with your country code"
                            onChange={setValue}/>
                </div>
                </section>

                <section className='flex max-[500px]:flex-wrap justify-between mb-3 gap-6'>
                <div className="w-6/12 max-[500px]:w-full h-18">
                      <label htmlFor="password">Password</label><br />
                      <input type="password" className='pt-2 pl-2 pb-2 w-full rounded-md border-solid border'  id='password' name="password"  placeholder='Password'   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$" required autoComplete="off"  />
                </div>
                <div className="w-6/12 max-[500px]:w-full h-18">
                      <label htmlFor="confirm_password">Confirm Password</label><br />
                      <input type="password" className='pt-2 pl-2 pb-2 w-full rounded-md border-solid border'  id='confirm_password'  name="confirm_password" placeholder='Confirm Password'   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$" autoComplete="off"   required />
                </div>
                </section>
                
                <div>
                  <input type="checkbox" name="terms" id="check_terms" />
                  <label htmlFor="check_terms" className='ml-3'>I consent to receiving marketing material</label>
                </div>  
                <input type="submit" className='bg-[#0070F3] pt-3 pb-3 w-full not-italic font-medium text-sm leading-5 text-center text-white rounded-md mt-8' value="Sign Up" />
          </form>
    </section>
  )
}

export default Form