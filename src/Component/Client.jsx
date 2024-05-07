import React from 'react'
import vector1 from "../assets/image/Vector.png"
import vector2 from "../assets/image/Vector (1).png"
import { IoIosStar } from "react-icons/io";

const Client = () => {
  return (
    <div className='mx-auto max-w-[1620px] pt-20 pb-10'>
    <div className=' flex justify-between items-center bg-[#F9FBFE] '>
      
        <div>
            <img src={vector2} alt="" />
        </div>
        <div className=' flex justify-between items-center gap-10'>
            <div className=' w-3/4 leading-3'>
               
                <span className=' font-semibold text-5xl text-left flex justify-start items-center '>Trusted By Over<span className=' text-[#FFAF00] font-semibold text-5xl flex justify-start items-center'>400,000 <span className='font-semibold text-5xl text-[#262626] flex justify-start items-center'>+</span>Client</span>  </span>
                <span className='py-5 font-semibold text-5xl gap-2 text-left flex justify-start items-center'>Worldw ide Since <h1 className=' text-[#FFAF00] font-semibold text-5xl'> 2002 </h1>  </span>
            </div>
           
                <div className=' flex items-center justify-between'>
                <ul>
                    <li className=' text-5xl font-semibold text-center'>4.6</li>
                    <ul className=' flex justify-start items-start py-3 pl-4 gap-1'>
                        <li className='text-[#FFAF00] w-5 h-5'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-5 h-5'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-5 h-5'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-5 h-5'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-5 h-5'><IoIosStar /></li>
                    </ul>
                    <li className=' font-normal text-2xl text-center w-[156px]'>3500 Ratings</li>
                </ul>
                <ul>
            <li className=' text-5xl font-semibold text-center'>6M+</li>
            <li className=' font-normal text-2xl text-center w-[227px] py-3'>Worldwide Product Sale per year</li>
            </ul>
                    
                    </div> 
            

        </div>
        
           

        
        <div>
            <img src={vector1} alt="" />
        </div>

    </div>
  
</div>
  )
}

export default Client
