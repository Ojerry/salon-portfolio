import React from 'react'
import { IoCallOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import logo from '../../assets/images/myLogo1.png'

const Footer = () => {
  return (
    <>
      <section className='bg-[#292828] footer'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto py-9">
            <div className='grid md:grid-cols-4 grid-cols-1 justify-center gap-10 pt-8'>
              <div className='flex flex-col'>
                <img src={logo} alt="logo" className='w-1/2' />
                <p className='text-md text-gray-300 md:mt-8 md:mb-20 my-4'>Kuje, FCT, <br/>  Abuja, Nigeria</p>
                <p className='text-md text-gray-300'>@ 2022 <a className='underline' href="https:github.com/ojerry/">Ojerry</a>. All rights reserved.</p>
              </div>
              <div>
                <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>About us</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li><a className='text-md text-gray-300 capitalize' href="./">Our story</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">designer</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">sustainability</a></li>
                  </ul>
                </div>
              </div>
              <div>
              <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>Support</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li><a className='text-md text-gray-300 capitalize' href="./">FAQ's</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">shipping & returns</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">care guide</a></li>
                    <li><a className='text-md text-gray-300 capitalize' href="./">warranty</a></li>
                  </ul>
                </div>
              </div>
              <div>
              <div>
                  <h4 className='text-2xl text-white font-bold mb-6'>Contact us</h4>
                  <ul  className='flex flex-col md:gap-5 gap-2'>
                    <li className='flex gap-5 text-md text-gray-300 items-center'>
                        <span><a href="tel:+2347037816672"> <IoCallOutline className='text-2xl'/> </a></span>
                        <span><a href="tel:+2347037816672">+2347037816672</a></span>
                    </li>
                    <li className='flex gap-5 text-md text-gray-300 items-center'>
                        <span><a href="mailto:onotu128@gmail.com"> <HiOutlineMail className='text-2xl' /></a></span>
                        <span><a href="mailto:onotu128@gmail.com">onotu128@gmail.com</a></span>
                    </li>
                    <li className='flex gap-5 text-md text-gray-300 items-center my-6 ml-3'>
                        <span><a href="mailto:onotu128@gmail.com"> <FaFacebookF className='text-2xl' /></a></span>
                        <span><a href="mailto:onotu128@gmail.com"><BsInstagram className='text-2xl'/> </a></span>
                        <span><a href="mailto:onotu128@gmail.com"><AiOutlineTwitter className='text-2xl'/></a></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=' pt-14'>
              <p className='capitalize flex items-center justify-center gap-4'>
              <span><a href="./">Privacy policy</a></span> | 
              <span><a href="./">term of OSSU</a></span> | 
              <span><a href="./">OJ code</a></span>
                </p>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Footer