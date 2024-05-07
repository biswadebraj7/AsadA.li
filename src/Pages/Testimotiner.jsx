import React, { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import back1 from "../assets/image/back1.png"
import back2 from "../assets/image/back2.png"
const Testimotiner = () => {
   const [testdata, settest]=useState([]);
  useEffect(()=>{
    fetch("test.json")
    .then((res)=>res.json())
    .then((data)=>settest(data))
  },[])
  return (
    <div className='mx-auto max-w-[1620px]'>
      <div className=' flex justify-between items-center py-10'>
        <h1 className=' text-[#262626] font-semibold text-center text-5xl'>Testimoinials</h1>

        <div className=' flex justify-between items-center gap-3 relative'>
          <a href="" className='border-2 border-[#F7B525] rounded-full w-[74px] h-[74px]'><img className=' absolute top-5 left-5 ' src={back1} alt="" /></a>
          <a href="" className='bg-[#F7B525] rounded-full w-[74px] h-[74px]'><img  className=' absolute top-5 right-5 items-center' src={back2} alt="" /></a>
       

        </div>

        </div>

        <div  className=' card border-red-300 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto p-4 gap-3'>

          {
            testdata.map((item)=><>
            <div><ul className=' flex justify-start items-start gap-1'>
                        <li className='text-[#FFAF00] w-6 h-6'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-6 h-6'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-6 h-6'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-6 h-6'><IoIosStar /></li>
                        <li className='text-[#FFAF00] w-6 h-6'><IoIosStar /></li>
                    </ul>
            <p className=' font-normal text-[#505050] text-xl text-left py-4 w-[384px]'>{item.describe}</p>
            <div className=' flex justify-start gap-4 items-center'>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <span className=' font-medium text-xl text-[#262626] '>{item.name}</span>
                <p className=' font-medium text-xl text-[#9C9C9C] py-4'>{item.position}</p>
              </div>
            </div>

            </div>
            </>)
            

          }
        </div>

        <div className='w-full '>
            <div className='py-12  flex justify-between flex-wrap items-center gap-2  mx-auto flex-shrink'>
                <h1 className='text-[#505050] font-normal text-center text-6xl'>Mine</h1>
                <h1 className='text-[#505050] font-normal text-center text-6xl'>TOUCHUP</h1>
                <h1 className='text-[#505050] font-normal text-center text-6xl'>Skin Fresh</h1>
                <h1 className='text-[#505050] font-normal text-center text-6xl'>HoolaBuu</h1>

            </div>

        </div>
        
      
    </div>
  )
}

export default Testimotiner
