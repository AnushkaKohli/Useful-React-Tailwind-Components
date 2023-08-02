import React, { useState, useEffect, useRef } from 'react';
import { HiHome, HiInformationCircle, HiBriefcase, HiCurrencyDollar, HiPhone } from 'react-icons/hi'

const Navbar2 = () => {
  // const targetEle = useRef(null);
  // const [toggle, setToggle] = useState(false);
  // const handleToggle = () => {
  //   setToggle(!toggle);
  // }
  // useEffect(() => {
  //   targetEle.current.classList.toggle('top-[9%]')
  // }, [toggle]);
  return (
    <section>
        <nav className='fixed top-5 left-1/2 -translate-x-1/2 mx-auto flex justify-between items-center text-xl px-8 bg-[#222] shadow-[0 5px 15px rgba(0, 0, 0, 0.25)] w-[95%] h-20 rounded-xl'>
            <div>
              <a href="/" className="flex items-center">
                <img
                  src="https://img.freepik.com/free-vector/bird-colorful    -logo-gradient-vector_343694-1365.jpg"
                  alt="logo"
                  className="w-16 cursor-pointer"
                />
                <p className="text-lg font-semibold text-white pl-3">App Name</p>
              </a>
            </div>
            <div>
                <ul className='group grid grid-cols-6 gap-2.5	items-center justify-end text-white py-3 px-4'>
                    <li className="hover:text-gray-500">
                      <HiHome className='mr-3'/>  <a href="/">Home</a>
                    </li>
                    <li className="hover:text-gray-500">
                      <HiInformationCircle className='mr-3'/>  <a href="#about">About Us</a>
                    </li>
                    <li className="hover:text-gray-500">
                      <HiBriefcase className='mr-3'/>  <a href="#resource">Services</a>
                    </li>
                    <li className="hover:text-gray-500">
                      <HiCurrencyDollar className='mr-3'/>  <a href="#pricing">Pricing</a>
                    </li>
                    <li className="hover:text-gray-500">
                      <HiPhone className='mr-3'/>  <a href="#contact">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-6">
            <button className="bg-[#b5a6ee] text-white px-5 py-2 rounded-full hover:bg-[#9187ec]">
                SignIn
            </button>
            <button className="bg-[#b5a6ee] text-white px-5 py-2 rounded-full hover:bg-[#9187ec]">
                SignUp
            </button>
            {/* {
              (toggle === false) ? 
              (<GrMenu onClick={handleToggle} className="text-3xl cursor-pointer md:hidden" />) :
              (<GrClose onClick={handleToggle} className="text-3xl cursor-pointer md:hidden" />)
            }       */}
        </div>
        </nav>
    </section>
  )
}

export default Navbar2;