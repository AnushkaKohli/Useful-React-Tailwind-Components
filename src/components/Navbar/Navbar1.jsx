import React, { useState, useEffect, useRef } from "react";
import { GrMenu, GrClose } from "react-icons/gr";

const Navbar1 = () => {
  const targetEle = useRef(null);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }
  useEffect(() => {
    targetEle.current.classList.toggle('top-[9%]')
  }, [toggle]);
  return (
    <section className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <a href="/" className="flex items-center">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              alt="logo"
              className="w-16 cursor-pointer"
            />
            <p className="text-lg font-semibold">App Name</p>
          </a>
        </div>
        <div ref={targetEle} className="nav-links md:static absolute bg-white md:min-h-fit md:w-auto min-h-[60vh] left-0 top-[-100%] w-full flex items-center px-5">  
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li className="hover:text-gray-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#resource">Resource</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="#contact">Contact Us</a>
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
            {
              (toggle === false) ? 
              (<GrMenu onClick={handleToggle} className="text-3xl cursor-pointer md:hidden" />) :
              (<GrClose onClick={handleToggle} className="text-3xl cursor-pointer md:hidden" />)
            }      
        </div>
      </nav>
    </section>
  );
};

export default Navbar1;
