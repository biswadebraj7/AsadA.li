import React from 'react'
import banner from '../assets/image/banner.png';
import downpic from "../assets/image/downpic.png"
import side from "../assets/image/side.png"
import top from "../assets/image/top.png"

const Banner = () => {
  return (
    <div className='mx-auto max-w-[1620px]  pt-20'>
    <div className="hero ">
    <div className="hero-content relative flex-col lg:flex-row-reverse gap-12">
    <img className='ml-10 absolute top-36 right-0 w-24 h-24' src={side} alt="" />
      <img src={banner} className="mr-10 w-[547px] h-[808px] rounded-lg " />
     
      <div > 
     <div className=' relative pb-32'>
     <img className=' absolute w-28 h-28  top-0  right-0' src={top} alt="" />
     </div>
        <h1 className="text-8xl flex items-center font-semibold  gap-3">True <h2 className='text-[#FFAF00] text-8xl flex items-center font-normal '> Beauty</h2> </h1>
        <h3 className="text-5xl  text-[#262626] py-8  font-medium text-left">can radiate your uniqueness</h3>
        <p className=" font-normal text-xl text-[#505050] py-8 text-justfiy">K-Beauty got us hooked on Korean BB Creams and jelly cleansers. J-Beauty convinced us of the benefits of Japanese essences and sake ingredients. Probably we were bound to grab our beauty passports and move on to another country. And so we did: Now there’s G-Beauty.</p>
        <div className=' flex justify-start gap-3 items-center'>
        <a href="" className='btn bg-[#262626] font-semibold text-lg text-center  rounded-br-full w-60 h-20 text-[#FFFFFF]'>View Details</a>
        <a href="" className='btn bg-[#FFAF00] font-semibold text-lg text-center rounded-tl-full w-60 h-20 text-[#FFFFFF]'>Add To cart</a>
        

        </div>

        <div className=' flex justify-items-center justify-between gap-4 py-10'>
  <nav>
<h6 className=" font-semibold text-2xl text-[#262626]">Meterial</h6> 
<a className="link link-hover text-lg font-normal text-[#505050] w-[329px]">K-Beauty got us hooked on Korean BB Creams and jelly cleansers.</a>

</nav> 
<nav>
<h6 className=" font-semibold text-2xl text-[#262626]">Care</h6> 
<a className="link link-hover text-lg font-normal text-[#505050] w-[329px]">K-Beauty got us hooked on Korean BB Creams and jelly cleansers.</a>

</nav>
<nav className='mt-10'>
<img src={downpic} alt="" />
</nav> 

    </div>
      </div>
      

    </div>
    
  </div>

    </div>
  )
}

export default Banner
