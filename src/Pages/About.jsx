import React from 'react'
import about from "../assets/image/Group 238.png"

const About = () => {
  return (

<div className='mx-auto max-w-[1620px]'>
<div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row gap-32">
  <img src={about} alt="" />
    <div>
    <p className='font-normal text-xl text-left'>A bit </p>
            <h1 className='pt-4 text-5xl font-semibold text-left'>About Us</h1>
            <p className=' py-10 font-normal text-xl text-left'>Care beauty dolor sit amet, consectetur adipiscing elit. Congue amet aenean sed enim odio. Tellus tristique ipsum congue semper pretium nibh tellus, diam. Mi, ac sit risus risus netus in accumsan. Facilisi aliquam duis velit sed. Sed id nisl velit, massa morbi purus pellentesque. Libero convallis scelerisque quam in at tincidunt. Rutrum tristique fusce pretium aliquet egestas faucibus tortor tortor in.</p>
           <a href="" className='btn bg-[#FFAF00] font-semibold text-lg text-center  rounded-br-full w-60 h-20 text-[#FFFFFF]'>View Details</a>
    </div>
  </div>
</div>

</div>
   
  )
}

export default About
