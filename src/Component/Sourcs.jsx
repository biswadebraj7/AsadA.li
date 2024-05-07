import React from 'react'
import group1 from "../assets/image/Group 276.png"
import group2 from "../assets/image/Group.png"
import { GiCheckMark } from "react-icons/gi";
import photo1 from "../assets/image/image 38 2.png"
import photo2 from "../assets/image/image 36 4.png"


const Sourcs = () => {
  return (
    <div className='mx-auto max-w-[1620px] py-20 bg-[#F9FBFE]'>
        <div className=' relative flex justify-between items-center'>
           
            <div className=''>
                <img src={group2} className=' absolute bottom-0  ' alt="" />

            </div>
            <div className='flex items-center justify-between pl-40 gap-10 '>
              <div className=' pb-32' >
                            <h3 className=' font-semibold text-5xl w-[384px]'>The Power of Purity Source</h3>
                    <p className=' font-normal text-base text-[#505050] w-[536px] pt-4'>Inspired by hydration and Japan’s beauty rituals, uruoi focuses on the core elements of skincare to combine powerful ingredients backed by science and authentically Japanese minimalist philosophy. 

                  </p>
                    <p className=' font-normal text-base text-[#505050] py-4'>
                    A blessing of water for every skin. Relieving dryness with gentle touch.
                    </p>
                        <ul>
                          <li className=' font-normal text-lg flex items-center justify-start gap-2 text-[#505050]'><GiCheckMark className='text-[#F7B525]'/> Our Cosmetics is 100% from Natural Ingredients</li>
                          <li className=' font-normal text-lg flex items-center justify-start gap-2 text-[#505050]'><GiCheckMark className='text-[#F7B525]'/>All of packaging process by modern machine </li>
                          <li className=' font-normal text-lg flex items-center justify-start gap-2 text-[#505050]'><GiCheckMark className='text-[#F7B525]'/> You can return our product if not original</li>
                        </ul>
              </div>
              <div className=' flex justify-center  relative'>
               <div className=' w-[390px] h-[420px] z-50 relative border-8 border-[#FFFFFF] bg-[#FFAF00]'>
               <img className=' absolute bottom-1 left-20 ' src={photo1} alt="" />
               </div>
                <div className='absolute top-32 bordered left-72  right-12 w-[290px] h-[370px] bg-[#FFAF00]'>
                <img className=' absolute right-0 ' src={photo2} alt="" />
                </div>
              </div>

            </div>
            <div>
                <img src={group1} alt="" />
            </div>

        </div>
        
      
    </div>
  )
}

export default Sourcs
