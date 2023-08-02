import React from 'react';
import image from '../../assets/images/img1.jpeg';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';

const Card1 = () => {
  return (
    <div className='bg-slate-900 h-screen flex justify-center items-center'>
    <div className='card font-sans w-80 bg-white flex flex-col rounded-xl text-center overflow-hidden'>
        <div className='imageContainer w-full h-64 rounded-t-inherit overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="profile" />
        </div>

        <div className='content px-6 py-4'>
            <h2 className='profileName text-2xl font-black mb-1'>
                Anushka Kohli
            </h2>
            <p className='jobTitle text-xs font-bold mb-5 uppercase text-[#8a23ce]'>
                Frontend Developer
            </p>
            <p className='description text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, unde aspernatur. Labore dolorem sapiente esse nisi consequatur non voluptates consequuntur voluptate. Expedita dolores suscipit quia exercitationem molestias voluptas dignissimos provident.
            </p>
        </div>

        {/* <div className='socialLinks w-full flex border-t-2 h-0 transition-[height] ease-in duration-300 hover:h-16'>
            <a className='instagram text-xl flex-1 p-5 text-center text-[#ee5487] hover:bg-[#ee5487] hover:text-white' href="/"><FaInstagram className='text-center' /></a>
            <a className='linkedin text-xl flex-1 p-5 text-center text-[#0077b5] hover:bg-[#0077b5] hover:text-white' href="/"><FaLinkedin className='text-center' /></a>
            <a className='twitter text-xl flex-1 p-5 text-center text-[#1da1f2] hover:bg-[#1da1f2] hover:text-white' href="/"><FaTwitter className='text-center' /></a>
        </div> */}
    </div>
    </div>
  )
}

export default Card1;