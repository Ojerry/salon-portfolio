import React, { useState } from 'react';
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import logo from '../../assets/images/myLogo1.png'

const Header = () => {
    const menus = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Products',
            link: '/',
        },
        {
            name: 'Collection',
            link: '/',
        },
    ]
    const [mobileMenu, setMobileMenu] = useState(false)
    const menuBerger = () => {
      setMobileMenu(!mobileMenu)
    }
  
    return (
      <section className='bgColor sticky top-0 z-50'>
        <div className='container md:w-5/6 w-full mx-auto pt-5 pb-7 px-2 md:px-0'>
          <div className='flex justify-between items-center'>
            <div className='w-40'>
              <Link to="/" className="font-semi text-4xl primary_font"><img src={logo} alt="logo" className='' /></Link>
            </div>
            <div className='hidden md:block top-[100%]'>
              <ul className='flex md:flex-row flex-col md:gap-10 gap-3'>
                {menus?.map((menu, index) => (
                  <li key={index}>
                    <Link to={menu?.link} className='font-semi'>{menu?.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className='flex gap-6'>
                <li>
                  <Link to="/" className='text-xl'><BsCart4 /></Link>
                </li>
                <li>
                  <Link to="/login" className='text-xl'><AiOutlineUser /></Link>
                </li>
  
                <li onClick={() => menuBerger()} className='md:hidden block'>
                  <GiHamburgerMenu />
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {
          mobileMenu &&
          <div className='md:hidden block'>
            <ul className='flex md:flex-row flex-col md:gap-10 gap-3 menu text-center pb-3'>
              {menus?.map((menu, index) => (
                <li key={index}>
                  <a href={menu?.link} className='font-semi'>{menu?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        }
  
  
      </section>
    )
  }
  
export default Header