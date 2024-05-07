import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaFacebookSquare } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className='mx-auto max-w-[1620px] ' >
      <footer className="footer  mx-auto py-10">
      <nav>
    <h6 className="footer-title font-normal text-4xl text-[#FFAF00]">Asad Ali</h6> 
    <p className=' font-normal text-base text-left text-[#CCCCCC] w-[381px] h-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
    <ul className=' flex justify-start items-center gap-2 py-2'>
    <a className="link link-hover text-[#FFAF00] "><FaInstagram className='w-10 h-10' /></a>
    <a className="link link-hover text-[#FFAF00]"><FiTwitter  className='w-10 h-10'/></a>
    <a className="link link-hover text-[#FFAF00] "><FaFacebookSquare className='w-10 h-10' /></a>
    </ul>

  </nav> 
   
  <nav>
    <h6 className="footer-title font-normal text-2xl text-[#FFAF00]">Products</h6> 
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Categories</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">New Arrival</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Popular</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Sale</a>
  </nav> 
  <nav>
    <h6 className="footer-title font-normal text-2xl text-[#FFAF00]">Company</h6> 
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">About</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">News</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Careers</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Services</a>
  </nav> 
  <nav>
    <h6 className="footer-title font-normal text-2xl text-[#FFAF00]">Support</h6> 
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Help Center </a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Delivery Service</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Privacy Policy</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA]">Terms of service</a>
  </nav> 
  <nav className='pl-8'>
    <h6 className="footer-title font-normal text-2xl text-[#FFAF00]">Contact</h6> 
    <p className=' font-normal text-base text-left text-[#CCCCCC] pb-3 w-[381px] h-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. </p>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA] flex items-center gap-1"> <IoCallSharp className="text-[#FFAF00]" />+1234567890</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA] flex items-center gap-1"> <MdOutlineEmail className="text-[#FFAF00]"  />asadali@outlook.com</a>
  </nav> 

</footer>
<div  className=' bg-[#FFAF00] h-1'>
</div>
<div className='py-5 flex justify-between items-center'>
  <small className='text-lg font-normal text-[#FAFAFA]'>Copyright © 2023 Asad Ali. All Right Reseved</small>
  <nav className='pl-8 flex justify-start items-start gap-1'>
  
   
    <a className="link link-hover text-lg font-normal text-[#FFAF00] flex items-center gap-1">EN</a>
    <a className="link link-hover text-lg font-normal text-[#FAFAFA] flex items-center gap-1">ID</a>
  </nav>
</div>
      
    </div>
  )
}

export default Footer
